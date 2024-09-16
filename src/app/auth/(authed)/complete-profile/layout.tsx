"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function CompleteProfileLayout({
  children,
}: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const profileComplete = user?.phone && user?.fullName;

  if (user && profileComplete) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
