import { cn } from "@/lib/utils";
import CloseTimes from "./close";
import Image from "next/image";
import { HTTPRequest } from "@/api";
import { useQuery } from "@tanstack/react-query";
import useGetMatch from "@/hooks/useGetMatch";
import Spinner from "./spinner";

interface PredictionModalProps {
  setClickedPredictionObj: React.Dispatch<
    React.SetStateAction<Prediction | undefined>
  >;
  predictionObj: Prediction | undefined;
  topTwoPredictions:
    | {
        label: string;
        value: string;
      }[]
    | undefined;
}

export default function PredictionModal({
  setClickedPredictionObj,
  predictionObj: prediction,
  topTwoPredictions,
}: PredictionModalProps) {
  const predictionId = prediction?.id;
  const { matchData: match, matchLoading } = useGetMatch(predictionId);

  const recentHomeMatches = match?.homerecent?.map((match) => {
    return {
      label: match.awayteamname,
      value: `${match.fthomegoals} - ${match.ftawaygoals}(${
        match.winner === "HOME_TEAM"
          ? "W"
          : match.ftawaygoals === match.fthomegoals
            ? "D"
            : "L"
      })`,
    };
  });
  const recentAwayMatches = match?.awayrecent.map((match) => {
    return {
      label: match.hometeamname,
      value: `${match.fthomegoals} - ${match.ftawaygoals}(${
        match.winner === "AWAY_TEAM"
          ? "W"
          : match.ftawaygoals === match.fthomegoals
            ? "D"
            : "L"
      })`,
    };
  });
  const tips = match?.tips?.length
    ? match?.tips?.map((tip) => {
        return {
          label: tip.selection,
          value: tip.odds,
        };
      })
    : [];

  const predictionDetails = [
    {
      heading: "Probabilities",
      details: topTwoPredictions,
    },
    {
      heading: "Tips",
      details: tips,
    },
    {
      heading: `Recent ${match?.matchdetails?.home_team} Home Matches`,
      details: recentHomeMatches,
    },
    {
      heading: `Recent ${match?.matchdetails?.away_team} Away Matches`,
      details: recentAwayMatches,
    },
  ];

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 px-4 z-[90]">
      <div
        className={cn(
          "bg-white w-full p-6 rounded-3xl flex flex-col items-center text-blue-three lg:min-w-[500px] max-w-lg text-sm relative dark:bg-blue-two dark:text-white",
          {},
        )}
      >
        <h3 className="text-xl">Prediction</h3>
        <p>League & Country</p>
        {matchLoading ? (
          <Spinner className="mt-4" />
        ) : (
          <>
            <p>
              {match?.matchdetails?.comp_country} /{" "}
              {match?.matchdetails?.comp_name}
            </p>
            <div className="grid grid-cols-3 mt-4">
              <div className="flex items-center justify-center flex-col text-center">
                <Image
                  src={`https://media.api-sports.io/football/teams/${match?.matchdetails?.homeID}.png`}
                  alt="home team logo"
                  className="w-8"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <p> {match?.matchdetails?.home_team}</p>
                <p> {prediction?.homeform}</p>
              </div>
              <p className="place-self-center">
                {match?.result?.home_ft_goals} - {match?.result?.away_ft_goals}
              </p>
              <div className="flex items-center justify-center flex-col text-center">
                <Image
                  src={`https://media.api-sports.io/football/teams/${match?.matchdetails?.awayID}.png`}
                  alt="away team logo"
                  className="w-8"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                PredictionMod
                <p> {match?.matchdetails?.away_team}</p>
                <p> {prediction?.awayform}</p>
              </div>
            </div>
            {predictionDetails?.map((detail, index) => (
              <div
                key={index}
                className="w-full mt-4 flex flex-col items-center justify-center"
              >
                <h3>{detail.heading}</h3>
                {detail?.details?.map(
                  (
                    item: {
                      label: string;
                      value: string;
                    },
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-between"
                    >
                      <p>{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  ),
                )}
              </div>
            ))}
          </>
        )}
        <CloseTimes onClick={() => setClickedPredictionObj(undefined)} />
      </div>
    </div>
  );
}
