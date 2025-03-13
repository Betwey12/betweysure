import { otherPagesSeoText, paramsSeoText } from "@/constants";
import LeaguePredictions from "../leagues/league-predictions";
import OtherPagesHero from "../shared/other-pages-hero";
import PurifiedHtml from "../shared/purified-html";
import SelectedGames from "../ui/selected-games";

interface IPredictionPageProps {
  title: string;
  description: string;
  predictionSite: TParams;
}

export default function PredictionPage({
  title,
  description,
  predictionSite,
}: IPredictionPageProps) {
  console.log(paramsSeoText[predictionSite] ?? "", "here pred");

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

      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-4 lg:gap-6">
        <PurifiedHtml html={paramsSeoText[predictionSite] ?? ""} />
      </div>
      <SelectedGames />
    </>
  );
}
