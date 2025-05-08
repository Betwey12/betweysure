"use client";
import FreeFootballPredictions from "@/components/home/free-football-predictions";
import OtherSportsPredictions from "@/components/home/other-sports-predictions";
import { useSearchParams } from "next/navigation";
import { otherSports } from "@/assets/data/data";

import { useEffect, useState } from "react";

export default function FootballPage() {
  const searchParams = useSearchParams();
  const sport = searchParams.get("sport") || null;
  const [selectedOption, setSelectedOption] = useState(sport ?? "basketball");

  useEffect(() => {
    if (sport) return;
    const randomSport =
      otherSports[Math.floor(Math.random() * otherSports.length)];

    setSelectedOption(randomSport);
  }, [sport]);

  return (
    <>
      <FreeFootballPredictions />;
      <OtherSportsPredictions
        setSelectedSport={setSelectedOption}
        selectedSport={selectedOption}
      />
    </>
  );
}
