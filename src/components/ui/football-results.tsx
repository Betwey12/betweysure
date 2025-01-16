import { useState } from "react";
import PredictionModal from "./prediction-modal";
import { PredictionList } from "./prediction-list";
import { outcomes, popularTags } from "../../assets/data/data";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

interface PredictionsResultProps {
  currentPredictions?: TPredictionResponse["data"];
  from: number;
  to: number;
}

export default function PredictionsResult({
  currentPredictions,
  from,
  to,
}: PredictionsResultProps) {
  const { user } = useAuth();
  const expiryDate = new Date(user?.plan?.expiry || Date.now());
  const now = new Date();
  const hasPlan = user?.plan && now < expiryDate && user?.plan?.type !== "free";

  const [clickedPredictionObj, setClickedPredictionObj] = useState<
    Prediction | undefined
  >();
  const [topPredictions, setTopPredictions] = useState<
    {
      label: string;
      value: string;
    }[]
  >();

  const popularLeaguePredictions = currentPredictions
    ?.filter((prediction) =>
      popularTags.some((tag) =>
        prediction.competition_full.toLowerCase().includes(tag)
      )
    )
    .sort((a, b) => {
      return a.competition_full.localeCompare(b.competition_full);
    });
  const restPredictions = currentPredictions
    ?.filter(
      (prediction) =>
        !popularTags.some((tag) =>
          prediction.competition_full.toLowerCase().includes(tag)
        )
    )
    .sort((a, b) => {
      return a.competition_full.localeCompare(b.competition_full);
    });

  const filteredTableData = [
    ...(popularLeaguePredictions ?? []),
    ...(restPredictions ?? []),
  ];

  const predictionSlice = filteredTableData?.slice(from, to);

  return (
    <>
      {predictionSlice.map((predictionObj, index) => {
        const {
          home_win,
          away_win,
          draw,
          both_teams_to_score,
          over15goals,
          over25goals,
          over35goals,
        } = predictionObj;
        const newPredictionObj = {
          home_win,
          away_win,
          draw,
          both_teams_to_score,
          over15goals,
          over25goals,
          over35goals,
        };
        const predictionProbabilities = [
          +home_win,
          +away_win,
          +draw,
          +both_teams_to_score,
          +over15goals,
          +over25goals,
          +over35goals,
        ].sort((a, b) => b - a);
        const highestProbability = Math.max(...predictionProbabilities);
        const highestPrediction = Object.keys(predictionObj).find(
          // @ts-expect-error do not type
          (prediction) => +predictionObj[prediction] === highestProbability
        );
        const secondHighest = Object.keys(predictionObj).find(
          (prediction) =>
            // @ts-expect-error do not type
            +predictionObj[prediction] === predictionProbabilities[1]
        );

        const newHighest =
          highestPrediction &&
          outcomes[highestPrediction] === "Over 1.5" &&
          highestProbability - predictionProbabilities[1] < 10 &&
          predictionObj.bet_of_the_day
            ? secondHighest
            : highestPrediction;

        predictionObj.prediction =
          predictionObj.prediction ??
          (newHighest ? outcomes[newHighest] : undefined);

        predictionObj.resultKey = predictionObj?.resultKey ?? newHighest;

        const topTwoPredictions = Object.entries(newPredictionObj)
          // @ts-expect-error do not type
          .sort(({ 1: a }, { 1: b }) => b - a)
          .slice(0, 2)
          .map(([label, value]) => ({
            label: outcomes[label] || label,
            value,
          }));

        const hidePrediction =
          !hasPlan &&
          ((popularTags.some((tag) =>
            predictionObj.competition_full.toLowerCase().includes(tag)
          ) &&
            index > 6) ||
            index > predictionSlice?.length - 3);

        return (
          <PredictionList
            key={index}
            highestPrediction={newHighest}
            predictionObj={predictionObj}
            topPredictions={topTwoPredictions}
            setClickedPredictionObj={setClickedPredictionObj}
            setTopPredictions={setTopPredictions}
            prediction={predictionObj.prediction}
            hidePrediction={hidePrediction}
          />
        );
      })}
      {clickedPredictionObj && (
        <PredictionModal
          setClickedPredictionObj={setClickedPredictionObj}
          topTwoPredictions={topPredictions}
          predictionObj={clickedPredictionObj}
        />
      )}
      {!user && (
        <p className="py-3 px-4">
          <Link href="/auth/login" className="text-cyan font-bold">
            Login
          </Link>{" "}
          to view more predictions
        </p>
      )}
      {!hasPlan && user && (
        <p className="py-3 px-4 text-center">
          Subscribe to{" "}
          <Link href="/dashboard/buy-plan" className="text-cyan font-bold">
            view
          </Link>{" "}
          locked predictions
        </p>
      )}
    </>
  );
}
