import DashboardWrapper from "@/components/dashboard/wrapper";
import Spinner from "@/components/ui/spinner";
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
    <Suspense
      fallback={
        <div className="bg-gray-light min-h-screen flex flex-col justify-center items-center h-full dark:bg-blue-one dark:text-white">
          <Spinner />
        </div>
      }
    >
      <DashboardWrapper>{children}</DashboardWrapper>;
    </Suspense>
  );
}
