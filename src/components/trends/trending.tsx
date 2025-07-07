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
import Image from "next/image";

export default function Trending() {
  const { t } = useTrending();
  const PREDICTIONS_PER_PAGE = 20;
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(PREDICTIONS_PER_PAGE);
  const [searchValue, setSearchValue] = useState("");
  const queryKey = ["trending"];
  const date = getDate("today");

  const { data: trendsQuery, isLoading } = useQuery({
    queryKey,
    queryFn: async (): Promise<TTrendResponse> =>
      HTTPRequest.Get(`tips/football-trends/${date}/${date}`),
  });

  const trendsData = trendsQuery?.data || [];

  function handlePagination(_event: React.ChangeEvent<unknown>, value: number) {
    setFrom((value - 1) * PREDICTIONS_PER_PAGE);
    setTo(value * PREDICTIONS_PER_PAGE);
  }

  const { trends } = useTrends({
    trendsData,
  });

  const filteredTrends = trends.filter((trend) => {
    return (
      trend.trends.find((trend) =>
        trend.name.toLowerCase().includes(searchValue.toLowerCase()),
      ) ||
      trend.trends.find((trend) =>
        trend?.opponent?.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    );
  });

  const count = Math.ceil(filteredTrends.length / PREDICTIONS_PER_PAGE);

  return (
    <div className="px-4 md:px-10 lg:px-20  lg:my-20 my-10 flex flex-col items-center justify-center dark:text-white">
      <input
        type="search"
        name=""
        id=""
        placeholder="🔍  Filter by leagues, country, games"
        className="self-end mb-10 py-2 px-4 rounded focus:outline-none text-gray-one w-full lg:max-w-[360px] border border-gray-one"
        onChange={(e) => {
          setFrom(0);
          setSearchValue(e.target.value);
        }}
      />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : filteredTrends?.length > 0 ? (
        <div className="flex flex-col gap-20">
          {filteredTrends.slice(from, to).map((trend, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="bg-gray-one py-2 px-4 rounded dark:bg-blue-one grid grid-cols-3 items-center justify-center">
                {trend.match.map((match, i) => (
                  <>
                    <div
                      key={match.name}
                      className="flex flex-col lg:flex-row items-center justify-center gap-4"
                    >
                      <Image
                        src={match.logo}
                        alt={match.name}
                        width="40"
                        height="40"
                      />
                      <p className="text-2xl font-semibold text-center">
                        {match.name}
                      </p>
                    </div>
                    {i === 0 && (
                      <p className="text-2xl font-semibold text-center">Vs</p>
                    )}
                  </>
                ))}
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                {trend.trends.map((trend, index) => (
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
            </div>
          ))}
        </div>
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

function useTrending() {
  const t = useTranslations("FOOTBALL_TRENDS");
  const trendsTitle = t("ABOUT_TRENDS_TITLES").split("\n");
  const descriptions = t("ABOUT_TRENDS_DESCRIPTIONS").split("\n");

  const aboutTrends = descriptions.map((description, index) => ({
    keyword: trendsTitle[index],
    value: description,
  }));

  return {
    t,
    aboutTrends,
  };
}
