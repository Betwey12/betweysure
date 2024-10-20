"use client";

import { FaCheck } from "react-icons/fa";
import { cn, formatCurrency } from "../../lib/utils";
import { useAuth } from "../../hooks/useAuth";
import { plans } from "@/assets/data/data";
import useSelectCurrency from "@/hooks/useSelectCurrency";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { TPlanType } from "@/constants";
import MySelect from "../ui/my-select";

export default function PricingPlans() {
  const {
    packages,
    supportedCountries,
    selectedCurrency,
    setSelectedCurrency,
  } = usePricingPlans();

  return (
    <div className="flex flex-col gap-10 dark:text-white md:px-10 px-4 lg:px-20">
      <div className="z-10 w-full max-w-xs border-gray-two rounded border">
        <MySelect
          options={supportedCountries}
          bgDashboard
          selectedOption={selectedCurrency}
          setSelectedOption={setSelectedCurrency}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-0">
        {packages.map((predictionPackage) => (
          <PackageCard
            predictionPackage={predictionPackage}
            key={predictionPackage.name}
            selectedCurrency={selectedCurrency}
          />
        ))}
      </div>
    </div>
  );
}

type TPackage = {
  title: string;
  name: string;
  price: number;
  features: string[];
}[];

function PackageCard({
  predictionPackage,
  selectedCurrency,
}: {
  predictionPackage: TPackage[number];
  selectedCurrency: string;
}) {
  const t = useTranslations("PRICING_PLANS");
  const { user } = useAuth();
  const isFree = predictionPackage.name === TPlanType.FREE;
  const currencyCode =
    selectedCurrency?.split(" ")[selectedCurrency?.split(" ")?.length - 1];

  return (
    <div
      className={cn(
        "flex relative flex-col border border-gray-two items-center justify-between gap-4 px-4 lg:p-6 py-12 lg:rounded-xl shadow-lg bg-white text-blue-three dark:bg-blue-one dark:border-0 dark:text-white rounded",
        {
          "dark:bg-blue-one dark:text-white":
            predictionPackage.name !== TPlanType.PREMIUM,
          "bg-gradient-to-bl to-purple-royal from-purple-800 via-purple-500 text-white":
            predictionPackage.name === TPlanType.PREMIUM,
        }
      )}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col items-center gap-4">
          <h3 className="capitalize text-center text-2xl lg:text-3xl max-w-[250px]">
            {predictionPackage.title} Plan
          </h3>

          <div className="w-[80%] h-[1px] bg-yellow-sunset lg:my-4 my-2" />

          <div className="flex items-center">
            <p className="font-bold text-2xl">
              {formatCurrency(predictionPackage.price, currencyCode)}
            </p>
            <p className="font-bold">/month</p>
          </div>

          <div className="w-[40%] h-[1px] bg-yellow-sunset lg:my-4 my-2" />
        </div>
        <div
          className={cn("grid gap-2 lg:gap-4 w-full", {
            "grid-cols-2": predictionPackage.features.length > 9,
          })}
        >
          {predictionPackage.features.map((feature) => (
            <div className="flex items-center gap-2" key={feature}>
              <FaCheck
                className={cn("dark:text-white", {
                  "text-cyan dark:text-cyan":
                    predictionPackage.name === TPlanType.PREMIUM,
                })}
              />
              <p className="text-xs">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={
          !user ? "/auth/login" : isFree ? "/dashboard" : "/dashboard/buy-plan"
        }
        className="w-full rounded lg:text-base text-xs px-2 lg:px-4 flex items-center justify-center py-3 bg-yellow-sunset mt-20 text-white"
      >
        {isFree ? t("GET_STARTED") : t("SUBSCRIBE_NOW")}
      </Link>
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

  const packages = [
    {
      title: "Free",
      name: TPlanType.FREE,
      price: 0,
      features: [
        t("FREE_FEATURES.ONE"),
        t("FREE_FEATURES.TWO"),
        t("FREE_FEATURES.THREE"),
        t("FREE_FEATURES.FOUR"),
        t("FREE_FEATURES.FIVE"),
        t("FREE_FEATURES.SIX"),
        t("FREE_FEATURES.SEVEN"),
        t("FREE_FEATURES.EIGHT"),
        t("FREE_FEATURES.NINE"),
        t("FREE_FEATURES.TEN"),
        t("FREE_FEATURES.ELEVEN"),
        t("FREE_FEATURES.TWELVE"),
        t("FREE_FEATURES.THIRTEEN"),
        t("FREE_FEATURES.FOURTEEN"),
        t("FREE_FEATURES.FIFTEEN"),
        t("FREE_FEATURES.SiXTEEN"),
        t("FREE_FEATURES.SEVENTEEN"),
        t("FREE_FEATURES.EIGHTEEN"),
        t("FREE_FEATURES.NINETEEN"),
        t("FREE_FEATURES.TWENTY"),
      ],
    },
    {
      title: "Premium Football",
      name: TPlanType.PREMIUM,
      price: plan["premium"]["1 month"],
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
      ],
    },
    {
      title: "Premium Mixed Sport",
      name: TPlanType.MIXED,
      price: plan["mixed"]["1 month"],
      features: [
        t("MIXED_FEATURES.ONE"),
        t("MIXED_FEATURES.TWO"),
        t("MIXED_FEATURES.THREE"),
        t("MIXED_FEATURES.FOUR"),
        t("MIXED_FEATURES.FIVE"),
        t("MIXED_FEATURES.SIX"),
      ],
    },
  ];
  return {
    packages,
    supportedCountries,
    setSelectedCurrency,
    selectedCurrency,
    currency,
    t,
  };
}
