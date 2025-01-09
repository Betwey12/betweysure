import { redirect } from "next/navigation";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mode = searchParams.mode as string;
  const token = searchParams.oobCode as string;

  const modes: Record<string, string> = {
    resetPassword: `/auth/reset-password?token=${token}`,
    verifyEmail: `/auth/verify-email?token=${token}`,
  };
  console.log(token, "token");

  if (!mode || !token) {
    return redirect("/auth/login");
  }
  return redirect(modes[mode] ?? "/auth/login");
}
