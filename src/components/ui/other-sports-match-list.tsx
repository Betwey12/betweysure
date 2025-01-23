import {
  countries,
  otherSPortsWorldLeagues,
  rankMapping,
} from "../../assets/data/data";
import { cn } from "../../lib/utils";
import globeIcon from "../../assets/icons/globe.png";
import { FaLock } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import AuthedLink from "./authed-link";

interface OtherSportMatchListProps {
  predictionObj: TOtherSPortsMatchData;
  bgDashboard?: boolean;
  hidePrediction?: boolean;
  scores?: Scores;
}

export default function OtherSportMatchList({
  predictionObj,
  bgDashboard,
  hidePrediction,
  scores,
}: OtherSportMatchListProps) {
  const { theme } = useTheme();

  const country = Object.entries(countries).find(
    ([_key, value]) =>
      value.toLowerCase() === predictionObj?.country_name?.toLowerCase()
  )?.[0];

  const predictionProbabilities = Object.keys(predictionObj)
    .map(
      // @ts-expect-error do not type
      (key) => (predictionObj[key] <= 1 ? predictionObj[key] : null)
    )
    .sort((a, b) => b - a);

  const highestProbability = predictionProbabilities[0];
  const nextHighestPrediction = predictionProbabilities[1];

  let highestPrediction = Object.keys(predictionObj).find(
    (predictionKey) =>
      // @ts-expect-error do not type
      +predictionObj[predictionKey] === highestProbability
  );
  // check if highest prediction is rank_to_lvl1_nt or rank_to_75_p1, replace prediction with the next highest

  if (
    (highestPrediction === "rank_to_lvl1_nt" ||
      highestPrediction === "rank_to_75_p1") &&
    highestProbability - nextHighestPrediction < 0.1 &&
    predictionObj["botd"]
  ) {
    highestPrediction = Object.keys(predictionObj).find(
      (predictionKey) =>
        // @ts-expect-error do not type
        +predictionObj[predictionKey] === nextHighestPrediction
    );
  }

  const percent = Math.round(predictionObj.percent) || "";

  const prediction =
    // @ts-expect-error do not type
    rankMapping[highestPrediction] || "N/A";

  const imgSource = otherSPortsWorldLeagues.includes(
    predictionObj?.country_name?.toLowerCase()
  )
    ? globeIcon
    : `https://flagcdn.com/16x12/${country}.png`;

  return (
    <div
      className={cn(
        "grid grid-cols-[80px_1fr_80px] px-2 lg:grid-cols-5 items-center border-b border-gray-three text-xs py-2 lg:px-6 rounded-lg dark:border-0 dark:text-white dark:bg-blue-two",
        {
          "bg-white text-blue-three border-b border-gray-two first:border-t px-0":
            bgDashboard && theme === "light",
          "bg-blue-two px-0": bgDashboard && theme === "dark",
        }
      )}
    >
      <div
        className={cn("flex flex-col lg:flex-row items-center gap-2", {
          "opacity-50": hidePrediction,
        })}
      >
        <Image
          height={24}
          width={24}
          src={imgSource}
          alt=""
          className="w-6 h-6 rounded-full"
        />
        <p className="truncate w-[90%] text-center lg:text-left">
          {predictionObj?.country_name}
        </p>
      </div>
      <p
        className={cn("truncate w-[90%] hidden lg:block", {
          "opacity-50": hidePrediction,
        })}
      >
        {predictionObj?.league_name}
      </p>
      <p
        className={cn("truncate hidden lg:block", {
          "opacity-50": hidePrediction,
        })}
      >
        {predictionObj?.home_team_name}
      </p>
      <p
        className={cn("truncate hidden lg:block", {
          "opacity-50": hidePrediction,
        })}
      >
        {predictionObj?.away_team_name}
      </p>
      <p
        className={cn(
          "lg:hidden flex flex-col items-center max-w-36 justify-center",
          {
            "opacity-50": hidePrediction,
          }
        )}
      >
        <span className="truncate max-w-[90%]">
          {predictionObj?.home_team_name}
        </span>
        <span>Vs</span>
        <span className="truncate max-w-[90%]">
          {predictionObj?.away_team_name}
        </span>
      </p>
      {hidePrediction ? (
        <AuthedLink
          href={"/pricing"}
          className="place-self-center gap-2 flex-col lg:flex-row flex items-center border border-red-300 text-red-300 px-2 py-1 rounded"
          title={
            <>
              Show <FaLock />
            </>
          }
        />
      ) : (
        <div className="flex items-center gap-2  place-self-center flex-col lg:flex-row">
          <button className="gap-1 flex-col lg:flex-row flex items-center border border-cyan px-2 py-1 rounded">
            {prediction}
            {percent && (
              <span
                className={cn("text-green-500", {
                  "text-red-500": percent < 50,
                  "text-yellow-500": percent === 50,
                })}
              >
                {percent}%
              </span>
            )}
          </button>
          {scores && (
            <span>
              {scores?.home?.total || 0} : {scores?.away?.total || 0}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
