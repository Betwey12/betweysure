import wearable from "../../assets/images/wearable.webp";
import { FaArrowRight } from "react-icons/fa";
import { BundlesIcon, CurratedIcon, GiftIcon, OrangeBallIcon } from "../icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import HomeBundles from "./home-bundles";

export default function WhyBetWeySure() {
  const t = useTranslations("WHY_BETWEYSURE");

  const whyUs = [
    {
      title: t("TAILORED_TIPS"),
      description: t("TAILORED_TIPS_DESC"),
      icon: <CurratedIcon />,
    },
    {
      title: t("ABUNDANT_REWARDS"),
      description: t("ABUNDANT_REWARDS_DESC"),
      icon: <GiftIcon />,
    },
    {
      title: t("CURATED_PREDICTIONS"),
      description: t("CURATED_PREDICTIONS_DESC"),
      icon: <OrangeBallIcon />,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <Image
        width={800}
        height={800}
        src={wearable}
        alt="player"
        className="lg:w-[40%] lg:h-[800px]"
      />
      <div className="flex items-center justify-center lg:w-[60%] bg-gray-three dark:bg-blue-one dark:text-white">
        <div className="px-4 py-8 lg:px-16 lg:py-18">
          <p className="text-sm font-bold text-cyan lg:text-base">
            {t("INTRO_TITLE")}
          </p>
          <h3 className="mt-2 text-2xl lg:text-4xl">
            {t("WHY_BETWEYSURE") as string}
          </h3>
          <div className="flex flex-col gap-6 mt-6">
            {whyUs.map(({ icon, title, description }, i) => (
              <div className="flex items-center gap-4 lg:gap-5" key={i}>
                <span className="text-xl">{icon}</span>
                <div className="lg:max-w-[500px] max-w-[90%]">
                  <h4 className="text-sm font-bold">{title}</h4>
                  <p className="text-sm text-gray-one">{description}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 lg:gap-5">
              <BundlesIcon className="text-2xl text-[#FF9900]" />
              <div className="lg:max-w-[500px] flex flex-col gap-4 max-w-[90%]">
                <h4 className="text-sm font-bold">{t("BUNDLES")}</h4>
                <HomeBundles />
                <Link
                  href="/about-us"
                  className="flex items-center self-start gap-2 px-4 py-2 mt-8 border rounded-lg min-w-max border-cyan text-cyan"
                >
                  {t("LEARN_MORE")}
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
