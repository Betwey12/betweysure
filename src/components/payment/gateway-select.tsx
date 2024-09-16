"use client";
import flutterwave from "@/assets/icons/flutterwave.webp";
import paystack from "@/assets/icons/paystack.png";
import wallet from "@/assets/icons/wallet.png";
import bank from "@/assets/icons/bank.png";

import Image from "next/image";
import { FaInfo } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import { closePaymentModal } from "flutterwave-react-v3";
import {
  flutterwavePlanCodes,
  paystackPlanCodes,
  plans,
} from "@/assets/data/data";
import usePayment from "@/hooks/usePayment";
import { HTTPRequest } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type TPayload = {
  userid?: string;
  method: string;
  reference: string;
  plan: string;
};

export default function GatewaySelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const planName = searchParams.get("plan");
  const duration = searchParams.get("duration");
  const currency = searchParams.get("currency") || "NGN";
  const plan = plans[currency] ? plans[currency] : plans["NGN"];
  const availableCurrency = plans[currency] ? currency : "NGN";
  const amount = plan[planName!][duration!.replace(/-/, " ")] || 0;

  const [clickedIndex, setClickedIndex] = useState(0);

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: (data: TPayload) => HTTPRequest.Post("wallet/subscribe", data),
  });

  const { handleFlutterPayment, handlePaystackPayment } = usePayment({
    amount,
    currency: availableCurrency,
    planCode:
      paystackPlanCodes[
        `${duration}-${planName}` as keyof typeof paystackPlanCodes
      ],
    flutterwavePlanCode:
      flutterwavePlanCodes[
        `${duration}-${planName}` as keyof typeof flutterwavePlanCodes
      ],
  });

  async function handleUpdatePlan(reference?: string, planGateway?: string) {
    const userId = user?._id;

    const response = await mutateAsync({
      userid: userId,
      method: planGateway!,
      reference: reference!,
      plan: `${duration?.toLowerCase()}-${planName?.toLowerCase()}`,
    });

    if (!response.success || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success("Payment successfull");
    router.push("/dashboard");
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
    if (!plan || !duration) {
      toast.error("Please select a plan");
      router.push("/dashboard/buy-plan");
    }

    if (gateway === "paystack" && availableCurrency !== "NGN") {
      return toast.error(
        "Paystack only supports NGN currency. Select a different payment method"
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
            className="text-white text-sm bg-yellow-sunset hover:bg-white hover:border hover:border-yellow-sunset hover:text-yellow-sunset text-center px-4 py-2 rounded disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isPending || gateway.name === "bank transfer"}
            title={
              gateway.name === "bank transfer"
                ? "Complete bank transfer using paystack or flutter"
                : ""
            }
          >
            <span className="flex items-center gap-2">
              Pay with {gateway.name}
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
  },

  {
    name: "wallet",
    logo: wallet,
  },

  {
    name: "paystack",
    logo: paystack,
  },
  {
    name: "bank transfer",
    logo: bank,
  },
];