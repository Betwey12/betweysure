"use client";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthedLinkProps {
  title: React.ReactNode | string;
  className?: string;
  href: string;
  pubicTitle?: string | React.ReactNode;
}

export default function AuthedLink({
  title,
  className,
  href,
  pubicTitle,
}: AuthedLinkProps) {
  const { user } = useAuth();

  return (
    <Link href={user ? href : "/auth/login"} className={cn(className)}>
      {pubicTitle ? pubicTitle : title}
    </Link>
  );
}
