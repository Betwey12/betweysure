"use client";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuthedLinkProps {
  name: string;
  className?: string;
  href: string;
}

export default function AuthedLink({ name, className, href }: AuthedLinkProps) {
  const { user } = useAuth();

  return (
    <Link href={user ? href : "/auth/login"} className={cn(className)}>
      {name}
    </Link>
  );
}
