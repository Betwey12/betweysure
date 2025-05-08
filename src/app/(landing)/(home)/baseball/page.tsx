import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { baseball } from "@/constants";

export const metadata: Metadata = {
  title: baseball.title,
  description: baseball.description,
  keywords: baseball.keywords,
};

export default function BaseballPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
