import { useTranslations } from "next-intl";
import { FaSpinner } from "react-icons/fa";
import TrendCard from "../trends/trend-card";
import Image from "next/image";
import useGetTrends from "@/hooks/useGetTrends";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

interface TrendsProps {
  league?: string;
  category?: string;
}

export default function Trends({ league, category }: TrendsProps) {
  const t = useTranslations("TRENDS");
  const {
    currId,
    setMatchId,
    filteredPredictions,
    from,
    handlePagination,
    isLoading,
    matchLoading,
    setSearchValue,
    to,
    trends,
  } = useGetTrends();

  const competition = category?.replace(/-/g, " ");

  const leagueTrends = filteredPredictions?.filter((trend) => {
    const isBrazil = trend.country?.toLowerCase() === "brazil";
    const compLower = competition?.toLowerCase() ?? "";
    const matchLower = trend?.competition?.toLowerCase();

    if (isBrazil && competition?.split(" ")[0]?.toLowerCase() !== "brazil") {
      return false;
    }

    return compLower.includes(matchLower) || matchLower.includes(compLower);
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
          handlePagination(undefined, 1);
          setSearchValue(e.target.value);
        }}
      />
      <p className="my-6 text-lg">Select to view</p>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : leagueTrends?.length > 0 ? (
        <div className="w-full flex flex-col gap-4">
          {leagueTrends?.slice(from, to).map((trend, index) => (
            <div key={index} className="w-full flex flex-col gap-4">
              <div
                onClick={() => setMatchId(trend.id)}
                className="bg-gray-one py-2 px-4 rounded-full cursor-pointer dark:bg-blue-one grid grid-cols-3 lg:grid-cols-[1fr_200px_1fr] items-center justify-center"
              >
                {[
                  { name: trend.homeTeam, logo: trend.homeLogo },
                  { name: trend.awayTeam, logo: trend.awayLogo },
                ].map((match, i) => (
                  <>
                    <div
                      key={match.name}
                      className="flex justify-center items-center gap-4 lg:px-10"
                    >
                      <div className="flex flex-row gap-4 items-center">
                        <Image
                          src={match.logo}
                          alt={match.name}
                          width="40"
                          height="40"
                          className="w-5 h-5 lg:w-10 lg:h-10"
                        />
                        <p className="text-sm lg:text-lg font-semibold text-center">
                          {match.name}
                        </p>
                      </div>
                    </div>
                    {i === 0 && (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-sm lg:text-lg font-semibold text-center">
                          Vs
                        </p>
                        <button className="">
                          {currId !== trend.id ? (
                            <FaCaretDown />
                          ) : (
                            <FaCaretUp />
                          )}
                        </button>
                      </div>
                    )}
                  </>
                ))}
              </div>
              {currId === trend?.id &&
                (matchLoading ? (
                  <div className="flex items-center justify-center py-10">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : trends?.length > 0 ? (
                  <div className="grid lg:grid-cols-2 gap-4 py-10">
                    {trends.map((trend, index) => (
                      <TrendCard
                        key={index}
                        count={trend?.count ?? 0}
                        logo={trend.logo}
                        name={trend.name ?? ""}
                        total={trend.total ?? 0}
                        type={trend?.type}
                        gameType={trend?.gameType}
                        opponent={trend.opponent}
                        place={trend?.place}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-10">{t("NO_TRENDS")}</p>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">{t("NO_TRENDS")}</p>
      )}
    </>
  );
}
