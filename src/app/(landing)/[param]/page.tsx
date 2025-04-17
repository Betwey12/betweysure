import {
  bettingSites,
  mediaSites,
  otherToolsSites,
  predictionSites,
  trendsSites,
} from "@/assets/data/data";
import { pageParams } from "@/assets/data/params";
import BettingPage from "@/components/landing/betting-page";
import MediaPage from "@/components/landing/media-page";
import OtherToolsSite from "@/components/landing/other-tools-site";
import PredictionPage from "@/components/landing/prediction-page";
import TrendsParamsPage from "@/components/landing/trend-page";
import { paramsaMetaData, home } from "@/constants";
import { Metadata } from "next";
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

  const bettingSite = bettingSites[param as TBettingParams];
  const predictionSite = predictionSites[param as TPredictionsParams];
  const mediaSite = mediaSites[param as TMediaParams];
  const otherSites = otherToolsSites[param as TOtherPagesParams];
  const trendsSite = trendsSites[param as TTrendsParams];

  if (trendsSite)
    return (
      <TrendsParamsPage
        page={param}
        title={trendsSite.title}
        description={trendsSite.description}
      />
    );
  if (bettingSite) return <BettingPage bettingSite={param} />;
  if (otherSites)
    return (
      <OtherToolsSite
        page={param}
        title={otherSites.title}
        description={otherSites.description}
      />
    );
  if (predictionSite)
    return (
      <PredictionPage
        title={predictionSite.title}
        description={predictionSite.description}
        predictionSite={param}
      />
    );
  if (mediaSite)
    return (
      <MediaPage
        title={mediaSite.title}
        description={mediaSite.description}
        page={param}
      />
    );

  return notFound();
}

export async function generateStaticParams() {
  return pageParams.map((page) => ({
    param: page,
  }));
}
