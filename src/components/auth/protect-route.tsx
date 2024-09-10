"use client";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface ProtectRouteProps {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const { user } = useAuth();
  const profileComplete = user?.phone && user?.fullName;

  if (user && !profileComplete) {
    redirect("/auth/complete-profile");
  }

  if (user && profileComplete) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
