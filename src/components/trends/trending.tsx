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
import peripesaBanner from "@/assets/images/peripesa-banner.webp";
import oneXbetBanner from "@/assets/images/1xbet-banner.gif";

export default function Trending() {
  const { t, aboutTrends } = useTrending();
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
        trend.name.toLowerCase().includes(searchValue.toLowerCase())
      ) ||
      trend.trends.find((trend) =>
        trend?.opponent?.name.toLowerCase().includes(searchValue.toLowerCase())
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

      <a
        href="https://refpa7921972.top/L?tag=d_2898437m_1573c_&site=2898437&ad=1573"
        target="_top"
        className="mt-10 w-full block"
      >
        <Image
          alt="banner"
          src={oneXbetBanner}
          width="970"
          height="90"
          className="w-full h-[200px] mt-20 object-cover"
        />
      </a>

      <div className="mt-10 dark:bg-blue-one rounded p-4 dark:text-white">
        <ul className="flex flex-col gap-4">
          {aboutTrends.map((trend, index) => {
            const paragraphs = trend.value.split("\t");
            const description = paragraphs[0];
            const list = paragraphs.slice(1);

            return (
              <li key={index}>
                <strong>{trend.keyword}</strong>
                <span>{description}</span>
                {list.map((item, index) => {
                  return (
                    <ul
                      className="list-disc pl-5 flex flex-col gap-2 mt-4"
                      key={index}
                    >
                      <li>{item}</li>
                    </ul>
                  );
                })}
              </li>
            );
          })}
        </ul>
        <p className="mt-4">{t("CALL_TO_ACTION")}</p>
      </div>

      <a
        href="https://combodef.com/L?tag=d_3380999m_38497c_&site=3380999&ad=38497"
        target="_top"
        className="mt-10 block w-full"
      >
        <Image
          alt="banner"
          src={peripesaBanner}
          width="970"
          height="90"
          className="w-full h-[200px] mt-20"
        />
      </a>
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
