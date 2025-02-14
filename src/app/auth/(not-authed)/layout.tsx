"use client";

import { HTTPRequest } from "@/api";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookie from "js-cookie";

interface NonAuthedLayoutProps {
  children: React.ReactNode;
}

export default function NonAuthedLayout({ children }: NonAuthedLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect_to");
  const action = searchParams.get("action");
  const forumUrl = process.env.NEXT_PUBLIC_FORUM_URL ?? "";

  const { data, isLoading: userLoading } = useQuery({
    queryKey: ["flarum-user"],
    queryFn: (): Promise<any> =>
      HTTPRequest.Get(`auth/flarum-user/${user?.uid}`),
    enabled: !!user?.uid,
  });

  const flarumUserToken = data?.flarumUserToken;

  console.log(user, userLoading);

  useEffect(() => {
    if (user && !userLoading) {
      if (
        redirectTo === "forum" ||
        (action === "register" && flarumUserToken)
      ) {
        Cookie.set("flarum_remember", flarumUserToken);

        router.replace(forumUrl);
        return;
      }

      if (user?.emailVerified) {
        router.push("/dashboard");
        return;
      }
      router.push("/auth/verify-email");
    }
  }, [
    action,
    flarumUserToken,
    forumUrl,
    redirectTo,
    router,
    user,
    userLoading,
  ]);

  return <>{children}</>;
}
