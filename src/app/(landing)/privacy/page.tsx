import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import { privacy } from "@/constants";
import PurifiedHtml from "@/components/shared/purified-html";
import privacyPolicy from "@/assets/data/privacy-policy";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
};

export default function PrivacyPage() {
  return (
    <>
      <OtherPagesHero />
      <div className="flex flex-col justify-center items-center my-10 lg:my-20">
        <div className="max-w-3xl bg-white p-8 dark:bg-blue-one rounded dark:border-0 border-gray-three border ">
          <PurifiedHtml html={privacyPolicy} />
        </div>
      </div>
    </>
  );
}
