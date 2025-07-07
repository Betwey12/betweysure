"use client";
import usePredictions from "@/hooks/usePredictions";
import FootballPredictionTable from "../predictions/football-predictions-table";
import { getDate } from "@/lib/utils";
import { Pagination } from "@mui/material";

export default function ResultsHistory() {
  const fromDate = getDate("last week");
  const toDate = getDate("yesterday");
  const endpoint = `tips/football/${fromDate}/${toDate}`;
  const {
    data: payload,
    isLoading,
    from,
    to,
    handlePagination,
  } = usePredictions({
    endpoint,
    queryKey: ["football"],
    predictionsPerPage: 10,
  });
  const predictions = payload?.data as Prediction[];
  const sortedPredictions = predictions?.sort(
    (a, b) => a.date?.localeCompare(b.date) ?? 0,
  );
  const predictionsPerPage = 10;

  const count = Math.ceil((predictions?.length ?? 0) / predictionsPerPage);

  return (
    <>
      <div className="flex flex-col gap-2 my-6">
        <FootballPredictionTable
          predictions={sortedPredictions}
          from={from}
          to={to}
          isLoading={isLoading}
        />
      </div>
      {(predictions?.length ?? 0) > 0 && (
        <div className="flex items-center lg:justify-end">
          <Pagination
            count={count}
            shape="rounded"
            onChange={handlePagination}
            className=""
            page={Math.ceil(from / predictionsPerPage) + 1}
          />
        </div>
      )}
    </>
  );
}
