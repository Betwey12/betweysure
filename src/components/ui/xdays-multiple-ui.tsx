import { formatCurrency, xDay } from "@/lib/utils";
import oneXBet from "../../assets/images/1xbet.webp";
import oneXBetLight from "../../assets/images/1xbet-light.webp";
import popUpImage from "../../assets/images/1xbet.gif";
import { outcomes } from "@/assets/data/data";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import usePopUp from "@/hooks/usePopUp";
import bet9ja from "@/assets/images/bet9ja.png";
import sportybet from "@/assets/images/sportybet.png";
import sportybetLight from "@/assets/images/sportybet-red.png";
import sportsbet from "@/assets/images/sportsbet-dark.png";
import sportsbetLight from "@/assets/images/sportsbet-light.png";
import kanuBanner from "@/assets/images/kanu-banner.webp";

const logos: Record<string, any> = {
  "1xbetDark": oneXBet,
  "1xbetLight": oneXBetLight,
  bet9jaDark: bet9ja,
  bet9jaLight: bet9ja,
  sportybetDark: sportybet,
  sportybetLight: sportybetLight,
  sportsbetDark: sportsbet,
  sportsbetLight: sportsbetLight,
};

interface XdaysMultipleUiProps {
  topPredictions: {
    id: number;
    home: string;
    away: string;
    prediction: keyof Prediction;
    odds: number;
  }[];
  returns: number;
  partnerLink: string;
  investment: number;
  bookie?: string;
}

export default function XdaysMultipleUi({
  topPredictions,
  returns,
  partnerLink,
  investment = 300,
  bookie = "sportsbet",
}: XdaysMultipleUiProps) {
  const { resolvedTheme } = useTheme();
  const { setPopUp } = usePopUp();

  const isDark = resolvedTheme === "dark";

  return topPredictions?.length ? (
    <div className="flex flex-col shadow border border-gray-three rounded-lg lg:rounded-[20px] py-4 px-2 justify-between lg:pt-8 w-full min-h-[400px] gap-4 dark:bg-blue-one dark:text-white dark:border-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center flex-col justify-center">
          <Image
            width={70}
            height={21}
            src={logos[`${bookie}${isDark ? "Dark" : "Light"}`]}
            alt="1xbet"
            className="w-[70px] h-[21px]"
            loading="lazy"
          />

          <p className="uppercase">{xDay}&apos;s Multiple</p>
        </div>
        <div className="flex flex-col gap-1">
          {topPredictions?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          target="_blank"
          href={partnerLink}
          className="font-semibold bg-cyan py-3 rounded flex items-center justify-center text-white"
        >
          {investment} returns {formatCurrency(returns, "NGN")}
        </Link>
        <p className="self-end text-yellow-500">18+</p>
      </div>
    </div>
  ) : (
    <Link
      href="https://aff.partners.io/visit/?bta=45585&nci=7670"
      target="_blank"
      onClick={() => setPopUp(null)}
    >
      <Image
        width={540}
        height={400}
        className="w-[360px] lg:w-[540px]"
        alt="kanu-banner"
        src={kanuBanner}
        onError={(e) => {
          e.currentTarget.src = popUpImage.src;
        }}
        loading="lazy"
      />
    </Link>
  );
}

interface GameCardProps {
  game: {
    id: number;
    home: string;
    away: string;
    prediction: string;
    odds: number;
  };
}

function GameCard({ game }: GameCardProps) {
  return (
    <div className="flex items-center border-b border-gray-two justify-between p-2 dark:border-blue-two">
      <div className="">
        <p>
          {game.home} VS {game.away}
        </p>
        <p className="text-green-500">{outcomes[game.prediction]}</p>
      </div>
      <p className="text-lg">{game.odds}</p>
    </div>
  );
}
