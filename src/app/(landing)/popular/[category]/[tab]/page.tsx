import type { Metadata } from "next";
import LeaguePredictions from "@/components/leagues/league-predictions";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import SelectedGames from "@/components/ui/selected-games";
import { yesterday, today, tomorrow } from "@/constants";
import { useTranslations } from "next-intl";
import KeywordListItem from "@/components/ui/keyword-list-item";
import Link from "next/link";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const category = params.category;
  const categories: Record<
    string,
    {
      title: string;
      description: string;
      keywords?: string;
    }
  > = {
    yesterday,
    today,
    tomorrow,
  };
  const meta = categories[category];

  return {
    title: meta.title,
  };
}

export default function PopularPage({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const category = (params["category"] || "") as string;
  const tab = (params["tab"] || "") as string;
  const { t, cta } = usePopularLeagues(category);

  return (
    <>
      <OtherPagesHero />
      <LeaguePredictions category={category} tab={tab} />
      <div className="px-4 md:px-10 lg:px-20">
        <div className="dark:bg-blue-one  rounded p-4 dark:text-white flex flex-col lg:flex-row lg:py-8 lg:px-6 gap-4 lg:items-center justify-between">
          <p className="max-w-lg">
            {t(`${category.toUpperCase()}_CALL_TO_ACTION` as any)}
          </p>
          <Link
            href={cta.link}
            className="text-center bg-cyan p-4 rounded font-medium"
          >
            {cta.text}
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
      text: string;
      link: string;
    }
  > = {
    yesterday: {
      text: "Today's Football Predictions",
      link: "/popular/today/predictions",
    },
    today: {
      text: "Today's Football Predictions",
      link: "/popular/today/predictions",
    },
    tomorrow: {
      text: "Tomorrow's Football Predictions",
      link: "/popular/tomorrow/predictions",
    },
  };

  return {
    t,
    cta: seoCTALinkss[category] || "",
  };
}
