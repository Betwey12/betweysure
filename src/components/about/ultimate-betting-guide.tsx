import { useTranslations } from "next-intl";
import Image from "next/image";
import whoKnowRoad from "@/assets/images/follow-who-know-road.webp";

export default function UltimateBettingGuide() {
  const t = useTranslations("ULTIMATE_BETTING_GUIDE");

  return (
    <div className="px-4 mt-10 lg:my-40 md:px-10 lg:px-20 flex flex-col lg:justify-evenly lg:flex-row items-center text-blue-three dark:text-white">
      <div className="flex flex-col gap-4 lg:max-w-[50%]">
        <h3 className="text-2xl lg:text-4xl text-center lg:text-left mb-4 max-w-5xl">
          {t("FREE_TIPS")}
        </h3>
        {t("FREE_TIPS_DESC")
          .split("\n")
          .map((desc, index) => (
            <p className="text-sm" key={index}>
              {desc}
            </p>
          ))}
      </div>
      <Image
        width={600}
        height={500}
        src={whoKnowRoad}
        alt="value"
        className="rounded-3xl lg:max-w-[40%]"
      />
    </div>
  );
}
