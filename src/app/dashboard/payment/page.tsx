import { EDuration, EPlanName, plans } from "@/assets/data/data";
import GatewaySelect from "@/components/payment/gateway-select";
import { formatCurrency } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const planName = searchParams.plan as EPlanName;
  const durationParams = searchParams.duration as EDuration;
  const currency = (searchParams.currency as string) || "NGN";
  const plan = plans[currency] ? plans[currency] : plans["NGN"];
  const availableCurrency = plans[currency] ? currency : "NGN";
  const duration = durationParams!.replace(/-/, " ") as EDuration;

  const amount = plan[planName!][duration] || 0;

  if (!plan || !durationParams) {
    redirect("/dashboard/buy-plan");
  }

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
