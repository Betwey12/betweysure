"use client";
import { cn } from "../../lib/utils";
import {
  durations,
  EDuration,
  EPlanFullNames,
  EPlanNames,
  plans,
} from "@/assets/data/data";
import useSelectCurrency from "@/hooks/useSelectCurrency";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PackageCard from "./package-card";
import PlanCards from "./plan-cards";
import Image from "next/image";
import premiumPopUp from "@/assets/images/premium-banner-desktop.webp";
import AuthedLink from "../ui/authed-link";
import { SelectItem } from "../ui/select";
import RadixSelect from "../ui/radix-select";

export default function PricingPlans() {
  const {
    packages,
    supportedCountries,
    currency,
    setSelectedCurrency,
    duration,
    timeframe,
    setDuration,
    planCards,
    isSupported,
  } = usePricingPlans();

  const selectItems = supportedCountries.map((country) => (
    <SelectItem value={`${country.name.toLowerCase()}`} key={country.name}>
      <span className="flex items-center gap-2">
        <span className="flex flex-row-reverse items-center gap-2">
          <span>{country.name} </span>
          <span>{country.flag} </span>
        </span>
        <span>{country.currency} </span>
      </span>
    </SelectItem>
  ));
  return currency ? (
    <div className="flex flex-col gap-20 dark:text-white md:px-10 px-4 lg:px-20">
      <div className="flex items-center flex-col lg:flex-row gap-4 justify-between z-10">
        <div className="flex items-center gap-4 flex-1">
          <p className="font-medium">Change currency: </p>
          <div className="max-w-[300px] w-full">
            <RadixSelect
              selectItems={selectItems}
              placeholder={"Select currency"}
              handleValueChange={(v) => setSelectedCurrency(v)}
            />
          </div>
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
                },
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
            currencyCode={currency}
            isSupported={isSupported ? true : false}
          />
        ))}
      </div>

      <AuthedLink
        href="/dashboard/buy-plan"
        title={
          <>
            <Image
              width={1280}
              height={300}
              src={premiumPopUp}
              alt="banner"
              className="w-full mt-20"
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
            currencyCode={currency}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-4 items-center justify-center w-full max-w-xl mx-auto">
      <h3 className="uppercase text-4xl text-center">Pricing plan</h3>

      <div className="p-4 dark:bg-blue-one dark:border-blue-two py-8 rounded-lg flex gap-4 flex-col items-center w-full bg-secondary-foreground border border-gray-two">
        <p className="text-xl font-medium">Choose your country</p>
        <div className="max-w-[600px] w-full">
          <RadixSelect
            selectItems={selectItems}
            placeholder={"Select currency"}
            handleValueChange={(v) => setSelectedCurrency(v)}
            className="w-full"
          />
        </div>

        <p>Choose your preferred country and select from the available plans</p>
      </div>
    </div>
  );
}

function usePricingPlans() {
  const t = useTranslations("PRICING_PLANS");
  const [duration, setDuration] = useState<EDuration>(EDuration.ONE_MONTH);

  const { currency, supportedCountries, setSelectedCurrency } =
    useSelectCurrency();

  const isSupported = currency && plans[currency];
  const plan = isSupported
    ? plans[currency]
    : currency
      ? plans["USD"]
      : plans["NGN"];

  const timeframs = {
    [EDuration.ONE_MONTH]: "month",
    [EDuration.TWO_WEEKS]: "week",
  };
  const timeframe = timeframs[duration];
  const planCards = [
    {
      title: EPlanFullNames.PREMIUM,
      duration: "Weekly",
      price: plan["premium"][EDuration.TWO_WEEKS],
    },
    {
      title: EPlanFullNames.PREMIUM,
      duration: "Monthly",
      price: plan["premium"][EDuration.ONE_MONTH],
    },
    {
      title: EPlanFullNames.MIXED,
      duration: "Weekly",
      price: plan["mixed"][EDuration.TWO_WEEKS],
    },
    {
      title: EPlanFullNames.MIXED,
      duration: "Monthly",
      price: plan["mixed"][EDuration.ONE_MONTH],
    },
  ];

  const packages = [
    {
      title: EPlanFullNames.FREE,
      name: EPlanNames.FREE,
      price: 0,
      features: t("FREE_FEATURES").split(", "),
      types: t("FREE_TYPES").split(", "),
    },
    {
      title: EPlanFullNames.PREMIUM,
      name: EPlanNames.PREMIUM,
      price: plan["premium"][duration],
      features: t("PREMIUM_FEATURES").split(", "),
      types: t("PREMIUM_TYPES").split(", "),
    },
    {
      title: EPlanFullNames.MIXED,
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
    currency,
    t,
    duration,
    setDuration,
    timeframe,
    planCards,
    isSupported,
  };
}
