import { getDate } from "@/lib/utils";
import { useState } from "react";
import usePredictions from "./usePredictions";
import useTrends from "./useTrends";
import useGetMatch from "./useGetMatch";

export default function useGetTrends() {
  const PREDICTIONS_PER_PAGE = 20;
  const [searchValue, setSearchValue] = useState("");

  const fromDate = getDate("today");
  const toDate = getDate("today");

  const endpoint = `tips/football/${fromDate}/${toDate}`;
  const queryKey = ["predictions", fromDate, toDate];
  const predictionsPerPage = 9;

  const {
    data: payload,
    from,
    to,
    isLoading,
    handlePagination,
  } = usePredictions({
    endpoint,
    queryKey,
    predictionsPerPage,
  });

  const predictions = (
    payload?.data.length ? payload.data : []
  ) as Prediction[];
  const filteredPredictions = predictions?.filter(
    (prediction) =>
      prediction.homeTeam.toLowerCase().includes(searchValue) ||
      prediction.awayTeam.toLowerCase().includes(searchValue),
  );

  const [matchId, setMatchId] = useState<number | null>(null);

  const currId = matchId ?? undefined;

  const { matchData, matchLoading } = useGetMatch(currId);
  const isValidData = Object.keys(matchData ?? {}).length > 1;

  const { trends } = useTrends({
    matchData: isValidData ? matchData : undefined,
  });

  const count = Math.ceil(filteredPredictions?.length / PREDICTIONS_PER_PAGE);

  return {
    count,
    setSearchValue,
    isLoading,
    matchLoading,
    trends,
    from,
    to,
    handlePagination,
    filteredPredictions,
    currId,
    setMatchId,
  };
}
