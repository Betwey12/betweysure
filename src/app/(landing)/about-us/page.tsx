import { Metadata } from "next";
import OurExpertise from "@/components/about/our-expertise";
import WhatWeStrive from "@/components/about/what-we-strive";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { about } from "@/constants";
import UltimateBettingGuide from "@/components/about/ultimate-betting-guide";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
};

export default function AboutUsPage() {
  return (
    <>
      <OtherPagesHero />
      <OurExpertise />
      <WhatWeStrive />
      <UltimateBettingGuide />
    </>
  );
}
