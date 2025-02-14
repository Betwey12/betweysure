"use client";

import { Suspense } from "react";
import { DashboardSpinner } from "@/components/ui/spinner";
import NotAuthedWrapper from "@/components/auth/not-auth-wrapper";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function NotAuthedLayout({ children }: NonAuthedLayoutProps) {
  return (
    <Suspense fallback={<DashboardSpinner />}>
      <NotAuthedWrapper>{children}</NotAuthedWrapper>
    </Suspense>
  );
}
