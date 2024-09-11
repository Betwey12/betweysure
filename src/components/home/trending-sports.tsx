"use client";

import Link from "next/link";
import LiveIcon, {
  BasketballIcon,
  CalendarIcon,
  FootBallIcon,
  IceHockeyIcon,
  TennisIcon,
  TrendingUpIcon,
} from "../icons";
import PredictionSelect from "../ui/prediction-select";
import FreeFootballPredictions from "./free-football-predictions";
import OtherSportsPredictions from "./other-sports-predictions";
import { otherSports } from "@/assets/data/data";
import { useEffect, useState } from "react";
import HomeFreeTips from "./home-free-tips";
import LivePredictConvert from "./live-predict-convert";

interface TrendingSportsProps {
  sport: string | null;
}

export default function TrendingSports({ sport }: TrendingSportsProps) {
  const [selectedOption, setSelectedOption] = useState(sport ?? "");

  useEffect(() => {
    if (sport) return;
    const randomSport =
      otherSports[Math.floor(Math.random() * otherSports.length)];

    setSelectedOption(randomSport);
  }, [sport]);

  return (
    <>
      <div className="grid grid-cols-2 lg:flex items-center justify-between px-4 md:px-10 lg:px-20 py-11 flex-wrap">
        {trends.map((trend) => (
          <Link
            key={trend.name}
            className="flex items-center gap-2 py-2 rounded-lg transition-colors capitalize dark:text-white"
            href={trend.link}
            onClick={() =>
              otherSports.includes(trend.name) && setSelectedOption(trend.name)
            }
          >
            <span className="text-2xl">{trend.icon}</span>
            <span>{trend.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 px-4 lg:px-20 md:px-10">
        <div className="flex flex-col gap-8 lg:w-[70%] text-blue-two dark:text-white">
          <div className="lg:hidden">
            <PredictionSelect />
          </div>
          <FreeFootballPredictions />
          <OtherSportsPredictions
            setSelectedSport={setSelectedOption}
            selectedSport={selectedOption}
          />
          <HomeFreeTips />
        </div>
        <LivePredictConvert />
      </div>
    </>
  );
}

const trends = [
  {
    name: "trending",
    icon: <TrendingUpIcon />,
    link: "/football-trends",
  },
  {
    name: "live",
    icon: <LiveIcon />,
    link: "/livescores",
  },
  {
    name: "today",
    icon: <CalendarIcon />,
    link: "#football-predictions",
  },
  {
    name: "football",
    icon: <FootBallIcon />,
    link: "#football-predictions",
  },
  {
    name: "basketball",
    icon: <BasketballIcon />,
    link: "#basketball",
  },
  {
    name: "tennis",
    icon: <TennisIcon />,
    link: "#tennis",
  },
  {
    name: "baseball",
    icon: <BasketballIcon />,
    link: "#baseball",
  },
  {
    name: "ice hockey",
    icon: <IceHockeyIcon />,
    link: "#icehockey",
  },
];
