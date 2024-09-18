import { useTranslations } from "next-intl";
import KeywordListItem from "../ui/keyword-list-item";

interface LeaguesExplainedProps {
  category: string;
}

export default function LeaguesExplained({ category }: LeaguesExplainedProps) {
  const { seoTexts } = useLeaguesExplained();
  const seoText = seoTexts[category] || [];
  return (
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
    "euro-championship": [
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
    "uefa-champions-league": [
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
    "england-premier-league": [
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
    "uefa-europa-league": [
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
    "copa-america": [
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
    eredivisie: [
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
    "primeira-liga": [
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
    "pro-league": [
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
    "la-liga": [
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
    bundesliga: [
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
    "italian-serie-a": [
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
    "ligue-1": [
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
    "spain-primera-liga": [
      {
        title: t("SPAIN_PRIMERA_LIGA_TITLE_P1"),
        description: t("SPAIN_PRIMERA_LIGA_DESC_P1"),
      },
      {
        title: t("SPAIN_PRIMERA_LIGA_TITLE_P2"),
        description: t("SPAIN_PRIMERA_LIGA_DESC_P2"),
      },
      {
        title: t("SPAIN_PRIMERA_LIGA_TITLE_P3"),
        description: t("SPAIN_PRIMERA_LIGA_DESC_P3"),
      },
      {
        title: t("SPAIN_PRIMERA_LIGA_TITLE_P4"),
        description: t("SPAIN_PRIMERA_LIGA_DESC_P4"),
      },
    ],
    "uefa-super-cup": [
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
