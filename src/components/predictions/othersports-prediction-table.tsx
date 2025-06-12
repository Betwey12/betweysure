import { FaSpinner } from "react-icons/fa";
import OtherSportMatchList from "../ui/other-sports-match-list";
import useHasPlan from "@/hooks/useHasPlan";
import { useTranslations } from "next-intl";

interface OtherSportsPredictionTableProps {
  isLoading: boolean;
  predictions: TOtherSportsResponse["data"] | undefined;
  from: number;
  to: number;
  bgDashboard?: boolean;
}

export default function OtherSportsPredictionTable({
  isLoading,
  predictions,
  from,
  to,
  bgDashboard,
}: OtherSportsPredictionTableProps) {
  const t = useTranslations("PREDICTIONS_TABLE");

  const { hasPlan } = useHasPlan();

  const predictionList = predictions
    ?.slice(from, to)
    .map((predictionObj, index) => {
      const hidePrediction = !hasPlan && index > to - 3;

      return (
        <OtherSportMatchList
          predictionObj={predictionObj}
          key={index}
          bgDashboard={bgDashboard}
          hidePrediction={hidePrediction}
        />
      );
    });

  return (
    <>
      <div className="grid grid-cols-2 text-center lg:hidden">
        {mobileHeading.map((heading) => (
          <h4 key={heading} className="text-xs text-center capitalize">
            {heading}
          </h4>
        ))}
      </div>

      <div className="lg:grid grid-cols-5 hidden">
        {subheaders.map((heading) => (
          <h4 key={heading} className="text-xs text-center capitalize">
            {heading}
          </h4>
        ))}
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center mt-6">
          <span className="animate-spin">
            <FaSpinner />
          </span>
        </div>
      ) : (predictionList?.length ?? 0) > 0 ? (
        <div className="flex flex-col gap-1 mt-6">{predictionList}</div>
      ) : (
        <div className="flex items-center justify-center mt-6">
          <p className="text-center">{t("NO_PREDICTIONS")}</p>
        </div>
      )}
    </>
  );
}
const subheaders = ["country", "league", "home", "away", "prediction"];
const mobileHeading = ["Matches", "Prediction"];
