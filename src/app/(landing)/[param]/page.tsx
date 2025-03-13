import { bettingSites, mediaSites, predictionSites } from "@/assets/data/data";
import BettingPage from "@/components/landing/betting-page";
import MediaPage from "@/components/landing/media-page";
import PredictionPage from "@/components/landing/prediction-page";
import { paramsaMetaData, home } from "@/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  params: { param: TParams };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = paramsaMetaData[params.param];

  return {
    title: meta?.title ?? home?.title,
    keywords: meta?.keywords,
    description: meta?.description,
  };
}

export default function ParamsPage({ params }: { params: { param: TParams } }) {
  const param = params["param"];
  const t = useTranslations("LEAGUE_INFO");

  const bettingSite = bettingSites[param as TBettingParams];
  const predictionSite = predictionSites[param as TPredictionsParams];
  const mediaSite = mediaSites[param as TMediaParams];

  if (bettingSite) return <BettingPage />;
  if (predictionSite)
    return (
      <PredictionPage
        title={predictionSite.title}
        description={t("TODAY_DESCRIPTION")}
        predictionSite={param}
      />
    );
  if (mediaSite) return <MediaPage />;

  return notFound();
}
