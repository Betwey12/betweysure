import { europeanCountries } from "@/assets/data/data";
import { useState } from "react";

interface IUseFilterPredictions {
  predictions: (
    | Prediction
    | (TPremiumPrediction & { competition_full: string })
  )[];
  country: string;
}

export default function useFilterPredictions({
  predictions,
  country,
}: IUseFilterPredictions) {
  const options = [
    "All",
    "England",
    "Spain",
    "Italy",
    "Germany",
    "France",
    "Europe",
  ];
  const [searchValue, setSearchValue] = useState("");

  const filteredPredictions =
    predictions?.filter((prediction) => {
      const filters: Record<string, boolean> = {
        all: true,
        europe: europeanCountries.includes(prediction.country),
        spain: prediction.country?.toLowerCase() === "spain",
        england: prediction.country?.toLowerCase() === "england",
        france: prediction.country?.toLowerCase() === "france",
        germany: prediction.country?.toLowerCase() === "germany",
        italy: prediction.country?.toLowerCase() === "italy",
      };
      const newSearchValue = searchValue.toLowerCase();
      const hasSearchValue =
        prediction.competition_full.toLowerCase().includes(newSearchValue) ||
        prediction.country.toLowerCase().includes(newSearchValue) ||
        prediction.awayTeam.toLowerCase().includes(newSearchValue) ||
        prediction.homeTeam.toLowerCase().includes(newSearchValue);

      return filters[country] && hasSearchValue;
    }) || [];

  return {
    filteredPredictions,
    options,
    setSearchValue,
  };
}
