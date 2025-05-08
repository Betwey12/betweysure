"use client";
import { paramsSeoText } from "@/constants";
import PurifiedHtml from "../shared/purified-html";
import ConvertCode from "../ui/convert-code";
import OtherPagesHero from "../shared/other-pages-hero";
import PageHeader from "../shared/page-header";

interface IOtherToolsSiteProps {
  page: TParams;
  title: string;
  description: string;
}

export default function OtherToolsSite({
  page,
  title,
  description,
}: IOtherToolsSiteProps) {
  return (
    <>
      <OtherPagesHero />

      <PageHeader title={title} description={description} />

      <div className="py-10 mt-8 mb-10 px-4 lg:px-20 md:px-10 flex flex-col items-center">
        <div className="flex flex-col items-center w-full max-w-2xl">
          <ConvertCode />
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-4 lg:gap-6">
        <PurifiedHtml html={paramsSeoText[page] ?? ""} />
      </div>
    </>
  );
}
