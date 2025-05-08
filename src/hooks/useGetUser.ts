import { HTTPRequest } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export default function useGetUser() {
  const { user } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: (): Promise<TUserResponse> => HTTPRequest.Get(`users/me`),
    enabled: !!user?.uid,
  });
  return { user: data?.user, isLoading };
}
