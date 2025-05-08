import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { basketball } from "@/constants";

export const metadata: Metadata = {
  title: basketball.title,
  description: basketball.description,
  keywords: basketball.keywords,
};

export default function BasketBallPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
