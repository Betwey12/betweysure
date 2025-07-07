import LeagueInfo from "./league-info";
import PredictionSelect from "../ui/prediction-select";
import ViewLeague from "./view-league";
import { TPopularLeague } from "@/assets/data/leagueApiF";

interface LeaguePredictionsProps {
  category: string;
  tab: string;
  description: string;
  title?: string;
  popularLeague?: TPopularLeague;
  periodTitle?: string;
  isPeriod: boolean;
}

export default function LeaguePredictions({
  category,
  tab,
  description,
  title,
  popularLeague,
  periodTitle,
  isPeriod,
}: LeaguePredictionsProps) {
  return (
    <div className="text-blue-one lg:px-20 md:px-10 px-4 py-10 lg:py-20 dark:text-white">
      <LeagueInfo
        periodTitle={periodTitle}
        popularLeague={popularLeague}
        isPeriod={isPeriod}
        tab={tab}
        description={description}
        title={title}
      />

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
