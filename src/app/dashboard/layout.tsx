import DashboardWrapper from "@/components/dashboard/wrapper";
import Spinner, { DashboardSpinner } from "@/components/ui/spinner";
import { dashboard } from "@/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: dashboard.title,
  description: dashboard.description,
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Suspense fallback={<DashboardSpinner />}>
      <DashboardWrapper>{children}</DashboardWrapper>;
    </Suspense>
  );
}
