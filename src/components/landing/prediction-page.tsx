import LeaguePredictions from "../leagues/league-predictions";
import OtherPagesHero from "../shared/other-pages-hero";
import SelectedGames from "../ui/selected-games";

interface IPredictionPageProps {
  title: string;
  description: string;
}

export default function PredictionPage({
  title,
  description,
}: IPredictionPageProps) {
  return (
    <>
      <OtherPagesHero />
      <LeaguePredictions
        periodTitle={title}
        description={description}
        isPeriod={true}
        category="today"
        tab="predictions"
      />

      <SelectedGames />
    </>
  );
}
