import AccumulatorBuilderForm from "@/components/acca/acca-builder";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Accumulator Builder - Betweysure",
  description:
    "Build your accumulator with the best football predictions by popular leagues. Get the best tips for today's matches with over 90% prediction accuracy on daily games odds from 2 odds and above, as well as free betting tips and picks to help you gain an edge.",
};

export default function AccumulatorBuilder() {
  const t = useTranslations("ACCA_BUILDER");
  return (
    <>
      <OtherPagesHero />
      <div className="py-10 mt-8 mb-10 px-4 lg:px-20 md:px-10 flex flex-col items-center">
        <div className="flex flex-col gap-2 mb-10 max-w-3xl">
          <h1 className="text-2xl text-center">{t("TITLE")}</h1>
          <p className="text-center">{t("DESCRIPTION")}</p>
        </div>

        <AccumulatorBuilderForm />
      </div>
    </>
  );
}
