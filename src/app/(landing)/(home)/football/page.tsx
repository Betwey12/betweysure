import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { football } from "@/constants";

export const metadata: Metadata = {
  title: football.title,
  description: football.description,
  keywords: football.keywords,
};

export default function FootballPage() {
  return (
    <>
      <FreeFootballPredictions />
      <OtherSportsPredictions />
    </>
  );
}
