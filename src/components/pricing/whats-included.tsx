import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaCartPlus,
  FaFileInvoice,
  FaGift,
  FaIdBadge,
  FaLayerGroup,
  FaMicroscope,
  FaPrint,
  FaReceipt,
  FaSuitcase,
  FaTag,
} from "react-icons/fa";
import { FaBoltLightning, FaCartShopping } from "react-icons/fa6";

export default function WhatsIncluded() {
  const { t, packages, plansDescriptions } = useWhatIsIncluded();
  return (
    <div className="text-blue-three px-4 md:px-10 lg:px-20 my-10 lg:my-20 mb-40 dark:text-white">
      <h3 className="text-xl">{t("WHAT_IS_INCLUDED")}</h3>

      {plansDescriptions.map((plan) => (
        <div className="flex flex-col gap-2 mt-6" key={plan.title}>
          <h4 className="text-lg font-semibold">{plan.title}</h4>
          <p>{plan.description}</p>
        </div>
      ))}

      <div className="grid lg:grid-cols-3 justify-between lg:flex-row flex-col gap-4 mt-6">
        {packages.map((pack) => (
          <div className="flex items-center gap-2" key={pack.title}>
            <span className="text-cyan">{pack.icon}</span>
            <p>{pack.title}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mt-20 dark:bg-blue-one p-4 lg:py-20 lg:px-10 border border-gray-two rounded dark:border-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">{t("CALL_TO_ACTION")}</h2>
          <p>{t("CALL_TO_ACTION_DESC")}</p>
        </div>
        <Link
          href="/dashboard/buy-plan"
          className="rounded lg:text-base text-xs px-2 lg:px-4 font-medium flex items-center justify-center py-3 bg-yellow-sunset text-white"
        >
          {t("CHOOSE_PLAN")}
        </Link>
      </div>
    </div>
  );
}

function useWhatIsIncluded() {
  const t = useTranslations("WHAT_IS_INCLUDED");

  const plansDescriptions = [
    {
      title: t("FREE_PLAN"),
      description: t("FREE_PLAN_DESC"),
    },
    {
      title: t("MIXED_PLAN"),
      description: t("MIXED_PLAN_DESC"),
    },
    {
      title: t("PREMIUM_PLAN"),
      description: t("PREMIUM_PLAN_DESC"),
    },
  ];

  const packages = [
    {
      title: t("BENEFIT_ONE"),
      icon: <FaCartPlus />,
    },
    {
      title: t("BENEFIT_TWO"),
      icon: <FaSuitcase />,
    },
    {
      title: t("BENEFIT_THREE"),
      icon: <FaMicroscope />,
    },
    {
      title: t("BENEFIT_FOUR"),
      icon: <FaPrint />,
    },
    {
      title: t("BENEFIT_FIVE"),
      icon: <FaTag />,
    },
    {
      title: t("BENEFIT_SIX"),
      icon: <FaBoltLightning />,
    },
    {
      title: t("BENEFIT_SEVEN"),
      icon: <FaIdBadge />,
    },
    {
      title: t("BENEFIT_EIGHT"),
      icon: <FaFileInvoice />,
    },
    {
      title: t("BENEFIT_NINE"),
      icon: <FaReceipt />,
    },
    {
      title: t("BENEFIT_TEN"),
      icon: <FaGift />,
    },
    {
      title: t("BENEFIT_ELEVEN"),
      icon: <FaCartShopping />,
    },
    {
      title: t("BENEFIT_TWELVE"),
      icon: <FaLayerGroup />,
    },
  ];

  return {
    t,
    packages,
    plansDescriptions,
  };
}
