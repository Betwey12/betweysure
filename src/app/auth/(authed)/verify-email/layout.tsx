"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function VerifyEmailLayout({ children }: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const emailVerified = user?.emailVerified;

  if (user && emailVerified) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
