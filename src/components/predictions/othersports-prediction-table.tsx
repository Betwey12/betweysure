import { FaSpinner } from "react-icons/fa";
import OtherSportMatchList from "../ui/other-sports-match-list";
import useHasPlan from "@/hooks/useHasPlan";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { fuzzyMatch, getDate } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface OtherSportsPredictionTableProps {
  isLoading: boolean;
  predictions: TOtherSportsResponse["data"] | undefined;
  from: number;
  to: number;
  bgDashboard?: boolean;
  sport: string;
}

export default function OtherSportsPredictionTable({
  isLoading,
  predictions,
  from,
  to,
  bgDashboard,
  sport,
}: OtherSportsPredictionTableProps) {
  const t = useTranslations("PREDICTIONS_TABLE");
  const today = getDate("today");
  const formatSport = sport.includes("ice") ? "hockey" : sport;

  const { hasPlan } = useHasPlan();
  const endpoint = `tips/stats/${formatSport}/${today}`;

  const { data } = useQuery({
    queryKey: ["results", sport],
    queryFn: async () => HTTPRequest.Get(endpoint),
  });
  const livescores: MatchResults[] = data?.data?.response;

  const predictionList = predictions
    ?.slice(from, to)
    .map((predictionObj, index) => {
      const hidePrediction = !hasPlan && index > to - 3;

      const livePrediction = livescores?.find((game) => {
        return (
          fuzzyMatch(game.teams.home.name, predictionObj.home_team_name) &&
          fuzzyMatch(game.teams.away.name, predictionObj.away_team_name)
        );
      });

      return (
        <OtherSportMatchList
          predictionObj={predictionObj}
          key={index}
          bgDashboard={bgDashboard}
          hidePrediction={hidePrediction}
          scores={livePrediction?.scores}
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
          <p>{t("NO_PREDICTIONS")}</p>
        </div>
      )}
    </>
  );
}
const subheaders = ["country", "league", "home", "away", "prediction"];
const mobileHeading = ["Matches", "Prediction"];
