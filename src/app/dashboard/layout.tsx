import DashboardWrapper from "@/components/dashboard/wrapper";
import { dashboard } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: dashboard.title,
  description: dashboard.description,
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
