import { Metadata } from "next";
import AuthNavBar from "@/components/auth/auth-navbar";
import { auth } from "@/constants";
import { Suspense } from "react";
import { DashboardSpinner } from "@/components/ui/spinner";

export const metadata: Metadata = {
  title: auth.title,
  description: auth.description,
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Suspense fallback={<DashboardSpinner />}>
      <main className="flex flex-col ">
        <AuthNavBar />
        {children}
      </main>
    </Suspense>
  );
}
