import { HTTPRequest } from "@/api";
import useTrends from "@/hooks/useTrends";
import { getDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { FaSpinner } from "react-icons/fa";
import TrendCard from "../trends/trend-card";

interface TrendsProps {
  league?: string;
  category?: string;
}

export default function Trends({ league, category }: TrendsProps) {
  const t = useTranslations("TRENDS");
  const queryKey = ["trending"];
  const date = getDate("today");
  const competition = category?.replace(/-/g, " ");

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

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : trends?.length > 0 ? (
        <>
          <p className="mb-6">{t("DESCRIPTION", { league: league })}</p>

          <div className="grid lg:grid-cols-2 gap-4">
            {trends.map((trend, index) => (
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
