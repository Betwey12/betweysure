import { Metadata } from "next";

import Bundles from "@/components/buy-plan/bundles";
import { buyPlan } from "@/constants";

export const metadata: Metadata = {
  title: buyPlan.title,
  description: buyPlan.description,
};

export default function BundlesPage() {
  return <Bundles />;
}
