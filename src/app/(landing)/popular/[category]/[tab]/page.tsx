import type { Metadata } from "next";
import LeaguePredictions from "@/components/leagues/league-predictions";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import SelectedGames from "@/components/ui/selected-games";
import {
  yesterday,
  today,
  tomorrow,
  euroChampionship,
  leagues,
  uefaSuperCup,
  copaAmerica,
  primeiraLiga,
  spainPrimeiraLiga,
  eredivisie,
  proLeague,
  laliga,
  bundesliga,
  italianSerieA,
  ligue1,
  uefaChampionsLeague,
  uefaEuropaLeague,
  englandPremierLeague,
} from "@/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LeaguesExplained from "@/components/leagues/leagues-explained";
import { leagueList, period, popularLeagueSites } from "@/assets/data/data";
import { capitalize } from "@/lib/utils";
import { leagueTabParams, popularLeaguesParams } from "@/assets/data/params";

type Props = {
  params: { category: TPopularTCategories; tab: TLeagueMetaTabs };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const category = params.category;
  const tab = params.tab;
  const categories: TLeagueMeta = {
    yesterday,
    today,
    tomorrow,
    "uefa-champions-league": uefaChampionsLeague,
    "euro-championship": euroChampionship,
    "uefa-super-cup": uefaSuperCup,
    "copa-america": copaAmerica,
    "spain-primera-liga": spainPrimeiraLiga,
    "primeira-liga": primeiraLiga,
    eredivisie: eredivisie,
    "pro-league": proLeague,
    "la-liga": laliga,
    bundesliga: bundesliga,
    "italian-serie-a": italianSerieA,
    "ligue-1": ligue1,
    "england-premier-league": englandPremierLeague,
    "uefa-europa-league": uefaEuropaLeague,
  };
  const meta = categories[category]?.[tab] ?? categories[category]?.["DEFAULT"];

  return {
    title: meta?.title || leagues.title,
  };
}

export default function PopularPage({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const category = (params["category"] || "") as TPopularTCategories;
  const tab = (params["tab"] || "") as TLeagueTabs;
  const { t, cta } = usePopularLeagues(category);
  const formattedCategory = category?.toUpperCase().replace(/-/g, "_");
  const isPeriod = !!category && period.includes(category);
  const popularLeagues = [...Object.values(leagueList)].flat();

  const popularLeague = popularLeagues?.find(
    (l) =>
      l.name.toLowerCase() ===
      decodeURIComponent(category)?.toLowerCase()?.replace(/-/g, " "),
  );

  const formatCategory = category?.toUpperCase()?.replace(/-/g, "_");

  const popularSite = popularLeagueSites[category];

  return (
    <>
      <OtherPagesHero />
      <LeaguePredictions
        isPeriod={isPeriod}
        category={category}
        tab={tab}
        periodTitle={popularSite?.title ?? t("DEFAULT_TITLE")}
        popularLeague={popularLeague}
        description={
          popularSite
            ? popularSite.description
            : t("DESCRIPTION", {
                league: capitalize(popularLeague?.name ?? ""),
              })
        }
        title={
          popularSite
            ? popularSite.title
            : t("TITLE", { league: capitalize(popularLeague?.name ?? "") })
        }
      />
      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-4 lg:gap-6">
        {!isPeriod && <LeaguesExplained category={category} tab={tab} />}

        <div className="dark:bg-blue-one border border-gray-two dark:border-0 rounded  p-4 lg:px-10 lg:py-20 dark:text-white flex flex-col lg:flex-row  gap-4 lg:items-center justify-between">
          <p className="max-w-lg">
            {popularSite
              ? popularSite.callToAction
              : t("CALL_TO_ACTION", { league: formattedCategory })}
          </p>
          <Link
            href={cta.link}
            className="text-center bg-cyan  py-3 px-4 rounded font-medium text-white"
          >
            {popularSite ? popularSite.ctaTitle : t("DEFAULT_CTA_TITLE")}
          </Link>
        </div>
      </div>
      <SelectedGames />
    </>
  );
}

function usePopularLeagues(category: string) {
  const t = useTranslations("LEAGUE_INFO");

  const seoCTALinkss: Record<
    string,
    {
      link: string;
    }
  > = {
    yesterday: {
      link: "/popular/today/predictions",
    },
    today: {
      link: "/popular/today/predictions",
    },
    tomorrow: {
      link: "/popular/tomorrow/predictions",
    },
  };

  return {
    t,
    cta: seoCTALinkss[category] || {
      link: "/dashboard",
    },
  };
}

export async function generateStaticParams() {
  const leagueParams = popularLeaguesParams.flatMap((league) =>
    leagueTabParams.map((tab) => ({
      category: league.toLowerCase().replace(/\s+/g, "-"),
      tab,
    })),
  );

  const periodParams = period.map((period) => ({
    category: period.toLowerCase(),
    tab: "predictions",
  }));

  return [...leagueParams, ...periodParams];
}
