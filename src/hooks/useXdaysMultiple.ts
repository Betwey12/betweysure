import { getDate } from "@/lib/utils";
import usePredictions from "./usePredictions";
import dayjs from "dayjs";

interface IUseXdaysMultiple {
  maxAccuracy: number;
  maxOdds: number;
  investment: number;
  noOfGames: number;
}

export default function useXdaysMultiple({
  maxAccuracy,
  maxOdds,
  investment,
  noOfGames,
}: IUseXdaysMultiple) {
  const fullDate = getDate("today");
  const queryKey = ["predictions", fullDate];

  const endpoint = `tips/football/${fullDate}/${fullDate}`;

  const { data } = usePredictions({
    endpoint,
    predictionsPerPage: 10,
    queryKey,
  });
  const predictions = data?.data as Prediction[];

  const oddPredictionsKeys: Array<Record<string, keyof Prediction>> = [
    { key: "away_win", oddsKey: "away_win_odds" },
    { key: "home_win", oddsKey: "home_win_odds" },
    { key: "both_teams_to_score", oddsKey: "btts_yes_odds" },
  ];

  const topPredictions = predictions
    ?.filter((prediction) =>
      oddPredictionsKeys.some(
        (key) =>
          +(prediction[key.key] ?? "0") >= maxAccuracy &&
          dayjs(prediction.date).isAfter(dayjs().add(1, "minute")),
      ),
    )
    .reduce(
      (acc, prediction) => {
        oddPredictionsKeys.forEach(({ key, oddsKey }) => {
          if (+(prediction[key] ?? "0") >= maxAccuracy) {
            acc.push({
              id: prediction.id,
              home: prediction.homeTeam,
              away: prediction.awayTeam,
              prediction: key,
              odds: +(prediction[oddsKey] ?? "0"),
            });
          }
        });
        return acc;
      },
      [] as Array<{
        id: number;
        home: string;
        away: string;
        prediction: keyof Prediction;
        odds: number;
      }>,
    )
    .filter((prediction) => prediction.odds <= maxOdds)
    .sort((a, b) => b.odds - a.odds)
    ?.slice(0, noOfGames);
  const totalOdds = topPredictions?.reduce((acc, curr) => acc * curr.odds, 1);
  const returns = investment * (totalOdds ?? 0);

  return {
    topPredictions,
    returns,
  };
}
