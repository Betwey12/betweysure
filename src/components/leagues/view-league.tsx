"use client";
import { HTTPRequest } from "@/api";
import { period, popularPredictionstabs } from "@/assets/data/data";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Standings from "./standings";
import Trends from "./trends";
import Form from "./form";
import Fixtures from "./fixtures";
import Predictions from "./predictions";
import { TPopularLeague } from "@/assets/data/leagueApiF";

interface ViewLeagueProps {
  category: string;
  activeTab: string;
  popularLeague?: TPopularLeague;
}

export default function ViewLeague({
  category,
  activeTab,
  popularLeague,
}: ViewLeagueProps) {
  const { data: leagueResponse, isLoading } = useQuery({
    queryKey: ["leaguePredictions", category],
    queryFn: (): Promise<TLeagueResponse> =>
      HTTPRequest.Get(`tips/football-league/${popularLeague?.apiFootballId}`),
  });

  const isPeriod = category ? period.includes(category) : false;
  const fixtures = leagueResponse?.data?.fixtures?.response;
  const standings = leagueResponse?.data.standings?.response;

  return (
    <>
      {!isPeriod && (
        <div className="grid grid-cols-3 lg:flex items-center gap-1 mb-10">
          {popularPredictionstabs.map((tab) => (
            <Link
              key={tab}
              href={`/popular/${category}/${tab}`}
              className={cn(
                "bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize",
                {
                  "bg-cyan": tab === activeTab,
                },
              )}
            >
              {tab}
            </Link>
          ))}
        </div>
      )}
      {activeTab === "standings" && (
        <Standings
          leagueStandings={standings}
          isLoading={isLoading}
          league={popularLeague?.name}
          category={category}
        />
      )}
      {activeTab === "trends" && (
        <Trends category={category} league={popularLeague?.name} />
      )}
      {activeTab === "form" && (
        <Form
          leagueStandings={standings}
          isLoading={isLoading}
          category={category}
        />
      )}
      {activeTab === "fixtures" && (
        <Fixtures fixtures={fixtures} isLoading={isLoading} />
      )}
      {activeTab === "predictions" && (
        <Predictions
          popularLeague={popularLeague}
          category={category}
          isPeriod={isPeriod}
        />
      )}
    </>
  );
}
