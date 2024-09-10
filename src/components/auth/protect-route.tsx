"use client";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

interface ProtectRouteProps {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const { user } = useAuth();

  if (!user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
