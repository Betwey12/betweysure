"use client";
import { useQuery } from "@tanstack/react-query";
import { getDate } from "../../lib/utils";
import { FaSpinner } from "react-icons/fa";
import { HTTPRequest } from "@/api";
import { useState } from "react";
import { Pagination } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PREDICTIONS_PER_PAGE = 20;

export default function Trending() {
  const t = useTranslations("FOOTBALL_TRENDS");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(PREDICTIONS_PER_PAGE);

  const queryKey = ["trending"];
  const date = getDate("today");

  const { data: trendsData, isLoading } = useQuery({
    queryKey,
    queryFn: async (): Promise<TTrendResponse> =>
      HTTPRequest.Get(`tips/football-trends/${date}/${date}`),
  });

  const trends = trendsData?.data || [];

  const count = Math.ceil((trends?.length ?? 0) / PREDICTIONS_PER_PAGE);

  const getRandomResult = () => (Math.random() >= 0.5 ? 1 : 0);
  const oneOrZero = getRandomResult();
  const oneOrZero_ = getRandomResult();

  const trendsResults = trends?.slice(from, to)?.map((trend, index) => {
    const getFilteredResults = (winner: string) =>
      trend.homerecent.filter((prediction) => prediction.winner === winner);
    const totalHomeWin = getFilteredResults("HOME_TEAM");
    const totalHomeLost = getFilteredResults("AWAY_TEAM");
    const totalAwayWin = getFilteredResults("AWAY_TEAM");
    const totalAwayLost = getFilteredResults("HOME_TEAM");
    const src = `https://media.api-sports.io/football/teams/${
      oneOrZero === 0 ? trend.matchdetails.homeID : trend.matchdetails.awayID
    }.png`;

    return (
      <div
        key={index}
        className="flex flex-col justify-between items-center gap-2 py-2 rounded-lg capitalize w-full"
      >
        <Image
          width={300}
          height={300}
          src={src}
          alt="league"
          className="rounded-[16px_16px_0_0] w-full"
        />
        <div className="bg-white text-blue-three rounded-[0_0_16px_16px] p-4 px-2 lg:p-6 h-full shadow-lg">
          <p className="text-center">{`${
            oneOrZero === 0
              ? trend.matchdetails.home_team
              : trend.matchdetails.away_team
          } Has ${oneOrZero_ === 0 ? "won" : "lost"} ${
            oneOrZero_ === 0
              ? oneOrZero === 0
                ? totalHomeWin.length
                : totalHomeLost.length
              : oneOrZero === 0
              ? totalAwayWin.length
              : totalAwayLost.length
          } matches in their last ${trend.homerecent.length} games`}</p>
        </div>
      </div>
    );
  });

  function handlePagination(_event: React.ChangeEvent<unknown>, value: number) {
    setFrom((value - 1) * PREDICTIONS_PER_PAGE);
    setTo(value * PREDICTIONS_PER_PAGE);
  }

  return (
    <div className="px-4 md:px-10 lg:px-20  lg:my-20 my-10 flex flex-col items-center justify-center dark:text-white">
      <h1 className="lg:text-2xl text-xl mb-8">{t("TITLE")}</h1>

      {isLoading ? (
        <div className="flex items-center justify-center w-full py-2">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 max-w-screen-lg">
            {(trendsResults?.length ?? 0) === 0 ? (
              <p className="text-center">{t("NO_TRENDS")} </p>
            ) : (
              trendsResults
            )}
          </div>
          <Pagination
            count={count}
            shape="rounded"
            onChange={handlePagination}
            className="mt-4"
          />
        </>
      )}
    </div>
  );
}
