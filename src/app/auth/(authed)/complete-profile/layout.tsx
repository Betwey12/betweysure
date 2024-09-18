"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function CompleteProfileLayout({
  children,
}: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();
  const profileComplete = user?.phone && user?.fullName;

  useEffect(() => {
    if (user && profileComplete) {
      router.push("/dashboard");
    }
  }, [user, profileComplete, router]);

  return <>{children}</>;
}
