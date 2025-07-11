import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import MatchResults from "@/components/livescores/match-results";

import { livescores, otherPagesSeoText } from "@/constants";
import { useTranslations } from "next-intl";
import KeywordListItem from "@/components/ui/keyword-list-item";
import PageHeader from "@/components/shared/page-header";
import Image from "next/image";
import peripesaBanner from "@/assets/images/peripesa-banner.webp";
import PurifiedHtml from "@/components/shared/purified-html";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: livescores.title,
  description: livescores.description,
  keywords: livescores.keywords,
  alternates: {
    canonical: `${SITE_URL}/livescores`,
  },
};

export default function LivescoresPage() {
  const { t, benefits } = useLiveScores();
  return (
    <>
      <OtherPagesHero />

      <PageHeader title={t("TITLE")} description={t("DESCRIPTION")} />

      <MatchResults />

      <div className="text-blue-three my-10 lg:my-20 dark:text-white px-4 lg:px-20 md:px-10">
        <a
          href="https://combodef.com/L?tag=d_3380999m_38497c_&site=3380999&ad=38497"
          target="_top"
          className="mb-20 block w-full"
        >
          <Image
            alt="banner"
            src={peripesaBanner}
            width="970"
            height="90"
            className="w-full h-[200px] mt-20"
          />
        </a>
        <h2 className="text-xl lg:text-3xl"> {t("BENEFIT")}</h2>
        <ul className="flex flex-col gap-2 mt-4 mb-20">
          {benefits.map((benefit, i) => (
            <KeywordListItem
              key={i}
              keyword={benefit.title}
              value={benefit.value}
            />
          ))}
        </ul>

        <PurifiedHtml html={otherPagesSeoText.livescores} />
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
