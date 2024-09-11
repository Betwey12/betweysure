"use client";

import { HTTPRequest } from "@/api";
import { xDay } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

export default function TipsCard() {
  const { data: tipsData, isLoading } = useQuery({
    queryKey: ["tips", xDay],
    queryFn: (): Promise<{
      data: TTips[];
    }> => HTTPRequest.Get(`tips/betigolo-tips`),
  });
  const tips = tipsData?.data ?? [];
  const todaysTips = tips
    .filter((tip) => new Date(tip.match_dat).getTime() > Date.now())
    .sort((a, b) => dayjs(a.match_dat).diff(dayjs(b.match_dat)))
    .slice(0, 3);

  console.log(todaysTips);

  return (
    <div className="shadow bg-white border border-gray-two p-6 rounded-3xl h-full justify-center flex flex-col items-center gap-1 dark:bg-blue-two">
      <h3 className="font-bold">{xDay}&apos;s Tips</h3>

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
                className="flex items-center justify-center gap-4 bg-yellow-one text-center"
              >
                <span>{tip.tip}</span>
                <span className="text-green-800">{tip.tip_odd}</span>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
