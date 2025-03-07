import { useTranslations } from "next-intl";
import OtherPagesHero from "../shared/other-pages-hero";
import PageHeader from "../shared/page-header";
import MatchResults from "../livescores/match-results";

export default function MediaPage() {
  const t = useTranslations("LIVESCORES");

  return (
    <>
      <OtherPagesHero />

      <PageHeader title={t("TITLE")} description={t("DESCRIPTION")} />

      <MatchResults />
    </>
  );
}
