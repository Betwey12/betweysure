import { FaSpinner } from "react-icons/fa";
import PredictionsResult from "../ui/football-results";

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
              whiteBg={true}
            />
          ) : (
            <div className="flex items-center justify-center py-6">
              <h3>No predictions available for this option</h3>
            </div>
          )}
        </>
      )}
    </>
  );
}
