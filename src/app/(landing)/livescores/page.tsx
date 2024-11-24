import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import MatchResults from "@/components/livescores/match-results";

import { livescores } from "@/constants";
import { useTranslations } from "next-intl";
import KeywordListItem from "@/components/ui/keyword-list-item";
import PageHeader from "@/components/shared/page-header";

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

      <PageHeader title={t("TITLE")} description={t("DESCRIPTION")} />

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
  const benefits = t("BENEFITS")
    .split("\n")
    .map((benefit) => ({
      title: `${benefit.split(":")[0]}:`,
      value: benefit.split(":")[1],
    }));

  return {
    t,
    benefits,
  };
}
