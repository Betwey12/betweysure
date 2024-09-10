"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function SlideBenefits() {
  const { benefits } = useBenefits();
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlideIndex(slideIndex); // Keep track of the previous slide
      setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [benefits.length, slideIndex]);

  return (
    <div className="w-full flex gap-2 items-center flex-col text-white mt-10 overflow-x- ">
      {benefits.map((benefit, index) => (
        <div
          className={cn("flex items-center gap-3 w-full justify-center", {
            "slide-enter":
              index === slideIndex && prevSlideIndex !== slideIndex,
            "slide-exit":
              index === prevSlideIndex && prevSlideIndex !== slideIndex,
            hidden: index !== slideIndex,
          })}
          key={benefit}
        >
          <p
            className="text-base lg:text-xl max-w-[90%] text-center"
            key={benefit}
          >
            {benefit}
          </p>
        </div>
      ))}
    </div>
  );
}

function useBenefits() {
  const t = useTranslations("AUTH");
  const benefits = [
    t("BENEFIT_ONE"),
    t("BENEFIT_TWO"),
    t("BENEFIT_THREE"),
    t("BENEFIT_FOUR"),
    t("BENEFIT_FIVE"),
    t("BENEFIT_SIX"),
    t("BENEFIT_SEVEN"),
    t("BENEFIT_EIGHT"),
    t("BENEFIT_NINE"),
  ];
  return { t, benefits };
}
