import { useTranslations } from "next-intl";
import OtherPagesHero from "../shared/other-pages-hero";
import AccumulatorBuilderForm from "../acca/acca-builder";
import PurifiedHtml from "../shared/purified-html";
import { paramsSeoText } from "@/constants";

interface IBettingPageProps {
  bettingSite: TParams;
}

export default function BettingPage({ bettingSite }: IBettingPageProps) {
  const t = useTranslations("ACCA_BUILDER");

  return (
    <>
      <OtherPagesHero />
      <div className="py-10 mt-8 mb-10 px-4 lg:px-20 md:px-10 flex flex-col items-center">
        <div className="flex flex-col gap-2 mb-10 max-w-3xl">
          <h1 className="text-2xl text-center">{t("TITLE")}</h1>
          <p className="text-center">{t("DESCRIPTION")}</p>
        </div>
        <AccumulatorBuilderForm bookie={"1xbet"} />

        <div className="w-full my-10 lg:my-20 dark:text-white">
          <PurifiedHtml html={paramsSeoText[bettingSite] ?? ""} />
        </div>
      </div>
    </>
  );
}
