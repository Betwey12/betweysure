"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function HomeBundles() {
  const t = useTranslations("WHY_BETWEYSURE");

  const [bundleIndex, setBundleIndex] = useState(0);
  const bundlesTab = [t("STANDARD"), t("PREMIUM")];
  const bundlesDesc = [t("STANDARD_DESC"), t("PREMIUM_DESC")];
  return (
    <>
      <div className="flex gap-4">
        {bundlesTab.map((tab, i) => (
          <Button
            className={cn(
              "border-b bg-white border-cyan rounded-lg capitalize text-xs lg:text-base text-cyan",
              {
                "bg-cyan text-white": bundleIndex === i,
              }
            )}
            onClick={() => setBundleIndex(i)}
            key={i}
          >
            {tab}
          </Button>
        ))}
      </div>
      <p className="text-sm text-gray-one">{bundlesDesc[bundleIndex]}</p>
    </>
  );
}
