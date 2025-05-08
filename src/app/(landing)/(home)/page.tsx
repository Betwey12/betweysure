"use client";
import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";

export default function HomePage() {
  return (
    <>
      <FreeFootballPredictions />
      <OtherSportsPredictions />
    </>
  );
}
