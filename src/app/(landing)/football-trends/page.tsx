import OtherPagesHero from "@/components/shared/other-pages-hero";
import PageHeader from "@/components/shared/page-header";
import Trending from "@/components/trends/trending";
import { trends } from "@/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

import peripesaBanner from "@/assets/images/peripesa-banner.webp";
import oneXbetBanner from "@/assets/images/1xbet-banner.gif";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: trends.title,
  description: trends.description,
  keywords: trends.keywords,
  alternates: {
    canonical: `${SITE_URL}/football-trends`,
  },
};

export default function TrendsPage() {
  const { t, aboutTrends } = useTrends();
  return (
    <>
      <OtherPagesHero />
      <PageHeader title={t("TITLE")} description={t("DESCRIPTION")} />

      <Trending />

      <a
        href="https://refpa7921972.top/L?tag=d_2898437m_1573c_&site=2898437&ad=1573"
        target="_top"
        className="mt-10 w-full block"
      >
        <Image
          alt="banner"
          src={oneXbetBanner}
          width="970"
          height="90"
          className="w-full h-[200px] mt-20 object-cover"
        />
      </a>

      <div className="mt-10 dark:bg-blue-one rounded p-4 dark:text-white">
        <ul className="flex flex-col gap-4">
          {aboutTrends.map((trend, index) => {
            const paragraphs = trend.value.split("\t");
            const description = paragraphs[0];
            const list = paragraphs.slice(1);

            return (
              <li key={index}>
                <strong>{trend.keyword}</strong>
                <span>{description}</span>
                {list.map((item, index) => {
                  return (
                    <ul
                      className="list-disc pl-5 flex flex-col gap-2 mt-4"
                      key={index}
                    >
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </li>
            );
          })}
        </ul>
        <p className="mt-4">{t("CALL_TO_ACTION")}</p>
      </div>

      <a
        href="https://combodef.com/L?tag=d_3380999m_38497c_&site=3380999&ad=38497"
        target="_top"
        className="mt-10 block w-full"
      >
        <Image
          alt="banner"
          src={peripesaBanner}
          width="970"
          height="90"
          className="w-full h-[200px] mt-20"
        />
      </a>
    </>
  );
}

function useTrends() {
  const t = useTranslations("FOOTBALL_TRENDS");

  const trendsTitle = t("ABOUT_TRENDS_TITLES").split("\n");
  const descriptions = t("ABOUT_TRENDS_DESCRIPTIONS").split("\n");

  const aboutTrends = descriptions.map((description, index) => ({
    keyword: trendsTitle[index],
    value: description,
  }));

  return {
    t,
    aboutTrends,
  };
}
