import { Metadata } from "next";

import Bundles from "@/components/buy-plan/bundles";
import { buyPlan } from "@/constants";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: buyPlan.title,
  description: buyPlan.description,
  alternates: {
    canonical: `${SITE_URL}/dashboard/buy-plan`,
  },
};

export default function BundlesPage() {
  return <Bundles />;
}
