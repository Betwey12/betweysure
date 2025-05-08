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
    <div className="w-full flex gap-2 items-center flex-col text-white mt-10 overflow-x-hidden">
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
  const benefits = t("SIGNUP_BENEFITS").split("\n");
  return { t, benefits };
}
