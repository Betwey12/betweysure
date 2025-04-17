"use client";
import FootballPredictions from "@/components/predictions/football-predictions";
import { useSearchParams } from "next/navigation";

export default function FootballPredictionsPage() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") ?? "";

  return <FootballPredictions country={country} />;
}
