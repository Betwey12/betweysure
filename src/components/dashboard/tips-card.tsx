"use client";

import { HTTPRequest } from "@/api";
import { popularTags } from "@/assets/data/data";
import useHasPlan from "@/hooks/useHasPlan";
import usePredictions from "@/hooks/usePredictions";
import { getDate, xDay } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Link from "next/link";
import { FaLock, FaSpinner } from "react-icons/fa";

export default function TipsCard() {
  const { hasPlan } = useHasPlan();
  const fullDate = getDate("today");
  const queryKey = ["predictions", fullDate];

  const endpoint = `tips/football/${fullDate}/${fullDate}`;

  const { data, isLoading } = usePredictions({
    endpoint,
    queryKey,
  });

  const predictions = (data?.data as Prediction[]) ?? [];
  const tips =
    predictions
      ?.map((prediction) => {
        const tip = prediction?.matchData?.tips?.find(
          (tip) => !tip?.selection?.toLowerCase()?.includes("correct score")
        );

        return {
          league: prediction?.competition_full ?? null,
          home_team: prediction?.homeTeam ?? null,
          away_team: prediction?.awayTeam ?? null,
          tip: tip?.selection ?? null,
          tip_odd: tip?.odds ?? null,
          match_time: prediction?.date,
        };
      })
      .filter(
        (tip) =>
          tip.tip && dayjs(tip.match_time).isAfter(dayjs().add(1, "hour"))
      ) ?? [];

  const popularTips: any[] = [];
  const restTips: any[] = [];

  tips.forEach((tip) => {
    const isPopular = popularTags.some((tag) =>
      tip.league?.toLowerCase().includes(tag)
    );
    if (isPopular) {
      popularTips.push(tip);
    } else {
      restTips.push(tip);
    }
  });

  const todaysTips = [...popularTips, ...restTips].slice(0, 3);

  return (
    <div className="shadow bg-white border border-gray-two p-6 rounded-3xl h-full justify-center flex flex-col items-center gap-1 dark:bg-blue-two">
      <h3 className="font-bold">
        {xDay}&apos;s Tips <span className="text-sm">(upcoming)</span>
      </h3>

      <div className="flex flex-col gap-4 mt-4 w-full">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          todaysTips.map((tip, index) => (
            <div key={index} className="flex flex-col gap-2 w-full">
              <p className="text-center">{tip.league}</p>
              <div className="grid grid-cols-2">
                <p className="text-center">{tip.home_team}</p>
                <p className="text-center"> {tip.away_team}</p>
              </div>
              <Link
                href="https://refpa7921972.top/L?tag=d_2927467m_1573c_&site=2927467&ad=1573"
                target="_blank"
                className="text-sm py-2 flex items-center justify-center gap-4 bg-yellow-one text-center"
              >
                {hasPlan ? (
                  <>
                    <span>{tip.tip}</span>
                    <span className="text-green-800">{tip.tip_odd}</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe to view</span>
                    <span>
                      <FaLock />
                    </span>
                  </>
                )}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
