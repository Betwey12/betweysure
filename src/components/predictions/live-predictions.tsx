import { Pagination } from "@mui/material";
import { outcomes } from "../../assets/data/data";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface LivePredictionsProps {
  livePredictions?: TLivePrediction[];
  isLoading: boolean;
}

export default function LivePredictions({
  livePredictions,
  isLoading,
}: LivePredictionsProps) {
  const t = useTranslations("LIVE_PREDICTIONS");
  const [from, setFrom] = useState(0);
  const PREDICTIONS_PER_PAGE = 3;
  const [to, setTo] = useState(PREDICTIONS_PER_PAGE);
  const count = Math.ceil(
    (livePredictions?.length ?? 0) / PREDICTIONS_PER_PAGE
  );

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFrom((value - 1) * PREDICTIONS_PER_PAGE);
    setTo(value * PREDICTIONS_PER_PAGE);
  };
  const predictions = Array.isArray(livePredictions) ? livePredictions : [];

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <FaSpinner className="animate-spin" />
        </div>
      ) : predictions?.length === 0 ? (
        <p className="text-center my-6">{t("NO_LIVE_PREDICTIONS")}</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 py-6">
          {predictions?.slice(from, to)?.map((livePrediction) => {
            const data = {
              over05goals: livePrediction.over05goals,
              over15goals: livePrediction.over15goals,
              over25goals: livePrediction.over25goals,
              over35goals: livePrediction.over35goals,
              home_win: livePrediction.home_win,
              away_win: livePrediction.away_win,
            };

            const highest = Object.keys(data).reduce((a, b) =>
              //@ts-expect-error any
              data[a] > data[b] ? a : b
            );

            return (
              <LivePredictionCard
                key={livePrediction.id}
                livePrediction={livePrediction}
                prediction={outcomes[highest]}
              />
            );
          })}
        </div>
      )}
      <div className="flex items-center lg:justify-end">
        <Pagination
          count={count}
          shape="rounded"
          onChange={handlePagination}
          className="mt-4"
        />
      </div>
    </>
  );
}

function LivePredictionCard({
  livePrediction,
  prediction,
}: {
  livePrediction: TLivePrediction;
  prediction: string;
}) {
  return (
    <div className="w-full lg:w-auto flex items-center flex-col p-4 gap-3 lg:p-6 bg-white shadow border border-gray-two text-blue-three rounded dark:bg-blue-one dark:text-white dark:border-0">
      <div className="flex min-w-max items-center gap-2">
        <p className="text-xs">{livePrediction?.homeTeam}</p>
        <p className="text-2xl">
          {livePrediction?.home_goals} - {livePrediction?.away_goals}
        </p>
        <p className="text-xs">{livePrediction?.awayTeam}</p>
      </div>
      <p className="text-xs text-center">
        {livePrediction?.competition_full} ({livePrediction?.country})
      </p>
      <p className="text-2xl">
        {livePrediction?.duration}' ({livePrediction?.status})
      </p>
      <p className="bg-cyan/50 px-4 py-2 rounded">{prediction}</p>
    </div>
  );
}
