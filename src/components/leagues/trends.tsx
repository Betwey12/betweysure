import { HTTPRequest } from "@/api";
import useTrends from "@/hooks/useTrends";
import { getDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { FaSpinner } from "react-icons/fa";
import TrendCard from "../trends/trend-card";
import { useState } from "react";
import Image from "next/image";

interface TrendsProps {
  league?: string;
  category?: string;
}

export default function Trends({ league, category }: TrendsProps) {
  const t = useTranslations("TRENDS");
  const queryKey = ["trending"];
  const date = getDate("today");
  const competition = category?.replace(/-/g, " ");
  const [searchValue, setSearchValue] = useState("");

  const { data: trendsData, isLoading } = useQuery({
    queryKey,
    queryFn: async (): Promise<TTrendResponse> =>
      HTTPRequest.Get(`tips/football-trends/${date}/${date}`),
  });

  const trendsQuery = trendsData?.data || [];

  const leagueTrends = trendsQuery?.filter((trend) => {
    const isBrazil =
      trend.matchdetails?.comp_country?.toLowerCase() === "brazil";
    const compLower = competition?.toLowerCase() ?? "";
    const matchLower = trend.matchdetails?.comp_name?.toLowerCase();

    if (isBrazil && competition?.split(" ")[0]?.toLowerCase() !== "brazil") {
      return false;
    }

    return compLower.includes(matchLower) || matchLower.includes(compLower);
  });

  const { trends } = useTrends({
    trendsData: leagueTrends,
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

  return (
    <>
      <input
        type="search"
        name=""
        id=""
        placeholder="🔍  Filter by leagues, country, games"
        className="self-end mb-10 py-2 px-4 rounded focus:outline-none text-gray-one w-full lg:max-w-[360px] border border-gray-one"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : filteredTrends?.length > 0 ? (
        <>
          <p className="mb-6">{t("DESCRIPTION", { league: league })}</p>

          <div className="flex flex-col gap-20">
            {filteredTrends.map((trend, index) => (
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
        </>
      ) : (
        <p className="text-center">{t("NO_TRENDS")}</p>
      )}
    </>
  );
}
