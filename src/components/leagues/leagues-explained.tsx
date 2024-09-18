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
  };

  return { t, seoTexts };
}
