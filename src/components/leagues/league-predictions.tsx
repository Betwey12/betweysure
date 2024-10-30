import { leagueList } from "@/assets/data/data";
import LeagueInfo from "./league-info";
import PredictionSelect from "../ui/prediction-select";
import ViewLeague from "./view-league";

interface LeaguePredictionsProps {
  category: string;
  tab: string;
}

export default function LeaguePredictions({
  category,
  tab,
}: LeaguePredictionsProps) {
  const popularLeagues = [...Object.values(leagueList)].flat();

  console.log(category, "category");

  const popularLeague = popularLeagues?.find(
    (l) =>
      l.name.toLowerCase() ===
      decodeURIComponent(category)?.toLowerCase()?.replace(/-/g, " ")
  );

  return (
    <div className="text-blue-one lg:px-20 md:px-10 px-4 py-10 lg:py-20 dark:text-white">
      <LeagueInfo popularLeague={popularLeague} category={category} />

      <div className="lg:hidden mb-6">
        <PredictionSelect />
      </div>
      <ViewLeague
        category={category}
        activeTab={tab}
        popularLeague={popularLeague}
      />
    </div>
  );
}
