"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function VerifyEmailLayout({ children }: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();
  const emailVerified = user?.emailVerified;

  useEffect(() => {
    if (user && emailVerified) {
      router.push("/dashboard?tour=true");
    }
  }, [user, emailVerified, router]);

  return <>{children}</>;
}
