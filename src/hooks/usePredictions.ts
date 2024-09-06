import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "../api";
import { useState } from "react";

type TUsePrediction = {
  endpoint: string;
  queryKey: (string | boolean | number | null | undefined)[];
  predictionsPerPage: number;
};

export const usePredictions = ({
  endpoint,
  queryKey,
  predictionsPerPage,
}: TUsePrediction) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(predictionsPerPage);

  async function getPredictions(): Promise<
    TPredictionResponse | TOtherSportsResponse
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
