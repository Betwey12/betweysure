"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function NonAuthedLayout({ children }: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user?.emailVerified) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return <>{children}</>;
}
