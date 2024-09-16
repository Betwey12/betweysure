"use client";
import { FaSpinner } from "react-icons/fa";
import { Pagination } from "@mui/material";
import TrendCard from "./trend-card";
import useTrends from "@/hooks/useTrends";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { getDate } from "@/lib/utils";

export default function Trending() {
  const t = useTranslations("FOOTBALL_TRENDS");
  const PREDICTIONS_PER_PAGE = 20;
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(PREDICTIONS_PER_PAGE);
  const queryKey = ["trending"];
  const date = getDate("today");

  const { data: trendsQuery, isLoading } = useQuery({
    queryKey,
    queryFn: async (): Promise<TTrendResponse> =>
      HTTPRequest.Get(`tips/football-trends/${date}/${date}`),
  });

  const trendsData = trendsQuery?.data || [];

  const count = Math.ceil((trendsData?.length ?? 0) / PREDICTIONS_PER_PAGE);

  function handlePagination(_event: React.ChangeEvent<unknown>, value: number) {
    setFrom((value - 1) * PREDICTIONS_PER_PAGE);
    setTo(value * PREDICTIONS_PER_PAGE);
  }

  const { trends } = useTrends({
    trendsData,
  });

  return (
    <div className="px-4 md:px-10 lg:px-20  lg:my-20 my-10 flex flex-col items-center justify-center dark:text-white">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : trends?.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-2 gap-4">
            {trends.slice(from, to).map((trend, index) => (
              <TrendCard
                key={index}
                count={trend.count}
                logo={trend.logo}
                name={trend.name}
                total={trend.total}
                type={trend?.type}
                gameType={trend?.gameType}
                opponent={trend.opponent}
                place={trend?.place}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center">{t("NO_TRENDS")}</p>
      )}

      <Pagination
        count={count}
        shape="rounded"
        onChange={handlePagination}
        className="mt-4"
      />
    </div>
  );
}
