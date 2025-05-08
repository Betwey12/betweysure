import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { tennis } from "@/constants";

export const metadata: Metadata = {
  title: tennis.title,
  description: tennis.description,
  keywords: tennis.keywords,
};

export default function TennisPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
