import { HTTPRequest } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupportedBookies() {
  const { data: supportedBookies, isPending } = useQuery({
    queryKey: ["bookies"],
    queryFn: () => HTTPRequest.Get("bet/supported-bookies"),
  });
  const bookies = Object.keys(supportedBookies?.data ?? {});

  return { bookies, isPending };
}
