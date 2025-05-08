"use client";

import UnsubscribeClient from "@/components/home/unsubscribe-client";
import { useSearchParams } from "next/navigation";

export default function UnsubscribePage() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token") ?? "";

  return (
    <div className="min-h-screen bg-white/50 text-blue-two w-full flex items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32 dark:bg-blue-two dark:text-white">
      <UnsubscribeClient token={token} />
    </div>
  );
}
