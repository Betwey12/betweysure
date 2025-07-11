import { Metadata } from "next";

import { pageMetadata } from "@/constants";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: pageMetadata["ice-hockey"].title,
  description: pageMetadata["ice-hockey"].description,
  keywords: pageMetadata["ice-hockey"].keywords,

  alternates: {
    canonical: `${SITE_URL}/ice-hockey`,
  },
};

export default function IceHockeyPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
