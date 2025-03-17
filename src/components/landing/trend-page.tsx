import OtherPagesHero from "@/components/shared/other-pages-hero";
import PageHeader from "@/components/shared/page-header";
import Trending from "@/components/trends/trending";
import PurifiedHtml from "../shared/purified-html";
import { paramsSeoText } from "@/constants";

interface ITrendsParamsPageProps {
  page: TParams;
  title: string;
  description: string;
}

export default function TrendsParamsPage({
  page,
  title,
  description,
}: ITrendsParamsPageProps) {
  return (
    <>
      <OtherPagesHero />
      <PageHeader title={title} description={description} />

      <Trending />

      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-4 lg:gap-6">
        <PurifiedHtml html={paramsSeoText[page] ?? ""} />
      </div>
    </>
  );
}
