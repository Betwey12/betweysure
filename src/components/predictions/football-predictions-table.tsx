import { FaSpinner } from "react-icons/fa";
import PredictionsResult from "../ui/football-results";
import { useTranslations } from "next-intl";

interface FootballPredictionTableProps {
  isLoading: boolean;
  predictions: Prediction[];
  from: number;
  to: number;
}

export default function FootballPredictionTable({
  isLoading,
  predictions,
  from,
  to,
}: FootballPredictionTableProps) {
  const t = useTranslations("PREDICTIONS_TABLE");
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center my-6">
          <span className="animate-spin">
            <FaSpinner />
          </span>
        </div>
      ) : (
        <>
          {(predictions?.length ?? 0) > 0 ? (
            <PredictionsResult
              currentPredictions={predictions}
              from={from}
              to={to}
            />
          ) : (
            <div className="flex items-center justify-center py-6">
              <p>{t("NO_PREDICTIONS")}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
