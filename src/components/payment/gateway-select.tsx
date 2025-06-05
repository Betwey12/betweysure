"use client";
import flutterwave from "@/assets/icons/flutterwave.webp";
import paystack from "@/assets/icons/paystack.png";
import wallet from "@/assets/icons/wallet.png";
import bank from "@/assets/icons/bank.png";
import mobileMoney from "@/assets/icons/mobile-money.png";
import crypto from "@/assets/icons/crypto.png";

import Image from "next/image";
import { FaInfo } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import { closePaymentModal } from "flutterwave-react-v3";
import {
  EDuration,
  EPaidPlanNames,
  plans,
  plansKeys,
} from "@/assets/data/data";
import usePayment from "@/hooks/usePayment";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useGetUser from "@/hooks/useGetUser";
import { fonbnkDetails } from "@/constants";
import Modal from "../shared/modal";
import CloseTimes from "../ui/close";

type TPayload = {
  method: string;
  reference: string;
  plan: string;
};

export default function GatewaySelect() {
  const router = useRouter();
  const { user } = useGetUser();
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") as EPaidPlanNames;
  const durationParams = searchParams.get("duration");
  const currency = searchParams.get("currency") || "NGN";
  const plan = plans[currency] ? plans[currency] : plans["NGN"];
  const availableCurrency = plans[currency] ? currency : "NGN";
  const duration = durationParams!.replace(/-/, " ") as EDuration;
  const amount = plan[planName!][duration] || 0;
  const [showAddress, setShowAddress] = useState(false);

  const [clickedIndex, setClickedIndex] = useState(0);
  const [copied, setCopied] = useState<number>();

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: (data: TPayload) => HTTPRequest.Post("wallet/subscribe", data),
  });

  const planKey = plansKeys.find(
    (key) =>
      `${durationParams?.toLowerCase()}-${planName?.toLowerCase()}` === key,
  );

  const { handleFlutterPayment, handlePaystackPayment } = usePayment({
    amount,
    currency: availableCurrency,
  });

  async function handleUpdatePlan(reference?: string, planGateway?: string) {
    if (!planKey) {
      return toast.error("Invalid plan");
    }
    const response = await mutateAsync({
      method: planGateway!,
      reference: reference!,
      plan: planKey,
    });

    if (!response.success || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success(`Payment successfull. You are now a ${planName} subscriber`);
    router.push("/payment-confirmation");
  }

  const onSuccess = (response: any) => {
    if (response.status === "success" || response.status === "completed") {
      handleUpdatePlan(response?.reference, "paystack");
    }
  };

  const flutterCallback = (response: any) => {
    if (response.charge_response_code === "00") {
      handleUpdatePlan(response.tx_ref, "flutterwave");
    }
    closePaymentModal(); // this will close the modal programmatically
  };

  const onClose = () => {
    console.log("closed");
  };

  function handlePaystackGateway() {
    if (availableCurrency !== "NGN") {
      return toast.error(
        "Paystack only supports NGN currency. Select a different payment method",
      );
    }

    handlePaystackPayment({
      onSuccess,
      onClose,
    });
    return;
  }

  function handleFlutterGateway() {
    handleFlutterPayment({
      callback: flutterCallback,
      onClose,
    });
    return;
  }

  function handleWalletPayment() {
    return handleUpdatePlan("wallet", "wallet");
  }

  function copyToClipboard(address: string, index: number) {
    navigator.clipboard.writeText(address);
    toast.success(
      "Address copied to clipboard. Please contact support after payment",
    );
    setCopied(index);
  }

  const paymentGateways = [
    {
      name: "flutterwave",
      logo: flutterwave,
      title: "flutterwave",
      onClick: handleFlutterGateway,
    },
    {
      name: "flutterwave",
      logo: mobileMoney,
      title: "mobile money",
      onClick: handleFlutterGateway,
    },
    {
      name: "wallet",
      logo: wallet,
      title: "wallet",
      onClick: handleWalletPayment,
    },
    {
      name: "paystack",
      logo: paystack,
      title: "paystack",
      info: "Currently only supports NGN",
      onClick: handlePaystackGateway,
    },
    {
      name: "flutterwave",
      logo: bank,
      title: "bank transfer",
      onClick: handleFlutterGateway,
      info: "Complete bank transfer using paystack or flutter",
    },
    {
      name: "crypto",
      logo: crypto,
      title: "crypto",
      info: "USDT payments only",
      onClick: () => {
        const userId = user?._id;
        if (currency !== "USD") {
          toast.error("Please change currency to USD");
          router.push("/dashboard/buy-plan");
          return;
        }
        if (
          !userId ||
          !fonbnkDetails.source ||
          !fonbnkDetails.address ||
          !fonbnkDetails.network
        ) {
          toast.error("Please login to continue");
          return;
        }

        const params = new URLSearchParams({
          ...fonbnkDetails,
          orderParams: userId,
          amount: amount.toString(),
          freezeAmount: amount.toString(),
        }).toString();

        router.push(`https://pay.fonbnk.com/?${params}`);
      },
    },
    {
      name: "crypto",
      logo: crypto,
      title: "Crypto Transfer",
      onClick: () => setShowAddress(true),
      info: "Complete crypto transfer using wallet address",
    },
  ];

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-4">
        {paymentGateways.map((gateway, index) => (
          <div
            key={index}
            className="flex relative border border-cyan justify-between flex-col capitalize items-center gap-4 p-4 px-2 rounded cursor-pointer dark:bg-blue-three"
          >
            {gateway.info && (
              <span className="flex items-center gap-1 justify-center text-[9px] font-medium  w-full ">
                <FaInfo className="text-yellow-500 border rounded-full border-yellow-500" />
                {gateway.info}
              </span>
            )}

            <Image
              width={40}
              height={40}
              src={gateway.logo}
              alt={gateway.name}
              className="w-10 h-10"
            />

            <Button
              onClick={() => {
                setClickedIndex(index);

                if (!plan || !durationParams) {
                  toast.error("Please select a plan");
                  router.push("/dashboard/buy-plan");
                }
                gateway.onClick();
              }}
              className="text-white gap-2 text-sm bg-yellow-sunset hover:bg-white hover:border hover:border-yellow-sunset hover:text-yellow-sunset text-center px-4 py-2 rounded disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending}
              title={
                gateway.title === "bank transfer"
                  ? "Complete bank transfer using paystack or flutter"
                  : ""
              }
            >
              <span className="flex items-center gap-2">
                Pay with {gateway.title}
              </span>
              {isPending && clickedIndex === index && (
                <FaSpinner className="animate-spin" />
              )}
            </Button>
          </div>
        ))}
      </div>
      {showAddress && (
        <Modal>
          <div className="flex flex-col gap-4 items-center justify-center max-w-[500px] p-4 lg:p-6">
            <h3 className="text-3xl font-bold text-center">
              Copy wallet address to complete your payement
            </h3>
            <ul className="flex flex-col gap-1 w-full">
              {walletAddress.map(({ address, currency, type }, index) => (
                <li
                  className="w-full p-4 flex items-center justify-between gap-4 bg-gray-light dark:bg-blue-two rounded"
                  key={index}
                >
                  {type} {currency}
                  <button
                    className="text-white bg-cyan px-6 py-1 rounded"
                    onClick={() => copyToClipboard(address, index)}
                  >
                    {copied === index ? "Copied!" : "Copy"}
                  </button>
                </li>
              ))}
            </ul>
            <CloseTimes
              onClick={() => setShowAddress(false)}
              className="hover:text-red-500"
            />
          </div>
        </Modal>
      )}
    </>
  );
}

const walletAddress = [
  {
    type: "erc20",
    currency: "USDT",
    address: "0xc9F466774cfbB0ceAD677C93a07b327D6dc7282E",
  },
  {
    type: "trx",
    currency: "USDT",
    address: "TWY3yk8ooHkdcJV22JkkH8YowT78fW1Cek",
  },
  {
    type: "sol",
    currency: "USDT",
    address: "4qAFdXoSJDEWeHq3B25fdoFCSjFCgJ4bf18zSyNC8dzG",
  },
  {
    type: "erc20",
    currency: "USDC",
    address: "0xc9F466774cfbB0ceAD677C93a07b327D6dc7282E",
  },
];
