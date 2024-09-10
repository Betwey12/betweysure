import { redirect } from "next/navigation";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mode = searchParams.mode as string;

  const modes: Record<string, string> = {
    resetPassword: "/auth/reset-password",
    verifyEmail: "/auth/verify-email",
  };

  if (mode) {
    redirect(modes[mode] ?? "/auth/login");
  }

  return <></>;
}
