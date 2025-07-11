import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { baseball } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: baseball.title,
  description: baseball.description,
  keywords: baseball.keywords,
  alternates: {
    canonical: `${SITE_URL}/baseball`,
  },
};

export default function BaseballPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
