import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { basketball } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: basketball.title,
  description: basketball.description,
  keywords: basketball.keywords,
  alternates: {
    canonical: `${SITE_URL}/basketball`,
  },
};

export default function BasketBallPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
