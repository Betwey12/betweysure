"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function AuthedLayout({ children }: NonAuthedLayoutProps) {
  const { user, isLoading } = useAuth();

  if (!user && !isLoading) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
