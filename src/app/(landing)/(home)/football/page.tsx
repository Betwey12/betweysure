import { Metadata } from "next";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

import { football } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: football.title,
  description: football.description,
  keywords: football.keywords,
  alternates: {
    canonical: `${SITE_URL}/football`,
  },
};

export default function FootballPage() {
  return (
    <>
      <FreeFootballPredictions />
      <OtherSportsPredictions />
    </>
  );
}
