"use client";

import { useAuth } from "@/hooks/useAuth";
import MySelect from "../ui/my-select";
import useSelectCurrency from "@/hooks/useSelectCurrency";
import useUserPlan from "@/hooks/useUserPlan";
import { cn, formatCurrency } from "@/lib/utils";
import { FaInfo } from "react-icons/fa";
import Link from "next/link";
import { durations, planNames } from "@/assets/data/data";

export default function Bundles() {
  const { user } = useAuth();
  const userCurrency = user?.currency || "NGN";

  const { supportedCountries, selectedCurrency, setSelectedCurrency } =
    useSelectCurrency({
      defaultCurrency: userCurrency,
    });
  const { userPlan, availableCurrency } = useUserPlan({
    currency: selectedCurrency?.split(" ").pop() || "NGN",
  });

  const plans = planNames.map((planType) => {
    return {
      name: planType,
      duration: durations.map((duration) => {
        return `${duration} ${planType} plan ${formatCurrency(
          userPlan[planType][duration],
          availableCurrency
        )}`;
      }),
    };
  });

  return (
    <>
      <div className="flex items-center gap-6 justify-between">
        <p className="flex-1 font-semibold">Select a plan</p>
        <div className="flex items-center justify-end gap-4 flex-1">
          <p className="font-medium">Change currency: </p>

          <div className="max-w-xs w-full flex-1">
            <MySelect
              options={supportedCountries}
              bgDashboard
              selectedOption={selectedCurrency}
              setSelectedOption={setSelectedCurrency}
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-6">Football plans</h1>
      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-10">
        {plans?.map((plan) => (
          <div
            key={plan.name}
            className="w-full bg-white shadow border border-gray-two lg:p-6 p-4 rounded dark:bg-blue-two dark:border-0"
          >
            <div className="border-gray-two pb-4 border-b flex items-center justify-between">
              <h3 className="capitalize">{plan.name} plan</h3>
              <div className="w-8 h-8 rounded-full border-cyan text-cyan flex items-center justify-center border">
                <FaInfo />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {plan.duration.map((duration, index) => {
                const planDuration = duration.split(" ").splice(0, 2).join("-");
                return (
                  <Link
                    href={`/dashboard/payment/?currency=${availableCurrency}&plan=${plan.name}&duration=${planDuration}`}
                    key={index}
                    className={cn(
                      "px-4 rounded flex bg-yellow-sunset text-white py-4 hover:bg-white hover:border hover:border-yellow-sunset items-center justify-between gap-4 hover:text-yellow-sunset",
                      {
                        "bg-purple-royal text-white hover:bg-white hover:border hover:border-purple-royal hover:text-purple-royal":
                          plan.name === "premium",
                      }
                    )}
                  >
                    <p>{duration}</p>
                    <button className="">Buy</button>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
