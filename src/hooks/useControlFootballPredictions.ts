import { useState } from "react";
import useChangeDate from "./useChangeDate";
import usePredictions from "./usePredictions";
import useFilterBundles from "./useFilterBundles";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "../api";
import { period } from "../assets/data/data";

const useControlFootballPredictions = () => {
  const [periodIndex, setPeriodIndex] = useState(1);

  const currentPeriod = period[periodIndex] as TPeriod;

  const { fullDate, handlDateChange, setShowDate, showDate, setFullDate } =
    useChangeDate(currentPeriod);

  const queryKey = ["predictions", fullDate];
  const endpoint = `tips/football/${fullDate}/${fullDate}`;

  const predictionsPerPage = 10;
  const { data, from, handlePagination, isLoading, to } = usePredictions({
    endpoint,
    queryKey,
    predictionsPerPage,
  });

  const payload = data?.data as TPredictionResponse["data"] | undefined;

  const transformedData =
    payload?.map((data) => {
      const {
        over0,
        hthome,
        htaway,
        htdraw,
        hftfpred,
        bttswin,
        btsibh,
        fhover0,
        fhover1,
      } = data?.matchData?.predictions ?? {};

      return {
        ...data,
        over0,
        hthome,
        htaway,
        htdraw,
        hftfpred,
        bttswin,
        btsibh,
        fhover0,
        fhover1,
      };
    }) ?? [];

  const { handlePrediction, tableData, activeTab, showLive } = useFilterBundles(
    {
      data: transformedData,
      handlePagination,
    }
  );

  const { data: inplayData, isLoading: isLoadingLive } = useQuery({
    queryKey: ["livePredictions"],
    queryFn: () => HTTPRequest.Get("tips/inplay"),
    enabled: showLive,
  });

  const livePredictions = inplayData?.data as TLivePrediction[] | undefined;

  return {
    fullDate,
    handlDateChange,
    handlePagination,
    isLoading,
    periodIndex,
    setPeriodIndex,
    showDate,
    setShowDate,
    showLive,
    tableData,
    to,
    from,
    handlePrediction,
    livePredictions,
    setFullDate,
    predictionsPerPage,
    activeTab,
    isLoadingLive,
  };
};

export default useControlFootballPredictions;
