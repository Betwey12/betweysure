import type { Metadata } from "next";

import WhatsIncluded from "@/components/pricing/whats-included";
import PricingPlans from "@/components/pricing/pricing-plan";
import PricingHeader from "@/components/pricing/pricing-header";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { pricing } from "@/constants";

export const metadata: Metadata = {
  title: pricing.title,
  description: pricing.description,
  keywords: pricing.keywords,
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
