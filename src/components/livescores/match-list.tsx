import { cn } from "@/lib/utils";
import Image from "next/image";

interface MatchListProps {
  result: MatchResults;
}

export default function MatchList({ result }: MatchListProps) {
  const country = result.league.country
    ? result?.league?.country
    : result?.country?.name;

  return (
    <div className="grid grid-cols-[1fr_1fr_30px] border-t border-gray-two lg:grid-cols-6 items-center py-3">
      <p className="lg:block hidden">{country}</p>
      <p className="lg:block hidden">{result?.league?.name}</p>
      <p className="lg:hidden flex flex-col items-center justify-center text-center">
        <span>{country} / </span>
        <span>{result?.league?.name}</span>
      </p>
      <div className="lg:hidden flex flex-col items-center justify-center gap-1">
        <p className="truncate">{result?.teams?.home?.name}</p>
        <p className="bg-yellow-one px-3 rounded-full py-1">
          {(result?.goals?.home ?? 0) || (result.scores?.home?.total ?? 0)} :{" "}
          {(result?.goals?.away ?? 0) || (result?.scores?.away?.total ?? 0)}
        </p>

        <p className="truncate">{result?.teams?.away?.name}</p>
      </div>
      <div className="lg:flex hidden items-center gap-2">
        <Image
          width={30}
          height={30}
          src={result?.teams?.home?.logo}
          alt="home team logo"
          className="w-4 h-4 rounded-full"
        />
        <p className="truncate">{result?.teams?.home?.name}</p>
      </div>
      <p className="hidden lg:block place-self-center bg-yellow-one px-3 rounded-full py-1">
        {(result?.goals?.home ?? 0) || (result.scores?.home?.total ?? 0)} :{" "}
        {(result?.goals?.away ?? 0) || (result?.scores?.away?.total ?? 0)}
      </p>
      <div className="lg:flex hidden items-center gap-2">
        <Image
          src={result?.teams?.away?.logo}
          alt="away team logo"
          width={30}
          height={30}
          className="w-4 h-4 rounded-full"
        />
        <p className="truncate">{result?.teams?.away?.name}</p>
      </div>
      <p
        className={cn("text-red-500 place-self-center", {
          "text-green-500": result?.fixture?.status?.short === "NS",
        })}
      >
        {result?.fixture?.status?.short}
      </p>
    </div>
  );
}
