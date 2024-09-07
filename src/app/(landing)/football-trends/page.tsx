import OtherPagesHero from "@/components/shared/other-pages-hero";
import Trending from "@/components/trends/trending";
import { trends } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: trends.title,
  description: trends.description,
};

export default function TrendsPage() {
  return (
    <>
      <OtherPagesHero />
      <Trending />
    </>
  );
}
