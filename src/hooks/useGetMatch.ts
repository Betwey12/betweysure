import { HTTPRequest } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useGetMatch(matchId?: number) {
  const getMatch = async (): Promise<TMatchResponse> => {
    return await HTTPRequest.Get(`tips/football-match/${matchId}`);
  };

  const { data, isLoading: matchLoading } = useQuery({
    queryKey: ["match", matchId],
    queryFn: getMatch,
    enabled: !!matchId,
  });

  const matchData = data?.data;

  return { matchData, matchLoading };
}
