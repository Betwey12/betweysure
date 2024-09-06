import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { FaCheck, FaClock, FaLock, FaTimes } from "react-icons/fa";

export default function ResultIcon({
  highestPrediction,
  homeGoals,
  awayGoals,
  status,
  resultKey,
}: {
  highestPrediction?: string;
  homeGoals: number;
  awayGoals: number;
  resultKey?: string;
  status?: string;
}) {
  const { user } = useAuth();
  const hasPlan =
    (user?.plan?.expiry ?? 0) > Date.now() && user?.plan?.type !== "free";
  const fullTimetStatus = status?.toUpperCase() === "FT";

  const homeHtGoals = 0;
  const awayHtGoals = 0;
  const htftStatus = false;

  const conditions = getConditions({
    homeHtGoals,
    awayHtGoals,
    homeGoals,
    awayGoals,
    fullTimetStatus,
    htftStatus,
  });

  const isCheck = resultKey
    ? conditions[resultKey]
    : highestPrediction && conditions[highestPrediction];
  const isPending = resultKey && conditions[resultKey] === undefined;

  return (
    <span
      className={cn(
        `w-7 h-7 bg-gray-light text-black flex flex-col items-center justify-center rounded-full`,
        {
          "text-green-500 bg-green-200 lg:w-11 lg:h-11": isCheck && hasPlan,
          "text-red-500 bg-red-200 lg:w-11 lg:h-11":
            !isCheck && !isPending && hasPlan,
        }
      )}
    >
      {isPending ? (
        <FaClock title="Pending" />
      ) : (
        <>
          {!hasPlan && (
            <FaLock title="You need to subscribe to access this feature" />
          )}
          {hasPlan && isCheck && (
            <>
              <FaCheck />
              <span className="hidden lg:block">
                {homeGoals} - {awayGoals}
              </span>
            </>
          )}
          {hasPlan && !isCheck && (
            <>
              <FaTimes />
              <span className="hidden lg:block">
                {homeGoals} - {awayGoals}
              </span>
            </>
          )}
        </>
      )}
    </span>
  );
}

function getConditions({
  homeHtGoals,
  awayHtGoals,
  homeGoals,
  awayGoals,
  htftStatus,
  fullTimetStatus,
}: {
  homeHtGoals: number;
  awayHtGoals: number;
  homeGoals: number;
  awayGoals: number;
  htftStatus: boolean;
  fullTimetStatus: boolean;
}): Record<string, boolean | undefined> {
  const home_win = homeGoals > awayGoals;
  const away_win = awayGoals > homeGoals;
  const draw = homeGoals === awayGoals;
  const over05goals = homeGoals + awayGoals > 0;
  const over15goals = homeGoals + awayGoals > 1;
  const over25goals = homeGoals + awayGoals > 2;
  const over35goals = homeGoals + awayGoals > 3;
  const both_teams_to_score = homeGoals > 0 && awayGoals > 0;
  const homeSecondHalfGoals = homeGoals - homeHtGoals;
  const awaySecondHalfGoals = awayGoals - awayHtGoals;

  return {
    ...(htftStatus && { hthome: homeHtGoals > awayHtGoals }),
    ...(htftStatus && { htaway: homeHtGoals < awayHtGoals }),
    ...(htftStatus && { htdraw: homeHtGoals === awayHtGoals }),
    ...(htftStatus && { fhover0: homeHtGoals + awayHtGoals > 0 }),
    ...(htftStatus && { fhover1: homeHtGoals + awayHtGoals > 1 }),
    ...(htftStatus && { htft: homeHtGoals + awayHtGoals > 2 }),
    ...(htftStatus && {
      btsibh:
        homeHtGoals > 0 &&
        awayHtGoals > 0 &&
        homeSecondHalfGoals > 0 &&
        awaySecondHalfGoals > 0,
    }),
    ...(htftStatus && {
      "Home/Away": homeHtGoals > awayHtGoals && homeGoals < awayGoals,
    }),
    ...(htftStatus && {
      "Away/Home": homeHtGoals < awayHtGoals && homeGoals > awayGoals,
    }),
    ...(htftStatus && {
      "Home/Draw": homeHtGoals > awayHtGoals && homeGoals === awayGoals,
    }),
    ...(htftStatus && {
      "Away/Draw": homeHtGoals < awayHtGoals && homeGoals === awayGoals,
    }),
    ...(htftStatus && {
      "Draw/Home": homeHtGoals === awayHtGoals && homeGoals > awayGoals,
    }),
    ...(htftStatus && {
      "Draw/Away": homeHtGoals === awayHtGoals && homeGoals < awayGoals,
    }),
    ...(fullTimetStatus && { home_win }),
    ...(fullTimetStatus && { away_win }),
    ...(fullTimetStatus && { draw }),
    ...(fullTimetStatus && { over05goals }),
    ...(fullTimetStatus && { over15goals }),
    ...(fullTimetStatus && { over25goals }),
    ...(fullTimetStatus && { over35goals }),
    ...(fullTimetStatus && { both_teams_to_score }),
    ...(fullTimetStatus && { "1X": home_win || draw }),
    ...(fullTimetStatus && { "2X": away_win || draw }),
    ...(fullTimetStatus && { "1": home_win }),
    ...(fullTimetStatus && { X: draw }),
    ...(fullTimetStatus && { "2": away_win }),
    ...(fullTimetStatus && { "12": home_win || away_win }),
    ...(fullTimetStatus && {
      [`${homeGoals}-${awayGoals}`]: true,
    }),
    ...(fullTimetStatus && {
      away_both_teams_to_score: away_win && both_teams_to_score,
    }),
    ...(fullTimetStatus && {
      home_both_teams_to_score: home_win && both_teams_to_score,
    }),
    ...(fullTimetStatus && { home_over05goals: home_win && over05goals }),
    ...(fullTimetStatus && { away_over05goals: away_win && over05goals }),
    ...(fullTimetStatus && { home_over15goals: home_win && over15goals }),
    ...(fullTimetStatus && { away_over15goals: away_win && over15goals }),
    ...(fullTimetStatus && { home_over25goals: home_win && over25goals }),
    ...(fullTimetStatus && { away_over25goals: away_win && over25goals }),
    ...(fullTimetStatus && { home_over35goals: home_win && over35goals }),
    ...(fullTimetStatus && { away_over35goals: away_win && over35goals }),
  };
}
