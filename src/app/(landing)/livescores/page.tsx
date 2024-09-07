import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import MatchResults from "@/components/livescores/match-results";

import { livescores } from "@/constants";

export const metadata: Metadata = {
  title: livescores.title,
  description: livescores.description,
};

export default function LivescoresPage() {
  return (
    <>
      <OtherPagesHero />
      <MatchResults />
    </>
  );
}
