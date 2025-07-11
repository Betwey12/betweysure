import type { Metadata } from "next";

import WhatsIncluded from "@/components/pricing/whats-included";
import PricingPlans from "@/components/pricing/pricing-plan";
import PricingHeader from "@/components/pricing/pricing-header";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { pricing } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: pricing.title,
  description: pricing.description,
  keywords: pricing.keywords,
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <OtherPagesHero />
      <PricingHeader />
      <PricingPlans />
      <WhatsIncluded />
    </>
  );
}
