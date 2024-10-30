import { HTTPRequest } from "@/api";
import useTrends from "@/hooks/useTrends";
import { getDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { FaSpinner } from "react-icons/fa";
import TrendCard from "../trends/trend-card";
import { useState } from "react";

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
  console.log("herlo");

  console.log(trends, "trends");

  const filteredTrends = trends.filter((trend) => {
    return (
      trend.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      trend?.opponent?.name?.toLowerCase().includes(searchValue.toLowerCase())
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

          <div className="grid lg:grid-cols-2 gap-4">
            {filteredTrends.map((trend, index) => (
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
    </>
  );
}
