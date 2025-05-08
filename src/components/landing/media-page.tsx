import OtherPagesHero from "../shared/other-pages-hero";
import PageHeader from "../shared/page-header";
import MatchResults from "../livescores/match-results";
import PurifiedHtml from "../shared/purified-html";
import { paramsSeoText } from "@/constants";

interface IMediaPageProps {
  page: TParams;
  title: string;
  description: string;
}

export default function MediaPage({
  page,
  title,
  description,
}: IMediaPageProps) {
  return (
    <>
      <OtherPagesHero />

      <PageHeader title={title} description={description} />

      <MatchResults />

      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-4 py-10 lg:gapy-20">
        <PurifiedHtml html={paramsSeoText[page] ?? ""} />
      </div>
    </>
  );
}
