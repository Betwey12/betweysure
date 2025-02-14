"use client";

import { Suspense } from "react";
import { DashboardSpinner } from "@/components/ui/spinner";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function NotAuthedLayout({ children }: NonAuthedLayoutProps) {
  return <Suspense fallback={<DashboardSpinner />}>{children}</Suspense>;
}
