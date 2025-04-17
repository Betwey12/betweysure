"use client";

import { EDuration, EPaidPlanNames, plans } from "@/assets/data/data";
import { formatCurrency } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const GatewaySelect = dynamic(
  () => import("@/components/payment/gateway-select"),
  {
    ssr: false,
  },
);

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planName = searchParams.get("plan") as EPaidPlanNames;
  const durationParams = searchParams.get("duration");
  const currency = searchParams.get("currency") || "NGN";

  const plan = plans[currency] ? plans[currency] : plans["NGN"];
  const availableCurrency = plans[currency] ? currency : "NGN";
  const duration = durationParams!.replace(/-/, " ") as EDuration;

  const amount = plan[planName!][duration] || 0;

  useEffect(() => {
    if (!plan || !durationParams) {
      router.push("/dashboard/buy-plan");
    }
  }, [plan, durationParams, router]);

  return (
    <div className="w-full bg-white shadow border border-gray-two lg:p-6 p-4 rounded dark:bg-blue-two dark:border-0">
      <h1 className="lg:text-2xl text-xl">Checkout</h1>

      <div className="flex items-center justify-between border border-cyan rounded p-4 lg:p-6 mt-6">
        <div>
          <p>
            Plan: <span className="capitalize text-red-500">{planName}</span>
          </p>
          <p>
            Duration:{" "}
            <span className="text-cyan">
              {durationParams?.split("-").join(" ")} plan
            </span>
          </p>
        </div>
        <p>
          Amount:{" "}
          <span className="text-green-500 text-xl font-semibold">
            {formatCurrency(amount, availableCurrency)}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10 lg:mt-20">
        <h3>Select Payment Gateway</h3>
        <GatewaySelect />
      </div>
    </div>
  );
}
