"use client";
import flutterwave from "@/assets/icons/flutterwave.webp";
import paystack from "@/assets/icons/paystack.png";
import wallet from "@/assets/icons/wallet.png";
import bank from "@/assets/icons/bank.png";
import mobileMoney from "@/assets/icons/mobile-money.png";

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

type TPayload = {
  method: string;
  reference: string;
  plan: string;
};

export default function GatewaySelect() {
  const router = useRouter();
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

  function handlePayment(gateway: string) {
    if (!plan || !durationParams) {
      toast.error("Please select a plan");
      router.push("/dashboard/buy-plan");
    }

    if (gateway === "paystack" && availableCurrency !== "NGN") {
      return toast.error(
        "Paystack only supports NGN currency. Select a different payment method",
      );
    }

    if (gateway === "paystack") {
      handlePaystackPayment({
        onSuccess,
        onClose,
      });
      return;
    }
    if (gateway === "flutterwave") {
      handleFlutterPayment({
        callback: flutterCallback,
        onClose,
      });
      return;
    }
    return handleUpdatePlan("wallet", "wallet");
  }

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {paymentGateways.map((gateway, index) => (
        <div
          key={index}
          className="flex relative border border-cyan justify-between flex-col capitalize items-center gap-4 p-4 px-2 rounded cursor-pointer dark:bg-blue-three"
        >
          {gateway.name === "bank transfer" && (
            <span className="flex items-center gap-1 justify-center text-[9px]   w-full ">
              <FaInfo className="text-yellow-500 border rounded-full border-yellow-500" />
              Complete bank transfer using paystack or flutter
            </span>
          )}
          {gateway.name === "paystack" && (
            <span className="flex items-center gap-1 justify-center text-[9px]   w-full ">
              <FaInfo className="text-yellow-500 border rounded-full border-yellow-500" />
              Currently only supports NGN
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
              handlePayment(gateway.name);
            }}
            className="text-white gap-2 text-sm bg-yellow-sunset hover:bg-white hover:border hover:border-yellow-sunset hover:text-yellow-sunset text-center px-4 py-2 rounded disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isPending}
            title={
              gateway.name === "bank transfer"
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

const paymentGateways = [
  {
    name: "flutterwave",
    logo: flutterwave,
    title: "flutterwave",
  },
  {
    name: "flutterwave",
    logo: mobileMoney,
    title: "mobile money",
  },

  {
    name: "wallet",
    logo: wallet,
    title: "wallet",
  },

  {
    name: "paystack",
    logo: paystack,
    title: "paystack",
  },
  {
    name: "flutterwave",
    logo: bank,
    title: "bank transfer",
  },
];
