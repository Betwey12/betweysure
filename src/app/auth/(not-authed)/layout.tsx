"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function NonAuthedLayout({ children }: NonAuthedLayoutProps) {
  const { user } = useAuth();

  if (user && user?.emailVerified) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
