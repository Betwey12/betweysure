import OtherPagesHero from "@/components/shared/other-pages-hero";
import PageHeader from "@/components/shared/page-header";
import Trending from "@/components/trends/trending";
import { trends } from "@/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: trends.title,
  description: trends.description,
  keywords: trends.keywords,
};

export default function TrendsPage() {
  const { t } = useTrends();
  return (
    <>
      <OtherPagesHero />
      <PageHeader title={t("TITLE")} description={t("DESCRIPTION")} />
      <Trending />
    </>
  );
}

function useTrends() {
  const t = useTranslations("FOOTBALL_TRENDS");

  return {
    t,
  };
}
