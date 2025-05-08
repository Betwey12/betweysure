"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("oobCode") ?? "";
  const mode = searchParams.get("mode") ?? "";

  const modes: Record<string, string> = {
    resetPassword: `/auth/reset-password?token=${token}`,
    verifyEmail: `/auth/verify-email?token=${token}`,
  };

  if (!mode || !token) {
    return router.push("/auth/login");
  }
  return router.push(modes[mode] ?? "/auth/login");
}
