import { capitalize, getDate } from "@/lib/utils";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface LeagueInfoProps {
  category: string;
  popularLeague?: {
    name: string;
    logo: string;
  };
}

export default function LeagueInfo({
  category,
  popularLeague,
}: LeagueInfoProps) {
  const t = useTranslations("LEAGUE_INFO");
  console.log(category, "category");

  const dates: Record<string, string> = {
    today: getDate("today"),
    tomorrow: getDate("tomorrow"),
    yesterday: getDate("yesterday"),
  };
  const date = dayjs(dates[`${category}`] ?? new Date()).format(
    "dddd, MMMM DD, YYYY"
  );

  const titles: Record<string, string> = {
    today: `Today's Football Predictions - ${capitalize(date)}`,
    tomorrow: `Tomorrow's Football Predictions - ${capitalize(date)}`,
    yesterday: `Yesterday's Football Predictions - ${capitalize(date)}`,
    undefined: "Football Predictions",
  };

  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-6 text-center font-bold flex items-center gap-4 justify-center">
        {titles[`${category}`] ? (
          <h1 className="text-xl lg:text-2xl">{titles[`${category}`]}</h1>
        ) : (
          popularLeague && (
            <>
              <Image
                width={40}
                height={40}
                src={popularLeague?.logo}
                alt="logo"
                className="w-10 h-10 bg-white rounded-full object-contain"
              />
              <h1 className="text-xl lg:text-2xl">
                {t("TITLE", { league: capitalize(popularLeague?.name) })}
              </h1>
            </>
          )
        )}
      </div>
      <p className="text-center lg:max-w-[600px]">
        {t("DESCRIPTION", {
          league: popularLeague?.name
            ? popularLeague?.name
            : `each league in ${category}'s games`,
        })}
      </p>
    </div>
  );
}
