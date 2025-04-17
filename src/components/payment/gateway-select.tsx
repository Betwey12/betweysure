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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useGetUser from "@/hooks/useGetUser";

type TPayload = {
  method: string;
  reference: string;
  plan: string;
};

const fonbnkDetails = {
  source: process.env.NEXT_PUBLIC_FONBNK_SOURCE,
  network: process.env.NEXT_PUBLIC_FONBNK_NETWORK,
  address: process.env.NEXT_PUBLIC_FONBNK_WALLET_ADDRESS,
  asset: process.env.NEXT_PUBLIC_FONBNK_ASSET ?? "USDC",
  callbackUrl: process.env.NEXT_PUBLIC_BASE_URL + "/dashboard",
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

  const [clickedIndex, setClickedIndex] = useState(0);

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
          source: "ysIzEXl5",
          orderParams: userId,
          amount: amount.toString(),
          freezeAmount: amount.toString(),
          freezeWallet: "1",
          network: fonbnkDetails.network,
          address: fonbnkDetails.address,
          currency: "usdc",
          hideSwitch: "true",
          callbackUrl: fonbnkDetails.callbackUrl,
          asset: fonbnkDetails.asset,
        }).toString();

        router.push(`https://pay.fonbnk.com/?${params}`);
      },
    },
  ];

  return (
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
  );
}
