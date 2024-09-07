import { Metadata } from "next";

import OtherPagesHero from "@/components/shared/other-pages-hero";
import { terms } from "@/constants";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
};

export default function TACPage() {
  return (
    <>
      <OtherPagesHero />
      <div className="px-4 md:px-10 xl:px-20 my-10 lg:my-20 dark:text-white">
        <h1 className="lg:text-2xl text-xl">Terms and conditions</h1>
        <p className="mt-4">Last updated: 23/10/2023</p>
        <p className="mt-4">
          We are not responsible for any loss of data or any other loss that may
          occur as a result of using our services.
        </p>
      </div>
    </>
  );
}
