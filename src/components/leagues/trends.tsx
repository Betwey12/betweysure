import { HTTPRequest } from "@/api";
import { getDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

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

  const trends = trendsData?.data || [];

  const leagueTrends = trends?.filter((trend) => {
    const isBrazil =
      trend.matchdetails?.comp_country?.toLowerCase() === "brazil";
    const compLower = competition?.toLowerCase() ?? "";
    const matchLower = trend.matchdetails?.comp_name?.toLowerCase();

    if (isBrazil && competition?.split(" ")[0]?.toLowerCase() !== "brazil") {
      return false;
    }

    return compLower.includes(matchLower) || matchLower.includes(compLower);
  });

  const matchTrends = leagueTrends?.map((match) => {
    const awayRecent = match?.awayrecent ?? [];
    const homeRecent = match?.homerecent ?? [];

    const homeWinHome = homeRecent.filter(
      (prediction) => prediction.winner === "HOME_TEAM"
    );
    const awayWinAway = awayRecent.filter(
      (prediction) => prediction.winner === "AWAY_TEAM"
    );
    const awayTotalGoals = match?.previous?.reduce(
      (acc, curr) => acc + curr.ftAway,
      0
    );
    const homeTotalGoals = match?.previous?.reduce(
      (acc, curr) => acc + curr.ftHome,
      0
    );
    const homeAvgGoals = Math.round(homeTotalGoals / match?.previous.length);
    const awayAvgGoals = Math.round(awayTotalGoals / match?.previous.length);

    const homeWinsFt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome > curr.ftAway ? 1 : 0),
      0
    );

    const awayWinsFt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome < curr.ftAway ? 1 : 0),
      0
    );

    const homeWinsHt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.htHome > curr.htAway ? 1 : 0),
      0
    );
    const awayWinsHt = match?.previous?.reduce(
      (acc, curr) => acc + (curr.htHome < curr.htAway ? 1 : 0),
      0
    );

    const homeHtGoals = match?.previous.reduce(
      (acc, curr) => acc + curr.htHome,
      0
    );
    const awayHtGoals = match?.previous?.reduce(
      (acc, curr) => acc + curr.htAway,
      0
    );

    const homeAvgHtGoals = Math.round(homeHtGoals / match?.previous.length);
    const awayAvgHtGoals = Math.round(awayHtGoals / match?.previous.length);

    const homeWinStreak = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome > curr.ftAway ? 1 : -acc),
      0
    );
    const awayWinStreak = match?.previous?.reduce(
      (acc, curr) => acc + (curr.ftHome < curr.ftAway ? 1 : -acc),
      0
    );

    const homeConsecutiveWins = Math.max(
      ...match.previous
        .map((match) => Number(match.ftHome > match.ftAway))
        .reduce((acc, win) => {
          acc.push(win ? (acc[acc.length - 1] || 0) + 1 : 0);
          return acc;
        }, [] as number[])
    );
    const awayConsecutiveWins = Math.max(
      ...match.previous
        .map((match) => Number(match.ftHome < match.ftAway))
        .reduce((acc, win) => {
          acc.push(win ? (acc[acc.length - 1] || 0) + 1 : 0);
          return acc;
        }, [] as number[])
    );

    const homeCleanSheets = match?.previous?.filter(
      (match) => match?.ftAway === 0
    );
    const awayCleanSheets = match?.previous?.filter(
      (match) => match?.ftHome === 0
    );
    return {
      homeTeam: {
        logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.homeID}.png`,
        name: match?.matchdetails?.home_team,
        ftWins: homeWinsFt,
        htWins: homeWinsHt,
        opponent: {
          logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.awayID}.png`,
          name: match?.matchdetails?.away_team,
        },
        over: homeAvgGoals,
        ovrerHt: homeAvgHtGoals,
        homeWins: homeWinHome?.length,
        winStreak: homeWinStreak,
        consecutiveWins: homeConsecutiveWins,
        cleanSheets: homeCleanSheets,
      },

      awayTeam: {
        logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.awayID}.png`,
        name: match?.matchdetails?.away_team,
        ftWins: awayWinsFt,
        htWins: awayWinsHt,
        opponent: {
          logo: `https://media.api-sports.io/football/teams/${match.matchdetails?.homeID}.png`,
          name: match?.matchdetails?.home_team,
        },
        over: awayAvgGoals,
        overHt: awayAvgHtGoals,
        awayWins: awayWinAway?.length,
        winStreak: awayWinStreak,
        consecutiveWins: awayConsecutiveWins,
        cleanSheets: awayCleanSheets,
      },
      homeMatches: homeRecent?.length,
      awayMatches: awayRecent?.length,
      matches: match?.previous?.length,
    };
  });

  const trendCards = matchTrends.map((match) => {
    const highestWinningTeam =
      match?.homeTeam?.ftWins > match?.awayTeam?.ftWins
        ? match?.homeTeam
        : match?.awayTeam;
    const highestOverTeam =
      match?.homeTeam?.over > match?.awayTeam?.over
        ? match?.homeTeam
        : match?.awayTeam;
    const winningHt =
      match?.homeTeam?.htWins > match?.awayTeam?.htWins
        ? match?.homeTeam
        : match?.awayTeam;
    const highestOverHt =
      match?.homeTeam?.ovrerHt > match?.awayTeam?.overHt
        ? match?.homeTeam
        : match?.awayTeam;
    const highestWInStreak =
      match?.homeTeam?.winStreak > match?.awayTeam?.winStreak
        ? match?.homeTeam
        : match?.awayTeam;

    return (
      <>
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={highestWinningTeam?.logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="">
            <span className="font-bold">{highestWinningTeam?.name}</span>
            has won{" "}
            <span className="text-green-500">
              {highestWinningTeam?.ftWins}
            </span>{" "}
            games in their last{" "}
            <span className="text-red-500">{match?.matches}</span> matches with{" "}
            <span>{highestWinningTeam?.opponent?.name}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <Image
            width={40}
            height={40}
            src={highestOverTeam?.logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="flex items-center gap-2">
            There have been
            <span className="text-[#7400ff]">
              Over {highestOverTeam?.over - 1}.5 goals
            </span>
            in <span>{highestOverTeam?.name}'s</span> last
            <span className="text-red-500">{match?.matches}</span>
            games
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={match?.homeTeam?.logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="">
            <span>{match?.homeTeam?.name}</span> has won{" "}
            <span className="text-green-500">{match?.homeTeam?.homeWins}</span>{" "}
            of their last{" "}
            <span className="text-red-500">{match?.homeMatches}</span> home
            games
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={match?.awayTeam?.logo}
            width={40}
            height={40}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="">
            <span>{match?.awayTeam?.name}</span> has won{" "}
            <span className="text-green-500">{match?.awayTeam?.awayWins}</span>{" "}
            of their last{" "}
            <span className="text-red-500">{match?.awayMatches}</span> away
            games
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={winningHt?.logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="">
            <span className="font-bold">{winningHt?.name}</span> has won{" "}
            <span className="text-green-500">{winningHt?.htWins}</span> half
            time games in their last{" "}
            <span className="text-red-500">{match?.matches}</span> matches with
            <span className="flex items-center gap-2">
              {winningHt?.opponent?.name}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={highestOverHt?.logo}
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <p className="">
            There have been{" "}
            <span className="text-[#7400ff]">
              Over {highestOverHt?.over - 1}.5 goals
            </span>{" "}
            in <span>{highestOverHt?.name}'s</span> last{" "}
            <span className="text-red-500">{match?.matches}</span> half time
            games
          </p>
        </div>
        {highestWInStreak?.winStreak > 3 && (
          <div className="flex items-center gap-2">
            <Image
              src={highestWInStreak?.logo}
              width={40}
              height={40}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <p className="">
              <span>{highestWInStreak?.name}</span> currently has a winning
              streak of{" "}
              <span className="text-green-500">
                {highestWInStreak?.winStreak}
              </span>{" "}
              in their last{" "}
              <span className="text-red-500">{match?.matches}</span> games
            </p>
          </div>
        )}
        {match?.homeTeam?.consecutiveWins > 3 && (
          <div className="flex items-center gap-2">
            <Image
              src={match?.homeTeam?.logo}
              width={40}
              height={40}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <p className="">
              <span>{match?.homeTeam?.name}</span> has won{" "}
              <span className="text-green-500">
                {match?.homeTeam?.consecutiveWins}
              </span>{" "}
              consecutive games in their last{" "}
              <span className="text-red-500">{match?.matches}</span> games
            </p>
          </div>
        )}
        {match?.awayTeam?.consecutiveWins > 3 && (
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              src={match?.awayTeam?.logo}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <p className="">
              <span>{match?.awayTeam?.name}</span> has won
              <span className="text-green-500">
                {match?.awayTeam?.consecutiveWins}
              </span>{" "}
              consecutive games in their last
              <span className="text-red-500">{match?.matches}</span> games
            </p>
          </div>
        )}
        {match?.homeTeam?.cleanSheets?.length > 2 && (
          <div className="flex items-center gap-2">
            <Image
              src={match?.homeTeam?.logo}
              width={40}
              height={40}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <p className="">
              <span>{match?.homeTeam?.name}</span> has kept{" "}
              <span className="text-green-500">
                {match?.homeTeam?.cleanSheets?.length}
              </span>{" "}
              clean sheets in their last{" "}
              <span className="text-red-500">{match?.matches}</span> games
            </p>
          </div>
        )}
        {match?.awayTeam?.cleanSheets?.length > 2 && (
          <div className="flex items-center gap-2">
            <Image
              src={match?.awayTeam?.logo}
              width={40}
              height={40}
              alt="logo"
              className="w-8 h-8 rounded-full"
            />
            <p className="">
              <span>{match?.awayTeam?.name}</span>
              has kept{" "}
              <span className="text-green-500">
                {match?.awayTeam?.cleanSheets?.length}
              </span>{" "}
              clean sheets in their last
              <span className="text-red-500">{match?.matches}</span>
              games
            </p>
          </div>
        )}
      </>
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : matchTrends?.length > 0 ? (
        <>
          <p className="mb-6">{t("DESCRIPTION", { league: league })}</p>

          <div className="grid lg:grid-cols-2 gap-4">{trendCards}</div>
        </>
      ) : (
        <p className="text-center">{t("NO_TRENDS")}</p>
      )}
    </>
  );
}
