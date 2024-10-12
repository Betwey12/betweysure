import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "../api";
import { useState } from "react";

type TUsePrediction = {
  endpoint: string;
  queryKey: (string | boolean | number | null | undefined)[];
  predictionsPerPage?: number;
};

const usePredictions = ({
  endpoint,
  queryKey,
  predictionsPerPage = 10,
}: TUsePrediction) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(predictionsPerPage);

  async function getPredictions(): Promise<
    TPredictionResponse | TOtherSportsResponse | TPremiumFootballResponse
  > {
    return await HTTPRequest.Get(endpoint);
  }

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: getPredictions,
  });

  const handlePagination = (_event: any, value: number) => {
    setFrom((value - 1) * predictionsPerPage);
    setTo(value * predictionsPerPage);
  };

  return {
    data,
    isLoading,
    handlePagination,
    from,
    to,
  };
};

export default usePredictions;
