import { useTranslations } from "next-intl";
import KeywordListItem from "../ui/keyword-list-item";
import PurifiedHtml from "../shared/purified-html";
import { specificLeagueSeoText } from "@/constants";

interface LeaguesExplainedProps {
  category: string;
  tab: TLeagueTabs;
}

export default function LeaguesExplained({
  category,
  tab,
}: LeaguesExplainedProps) {
  const { seoTexts } = useLeaguesExplained();
  const seoText = seoTexts[category] || [];

  const tabSpecificSeoText = specificLeagueSeoText[category]?.[tab];
  return tabSpecificSeoText ? (
    <PurifiedHtml html={tabSpecificSeoText} />
  ) : (
    seoText.length > 0 && (
      <div className="dark:bg-blue-one  rounded p-4 dark:text-white flex flex-col lg:flex-row lg:py-8 lg:px-6 gap-4 lg:items-center justify-between">
        <ul className="flex flex-col gap-4">
          {seoText.map((text, index) => (
            <KeywordListItem
              key={index}
              keyword={text.title}
              value={text.description}
            />
          ))}
        </ul>
      </div>
    )
  );
}

function useLeaguesExplained() {
  const t = useTranslations("LEAGUE_EXPLAINED");
  const seoTexts: Record<
    string,
    {
      title: string;
      description: string;
    }[]
  > = {
    "euro-championship-4": [
      {
        title: t("EURO_CHAMPIONSHIP_TITLE_P1"),
        description: t("EURO_CHAMPIONSHIP_DESC_P1"),
      },
      {
        title: t("EURO_CHAMPIONSHIP_TITLE_P2"),
        description: t("EURO_CHAMPIONSHIP_DESC_P2"),
      },
      {
        title: t("EURO_CHAMPIONSHIP_TITLE_P3"),
        description: t("EURO_CHAMPIONSHIP_DESC_P3"),
      },
      {
        title: t("EURO_CHAMPIONSHIP_TITLE_P4"),
        description: t("EURO_CHAMPIONSHIP_DESC_P4"),
      },
    ],
    "uefa-champions-league-2": [
      {
        title: t("UEFA_CHAMPIONS_LEAGUE_TITLE_P1"),
        description: t("UEFA_CHAMPIONS_LEAGUE_DESC_P1"),
      },
      {
        title: t("UEFA_CHAMPIONS_LEAGUE_TITLE_P2"),
        description: t("UEFA_CHAMPIONS_LEAGUE_DESC_P2"),
      },
      {
        title: t("UEFA_CHAMPIONS_LEAGUE_TITLE_P3"),
        description: t("UEFA_CHAMPIONS_LEAGUE_DESC_P3"),
      },
      {
        title: t("UEFA_CHAMPIONS_LEAGUE_TITLE_P4"),
        description: t("UEFA_CHAMPIONS_LEAGUE_DESC_P4"),
      },
    ],
    "england-premier-league-39": [
      {
        title: t("ENGLAND_PREMIER_LEAGUE_TITLE_P1"),
        description: t("ENGLAND_PREMIER_LEAGUE_DESC_P1"),
      },
      {
        title: t("ENGLAND_PREMIER_LEAGUE_TITLE_P2"),
        description: t("ENGLAND_PREMIER_LEAGUE_DESC_P2"),
      },
      {
        title: t("ENGLAND_PREMIER_LEAGUE_TITLE_P3"),
        description: t("ENGLAND_PREMIER_LEAGUE_DESC_P3"),
      },
      {
        title: t("ENGLAND_PREMIER_LEAGUE_TITLE_P4"),
        description: t("ENGLAND_PREMIER_LEAGUE_DESC_P4"),
      },
    ],
    "uefa-europa-league-3": [
      {
        title: t("UEFA_EUROPA_LEAGUE_TITLE_P1"),
        description: t("UEFA_EUROPA_LEAGUE_DESC_P1"),
      },
      {
        title: t("UEFA_EUROPA_LEAGUE_TITLE_P2"),
        description: t("UEFA_EUROPA_LEAGUE_DESC_P2"),
      },
      {
        title: t("UEFA_EUROPA_LEAGUE_TITLE_P3"),
        description: t("UEFA_EUROPA_LEAGUE_DESC_P3"),
      },
      {
        title: t("UEFA_EUROPA_LEAGUE_TITLE_P4"),
        description: t("UEFA_EUROPA_LEAGUE_DESC_P4"),
      },
    ],
    "copa-america-9": [
      {
        title: t("COPA_AMERICA_TITLE_P1"),
        description: t("COPA_AMERICA_DESC_P1"),
      },
      {
        title: t("COPA_AMERICA_TITLE_P2"),
        description: t("COPA_AMERICA_DESC_P2"),
      },
      {
        title: t("COPA_AMERICA_TITLE_P3"),
        description: t("COPA_AMERICA_DESC_P3"),
      },
      {
        title: t("COPA_AMERICA_TITLE_P4"),
        description: t("COPA_AMERICA_DESC_P4"),
      },
    ],
    "eredivisie-88": [
      {
        title: t("EREDIVISIE_TITLE_P1"),
        description: t("EREDIVISIE_DESC_P1"),
      },
      {
        title: t("EREDIVISIE_TITLE_P2"),
        description: t("EREDIVISIE_DESC_P2"),
      },
      {
        title: t("EREDIVISIE_TITLE_P3"),
        description: t("EREDIVISIE_DESC_P3"),
      },
      {
        title: t("EREDIVISIE_TITLE_P4"),
        description: t("EREDIVISIE_DESC_P4"),
      },
    ],
    "primeira-liga-94": [
      {
        title: t("PRIMEIRA_LIGA_TITLE_P1"),
        description: t("PRIMEIRA_LIGA_DESC_P1"),
      },
      {
        title: t("PRIMEIRA_LIGA_TITLE_P2"),
        description: t("PRIMEIRA_LIGA_DESC_P2"),
      },
      {
        title: t("PRIMEIRA_LIGA_TITLE_P3"),
        description: t("PRIMEIRA_LIGA_DESC_P3"),
      },
      {
        title: t("PRIMEIRA_LIGA_TITLE_P4"),
        description: t("PRIMEIRA_LIGA_DESC_P4"),
      },
    ],
    "pro-league-591": [
      {
        title: t("PRO_LEAGUE_TITLE_P1"),
        description: t("PRO_LEAGUE_DESC_P1"),
      },
      {
        title: t("PRO_LEAGUE_TITLE_P2"),
        description: t("PRO_LEAGUE_DESC_P2"),
      },
      {
        title: t("PRO_LEAGUE_TITLE_P3"),
        description: t("PRO_LEAGUE_DESC_P3"),
      },
      {
        title: t("PRO_LEAGUE_TITLE_P4"),
        description: t("PRO_LEAGUE_DESC_P4"),
      },
    ],
    "la-liga-140": [
      {
        title: t("LA_LIGA_TITLE_P1"),
        description: t("LA_LIGA_DESC_P1"),
      },
      {
        title: t("LA_LIGA_TITLE_P2"),
        description: t("LA_LIGA_DESC_P2"),
      },
      {
        title: t("LA_LIGA_TITLE_P3"),
        description: t("LA_LIGA_DESC_P3"),
      },
      {
        title: t("LA_LIGA_TITLE_P4"),
        description: t("LA_LIGA_DESC_P4"),
      },
    ],
    "bundesliga-78": [
      {
        title: t("BUNDESLIGA_TITLE_P1"),
        description: t("BUNDESLIGA_DESC_P1"),
      },
      {
        title: t("BUNDESLIGA_TITLE_P2"),
        description: t("BUNDESLIGA_DESC_P2"),
      },
      {
        title: t("BUNDESLIGA_TITLE_P3"),
        description: t("BUNDESLIGA_DESC_P3"),
      },
      {
        title: t("BUNDESLIGA_TITLE_P4"),
        description: t("BUNDESLIGA_DESC_P4"),
      },
    ],
    "italian-serie-a-135": [
      {
        title: t("ITALIAN_SERIE_A_TITLE_P1"),
        description: t("ITALIAN_SERIE_A_DESC_P1"),
      },
      {
        title: t("ITALIAN_SERIE_A_TITLE_P2"),
        description: t("ITALIAN_SERIE_A_DESC_P2"),
      },
      {
        title: t("ITALIAN_SERIE_A_TITLE_P3"),
        description: t("ITALIAN_SERIE_A_DESC_P3"),
      },
      {
        title: t("ITALIAN_SERIE_A_TITLE_P4"),
        description: t("ITALIAN_SERIE_A_DESC_P4"),
      },
    ],
    "ligue-1-61": [
      {
        title: t("LIGUE_1_TITLE_P1"),
        description: t("LIGUE_1_DESC_P1"),
      },
      {
        title: t("LIGUE_1_TITLE_P2"),
        description: t("LIGUE_1_DESC_P2"),
      },
      {
        title: t("LIGUE_1_TITLE_P3"),
        description: t("LIGUE_1_DESC_P3"),
      },
      {
        title: t("LIGUE_1_TITLE_P4"),
        description: t("LIGUE_1_DESC_P4"),
      },
    ],
    "uefa-super-cup-531": [
      {
        title: t("UEFA_SUPER_CUP_TITLE_P1"),
        description: t("UEFA_SUPER_CUP_DESC_P1"),
      },
      {
        title: t("UEFA_SUPER_CUP_TITLE_P2"),
        description: t("UEFA_SUPER_CUP_DESC_P2"),
      },
      {
        title: t("UEFA_SUPER_CUP_TITLE_P3"),
        description: t("UEFA_SUPER_CUP_DESC_P3"),
      },
      {
        title: t("UEFA_SUPER_CUP_TITLE_P4"),
        description: t("UEFA_SUPER_CUP_DESC_P4"),
      },
    ],
  };

  return { t, seoTexts };
}
