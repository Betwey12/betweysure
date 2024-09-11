import FootballPredictions from "@/components/predictions/football-predictions";

export default function FootballPredictionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const country = searchParams.country as string;

  return <FootballPredictions country={country} />;
}
