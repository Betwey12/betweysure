import { Metadata } from "next";
import AuthNavBar from "@/components/auth/auth-navbar";
import { auth } from "@/constants";
import ProtectRoute from "@/components/auth/protect-route";

export const metadata: Metadata = {
  title: auth.title,
  description: auth.description,
};

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <main className="flex flex-col ">
        <AuthNavBar />
        <ProtectRoute>{children}</ProtectRoute>
      </main>
    </>
  );
}
