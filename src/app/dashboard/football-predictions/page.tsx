import FootballPredictions from "@/components/predictions/football-predictions";
import { footballPredictions } from "@/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: footballPredictions.title,
  description: footballPredictions.description,
};

export default function FootballPredictionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const country = (searchParams.country as string) ?? "all";

  return <FootballPredictions country={country} />;
}
