"use client";

import { FaCheck } from "react-icons/fa";
import { formatCurrency } from "../../lib/utils";
import { cn } from "../../lib/utils";
import { useAuth } from "../../hooks/useAuth";
import { plans } from "@/assets/data/data";
import useSelectCurrency from "@/hooks/useSelectCurrency";
import MySelect from "../ui/my-select";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PricingPlans() {
  const {
    packages,
    supportedCountries,
    setSelectedCurrency,
    selectedCurrency,
    pricing,
    currency,
  } = usePricingPlans();

  return (
    <div className="flex flex-col lg:gap-40 gap-20 dark:text-white">
      <div className="flex items-stretch justify-center lg:gap-2 px-4 lg:px-0">
        {packages.map((predictionPackage) => (
          <PackageCard
            predictionPackage={predictionPackage}
            key={predictionPackage.name}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-8 lg:gap-10 lg:px-20 px-4 md:px-10">
        <div className="self-end max-w-xs w-full z-10 border border-gray-two rounded">
          <MySelect
            options={supportedCountries}
            bgDashboard
            selectedOption={selectedCurrency}
            setSelectedOption={setSelectedCurrency}
          />
        </div>
        {Object.keys(pricing).map((planName) => (
          <div key={planName} className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-2xl lg:text-4xl capitalize text-inherit">
              {planName} Plan
            </h2>
            <div className="grid grid-cols-2 lg:flex items-center gap-4">
              {
                // @ts-expect-error ignore
                pricing[planName].map((pricing) => (
                  <PlanCard
                    plan={{
                      ...pricing,
                      name: planName,
                    }}
                    key={pricing.duration}
                    currency={currency}
                  />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  currency,
}: {
  plan: {
    duration: string;
    price: number;
    name: string;
  };
  currency: string;
}) {
  const { user } = useAuth();
  const t = useTranslations("PRICING_PLANS");
  const duration = plan.duration.replace(/\s/g, "-");

  return (
    <div className="flex relative lg:min-w-[220px] flex-col items-center gap-4 p-6 pt-12 rounded-xl bg-white border border-gray-two shadow text-blue-three dark:bg-blue-two dark:text-white">
      <p className="capitalize">{plan.duration} Plan</p>
      <h3 className="text-2xl lg:text-3xl">
        {formatCurrency(plan.price, currency)}
      </h3>

      <Link
        href={
          !user
            ? "/auth/login"
            : `/dashboard/payment?currency=${currency}&plan=${plan?.name}&duration=${duration}`
        }
        className="w-full rounded lg:text-base text-sm flex items-center justify-center py-3 bg-cyan text-white"
      >
        {t("CHOOSE_PLAN")}
      </Link>
    </div>
  );
}

function PackageCard({
  predictionPackage,
}: {
  predictionPackage: (typeof packages)[0];
}) {
  const t = useTranslations("PRICING_PLANS");
  const { user } = useAuth();
  return (
    <div
      className={cn(
        "flex relative flex-col border border-gray-two items-center gap-4 px-2 lg:p-6 py-12 lg:rounded-xl shadow-lg bg-white text-blue-three dark:bg-blue-one dark:text-white",
        {
          "bg-blue-one text-white": predictionPackage.name !== "Standard",
          "bg-gradient-to-bl to-purple-royal from-purple-800 via-purple-500 text-white":
            predictionPackage.name === "Standard",
        }
      )}
    >
      <h3 className="capitalize text-center text-2xl lg:text-4xl">
        {predictionPackage.name} Plan
      </h3>

      <div
        className={cn("w-[80%] h-[1px] bg-blue-three lg:my-4 my-2", {
          "bg-white": predictionPackage.name === "monthly",
        })}
      />

      <div className="flex flex-col gap-2 lg:gap-4 w-full">
        {predictionPackage.features.map((feature) => (
          <div className="flex items-center gap-2" key={feature}>
            <FaCheck
              className={cn("text-white", {
                "text-cyan": predictionPackage.name !== "Standard",
              })}
            />
            <p className="text-xs">{feature}</p>
          </div>
        ))}
      </div>
      {predictionPackage.name !== "Free" && (
        <Link
          href={
            !user
              ? "/auth/login"
              : `/dashboard/buy-plan?plan=${predictionPackage.name}&duration=monthly`
          }
          className="w-full rounded lg:text-base text-xs px-2 lg:px-4 flex items-center justify-center py-3 bg-yellow-sunset mt-20 text-white"
        >
          {t("SUBSCRIBE_NOW")}
        </Link>
      )}
    </div>
  );
}

function usePricingPlans() {
  const t = useTranslations("PRICING_PLANS");
  const { user } = useAuth();

  const userCurrency = user?.currency || "NGN";
  const { supportedCountries, selectedCurrency, setSelectedCurrency } =
    useSelectCurrency({
      defaultCurrency: userCurrency,
    });

  const currency =
    selectedCurrency?.split(" ")[selectedCurrency?.split(" ").length - 1];
  const plan = plans[currency] ? plans[currency] : plans["NGN"];

  const pricing = Object.keys(plan).reduce((acc, key) => {
    const durations = Object.keys(plan[key]);
    const prices = durations.map((duration) => {
      return {
        duration,
        price: plan[key][duration],
      };
    });
    return {
      ...acc,
      [key]: prices,
    };
  }, {});

  const packages = [
    {
      name: "Free",
      features: [
        t("FREE_FEATURES.ONE"),
        t("FREE_FEATURES.TWO"),
        t("FREE_FEATURES.THREE"),
        t("FREE_FEATURES.FOUR"),
        t("FREE_FEATURES.FIVE"),
        t("FREE_FEATURES.SIX"),
        t("FREE_FEATURES.SEVEN"),
      ],
    },
    {
      name: "Standard",
      features: [
        t("STANDARD_FEATURES.ONE"),
        t("STANDARD_FEATURES.TWO"),
        t("STANDARD_FEATURES.THREE"),
        t("STANDARD_FEATURES.FOUR"),
        t("STANDARD_FEATURES.FIVE"),
        t("STANDARD_FEATURES.SIX"),
        t("STANDARD_FEATURES.SEVEN"),
        t("STANDARD_FEATURES.EIGHT"),
      ],
    },
    {
      name: "Premium",
      features: [
        t("PREMIUM_FEATURES.ONE"),
        t("PREMIUM_FEATURES.TWO"),
        t("PREMIUM_FEATURES.THREE"),
        t("PREMIUM_FEATURES.FOUR"),
        t("PREMIUM_FEATURES.FIVE"),
        t("PREMIUM_FEATURES.SIX"),
        t("PREMIUM_FEATURES.SEVEN"),
        t("PREMIUM_FEATURES.EIGHT"),
        t("PREMIUM_FEATURES.NINE"),
        t("PREMIUM_FEATURES.TEN"),
        t("PREMIUM_FEATURES.ELEVEN"),
        t("PREMIUM_FEATURES.TWELVE"),
        t("PREMIUM_FEATURES.THIRTEEN"),
        t("PREMIUM_FEATURES.FOURTEEN"),
      ],
    },
  ];
  return {
    packages,
    supportedCountries,
    setSelectedCurrency,
    selectedCurrency,
    pricing,
    currency,
  };
}
