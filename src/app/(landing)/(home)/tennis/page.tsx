import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { tennis } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: tennis.title,
  description: tennis.description,
  keywords: tennis.keywords,
  alternates: {
    canonical: `${SITE_URL}/tennis`,
  },
};

export default function TennisPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
