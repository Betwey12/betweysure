import Image from "next/image";
import ResultIcon from "../ui/result-icon";
import footballIcon from "@/assets/icons/solar-football.png";

interface FootballPredictionTableProps {
  leagueLogo: string;
  competitionName: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  homeGoals: number;
  awayGoals: number;
  tip: string;
  matchStatus: string;
}

export default function FootballPremiumTable({
  leagueLogo,
  competitionName,
  homeTeam,
  awayTeam,
  awayLogo,
  homeLogo,
  tip,
  homeGoals,
  awayGoals,
  matchStatus,
}: FootballPredictionTableProps) {
  return (
    <div className="grid grid-cols-[30px_minmax(100px,_1fr)_100px_30px] lg:grid-cols-5 text-xs py-2 px-4 lg:px-6 rounded-lg dark:text-white bg-white border-b border-gray-two dark:bg-blue-two dark:border-0">
      <div className="flex items-center gap-2 disabled:opacity-50 text-left">
        <Image
          width={30}
          height={30}
          src={leagueLogo}
          alt=""
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
        />
        <p className="truncate w-[70%] lg:block hidden">{competitionName}</p>
      </div>
      <div className="lg:hidden flex justify-center flex-col items-center gap-2 disabled:opacity-50">
        <p className="truncate w-[70%]">{homeTeam}</p>
        <p className="truncate w-[70%]">VS</p>
        <p className="truncate w-[70%]"> {awayTeam}</p>
      </div>

      <div className="hidden lg:flex items-center gap-2 disabled:opacity-50 text-left">
        <Image
          width={30}
          height={30}
          src={homeLogo ?? footballIcon}
          alt=""
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = footballIcon.src;
          }}
        />
        <p className="truncate w-[70%] text-left">{homeTeam}</p>
      </div>

      <div className="hidden lg:flex items-center gap-2 disabled:opacity-50">
        <Image
          width={30}
          height={30}
          src={awayLogo ?? footballIcon}
          alt=""
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = footballIcon.src;
          }}
        />
        <p className="truncate w-[70%] text-left">{awayTeam}</p>
      </div>
      <p className="text-center flex border border-cyan px-2 py-1 rounded flex-col justify-center items-center place-self-center lg:hidden">
        {tip}
      </p>

      <p className="text-center border border-cyan py-1 px-2 capitalize rounded place-self-center hidden lg:block">
        {tip}
      </p>

      <div className="flex items-center justify-center">
        <ResultIcon
          awayGoals={awayGoals}
          homeGoals={homeGoals}
          status={matchStatus}
          resultKey="null"
        />
      </div>
    </div>
  );
}
