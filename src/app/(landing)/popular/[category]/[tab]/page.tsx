import LeaguePredictions from "@/components/leagues/league-predictions";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import SelectedGames from "@/components/ui/selected-games";
import { leagues } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: leagues.title,
  description: leagues.description,
};

export default function PopularPage({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const category = (params["category"] || "") as string;
  const tab = (params["tab"] || "") as string;

  return (
    <>
      <OtherPagesHero />
      <LeaguePredictions category={category} tab={tab} />
      <SelectedGames />
    </>
  );
}
