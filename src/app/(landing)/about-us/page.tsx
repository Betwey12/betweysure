import { Metadata } from "next";
import OurExpertise from "@/components/about/our-expertise";
import WhatWeStrive from "@/components/about/what-we-strive";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { about } from "@/constants";

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
    </>
  );
}
