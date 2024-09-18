"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function AuthedLayout({ children }: NonAuthedLayoutProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Optional: Show a loading state while checking authentication
  }

  return <>{children}</>;
}
