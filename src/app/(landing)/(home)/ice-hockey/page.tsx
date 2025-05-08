import { Metadata } from "next";

import { pageMetadata } from "@/constants";

import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

export const metadata: Metadata = {
  title: pageMetadata["ice-hockey"].title,
  description: pageMetadata["ice-hockey"].description,
  keywords: pageMetadata["ice-hockey"].keywords,
};

export default function IceHockeyPage() {
  return (
    <>
      <OtherSportsPredictions />
      <FreeFootballPredictions />
    </>
  );
}
