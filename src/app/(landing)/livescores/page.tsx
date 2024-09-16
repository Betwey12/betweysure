import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import MatchResults from "@/components/livescores/match-results";

import { livescores } from "@/constants";
import { useTranslations } from "next-intl";
import KeywordListItem from "@/components/ui/keyword-list-item";

export const metadata: Metadata = {
  title: livescores.title,
  description: livescores.description,
  keywords: livescores.keywords,
};

export default function LivescoresPage() {
  const { t, benefits } = useLiveScores();
  return (
    <>
      <OtherPagesHero />

      <div className="flex flex-col gap-6 items-center text-blue-three my-10 lg:my-20 px-4 dark:text-white">
        <h1 className="text-3xl lg:text-5xl text-center"> {t("TITLE")}</h1>
        <p className="text-center max-w-5xl">{t("DESCRIPTION")}</p>
      </div>

      <MatchResults />

      <div className="text-blue-three my-10 lg:my-20 dark:text-white px-4 lg:px-20 md:px-10">
        <h2 className="text-xl lg:text-3xl"> {t("BENEFIT")}</h2>
        <ul className="flex flex-col gap-2 mt-4">
          {benefits.map((benefit, i) => (
            <KeywordListItem
              key={i}
              keyword={benefit.title}
              value={benefit.value}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function useLiveScores() {
  const t = useTranslations("LIVESCORES");

  const benefits = [
    {
      title: t("BENEFIT_ONE"),
      value: t("BENEFIT_ONE_DESC"),
    },
    {
      title: t("BENEFIT_TWO"),
      value: t("BENEFIT_TWO_DESC"),
    },
    {
      title: t("BENEFIT_THREE"),
      value: t("BENEFIT_THREE_DESC"),
    },
    {
      title: t("BENEFIT_FOUR"),
      value: t("BENEFIT_FOUR_DESC"),
    },
    {
      title: t("BENEFIT_FIVE"),
      value: t("BENEFIT_FIVE_DESC"),
    },
    {
      title: t("BENEFIT_SIX"),
      value: t("BENEFIT_SIX_DESC"),
    },
  ];
  return {
    t,
    benefits,
  };
}
