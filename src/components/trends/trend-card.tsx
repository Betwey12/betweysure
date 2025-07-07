import Image from "next/image";

interface TrendCardProps {
  logo: string;
  type: string;
  name: string;
  total: number;
  count: number;
  place?: string;
  gameType?: string;
  opponent?: {
    name?: string;
    logo: string;
  };
}

export default function TrendCard({
  logo,
  type,
  name,
  total,
  count,
  opponent,
  place,
  gameType,
}: TrendCardProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={40}
        height={40}
        src={logo}
        alt="logo"
        className="w-8 h-8 rounded-full"
      />
      {type === "wins" && (
        <p className="">
          <span className="font-bold">{name}</span> has won{" "}
          <span className="font-bold">{count}</span> {gameType} in their last{" "}
          <span className="font-bold">{total}</span> matches with{" "}
          <span>{opponent?.name}</span>
        </p>
      )}
      {type === "over" && (
        <p>
          There have been{" "}
          <span className="font-bold">Over {count - 1}.5 goals</span> in{" "}
          <span>{name}&apos;s</span> last{" "}
          <span className="font-bold">{total}</span> {gameType}
        </p>
      )}
      {type === "consecutiveWins" && (
        <p>
          <span>{name}</span> has won <span className="font-bold">{count}</span>{" "}
          consecutive games in their last{" "}
          <span className="font-bold">{total}</span> games
        </p>
      )}
      {type === "winStreak" && (
        <p>
          <span>{name}</span> currently has a winning streak of{" "}
          <span className="font-bold">{count}</span> in their last{" "}
          <span className="font-bold">{total}</span> games
        </p>
      )}
      {type === "cleanSheets" && (
        <p>
          <span>{name}</span> has kept{" "}
          <span className="font-bold">{count}</span> clean sheets in their last{" "}
          <span className="font-bold">{total}</span> games
        </p>
      )}
      {type === "placeWins" && (
        <p>
          <span>{name}</span> has won <span className="font-bold">{count}</span>{" "}
          of their last <span className="font-bold">{total}</span> {place} games
        </p>
      )}
    </div>
  );
}
