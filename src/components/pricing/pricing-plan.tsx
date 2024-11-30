"use client";
import { cn } from "../../lib/utils";
import { useAuth } from "../../hooks/useAuth";
import { durations, EDuration, EPlanNames, plans } from "@/assets/data/data";
import useSelectCurrency from "@/hooks/useSelectCurrency";
import { useTranslations } from "next-intl";
import MySelect from "../ui/my-select";
import { useState } from "react";
import PackageCard from "./package-card";
import PlanCards from "./plan-cards";
import Image from "next/image";
import premiumPopUp from "@/assets/images/premium-popup.webp";
import Link from "next/link";
import AuthedLink from "../ui/authed-link";

export default function PricingPlans() {
  const {
    packages,
    supportedCountries,
    selectedCurrency,
    setSelectedCurrency,
    duration,
    timeframe,
    setDuration,
    planCards,
  } = usePricingPlans();

  const currencyCode =
    selectedCurrency?.split(" ")[selectedCurrency?.split(" ")?.length - 1];

  return (
    <div className="flex flex-col gap-10 dark:text-white md:px-10 px-4 lg:px-20">
      <div className="flex items-center flex-col lg:flex-row gap-4 justify-between z-10">
        <div className="max-w-[300px] w-full border border-cyan">
          <MySelect
            options={supportedCountries}
            bgDashboard
            selectedOption={selectedCurrency}
            setSelectedOption={setSelectedCurrency}
          />
        </div>
        <div className="flex items-center gap-3">
          {durations.map((dur) => (
            <button
              key={dur}
              onClick={() => setDuration(dur)}
              className={cn(
                "border border-gray-two px-4 py-2 rounded dark:bg-blue-one dark:border-0 dark:text-white",
                {
                  "bg-cyan text-white dark:bg-cyan": dur === duration,
                }
              )}
            >
              {dur}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-0">
        {packages.map((predictionPackage) => (
          <PackageCard
            predictionPackage={predictionPackage}
            key={predictionPackage.name}
            timeframe={timeframe}
            currencyCode={currencyCode}
          />
        ))}
      </div>

      <AuthedLink
        href="/dashboard/buy-plan"
        title={
          <>
            <Image
              width={1080}
              height={107}
              src={premiumPopUp}
              alt="banner"
              className="w-full h-[300px] mt-20"
            />
          </>
        }
      />

      <div className="grid lg:grid-cols-4 mt-10 gap-4 lg:gap-6">
        {planCards.map((plan) => (
          <PlanCards
            key={plan.title}
            title={plan.title}
            duration={plan.duration}
            price={plan.price}
            currencyCode={currencyCode}
          />
        ))}
      </div>
    </div>
  );
}

function usePricingPlans() {
  const t = useTranslations("PRICING_PLANS");
  const { user } = useAuth();
  const [duration, setDuration] = useState<EDuration>(EDuration.ONE_MONTH);

  const userCurrency = user?.currency || "NGN";
  const { supportedCountries, selectedCurrency, setSelectedCurrency } =
    useSelectCurrency({
      defaultCurrency: userCurrency,
    });

  const currency =
    selectedCurrency?.split(" ")[selectedCurrency?.split(" ").length - 1];
  const plan = plans[currency] ? plans[currency] : plans["NGN"];
  const timeframs = {
    [EDuration.ONE_MONTH]: "month",
    [EDuration.ONE_WEEK]: "week",
  };
  const timeframe = timeframs[duration];
  const planCards = [
    {
      title: "Premium Football",
      duration: "Weekly",
      price: plan["premium"][EDuration.ONE_WEEK],
    },
    {
      title: "Premium Football",
      duration: "Monthly",
      price: plan["premium"][EDuration.ONE_MONTH],
    },
    {
      title: "Premium Mixed Sport",
      duration: "Weekly",
      price: plan["mixed"][EDuration.ONE_WEEK],
    },
    {
      title: "Premium Mixed Sport",
      duration: "Monthly",
      price: plan["mixed"][EDuration.ONE_MONTH],
    },
  ];

  const packages = [
    {
      title: "Free",
      name: EPlanNames.FREE,
      price: 0,
      features: t("FREE_FEATURES").split(", "),
      types: t("FREE_TYPES").split(", "),
    },
    {
      title: "Premium Football",
      name: EPlanNames.PREMIUM,
      price: plan["premium"][duration],
      features: t("PREMIUM_FEATURES").split(", "),
      types: t("PREMIUM_TYPES").split(", "),
    },
    {
      title: "Premium Mixed Sport",
      name: EPlanNames.MIXED,
      price: plan["mixed"][duration],
      features: t("MIXED_FEATURES").split(", "),
      types: t("MIXED_TYPES").split(", "),
    },
  ];

  return {
    packages,
    supportedCountries,
    setSelectedCurrency,
    selectedCurrency,
    currency,
    t,
    duration,
    setDuration,
    timeframe,
    planCards,
  };
}
