"use client";
import { useAuth } from "@/hooks/useAuth";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { auth } from "@/firebase/config";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
import Link from "next/link";
import { EmailSentIcon } from "../icons";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import LoadingButton from "../ui/loading-button";

interface VerifyEmailClientProps {
  token: string;
}

export default function VerifyEmailClient({ token }: VerifyEmailClientProps) {
  const t = useTranslations("AUTH");
  const { user, setUser, isLoading } = useAuth();
  const { data, isPending: verifyLoading } = useQuery({
    queryKey: ["verify-email"],
    queryFn: () =>
      HTTPRequest.Get(
        `auth/verify-email?token=${token}&fullName=${user?.fullName}&email=${user?.email}`,
      ),
    enabled: !!(token || user),
  });

  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: () => HTTPRequest.Post("auth/resend-email", {}),
  });

  async function handleResendEmail() {
    try {
      const user = auth.currentUser;
      if (!user?.email) {
        toast.error("Email not found");
        return;
      }
      const res = await mutateAsync();
      const message = res?.message;
      if (isError || !res?.success) {
        return toast.error(message);
      }

      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  }

  function handleGoToDashboard() {
    if (!user) return;
    setUser({
      ...user,
      emailVerified: data?.success,
    });
  }

  return (
    <div className="flex flex-col max-w-xl border border-gray-two items-center justify-center w-full gap-2 bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:border-0 dark:bg-blue-one">
      {isLoading || verifyLoading ? (
        <FaSpinner className="animate-spin" />
      ) : data?.success ? (
        <div className="flex items-center justify-center flex-col gap-3">
          <FaCheckCircle className="text-6xl text-green-600 bg-white rounded-full" />

          <p className="text-2xl max-w-sm text-center">{t("EMAIL_VERIFIED")}</p>
          <Link
            className="py-3 text-center text-white justify-center bg-cyan px-4 rounded"
            href={!user ? "#" : "/dashboard?tour=true"}
            onClick={handleGoToDashboard}
          >
            {t("GO_TO_DASHBOARD")}
          </Link>
        </div>
      ) : (
        <>
          <EmailSentIcon className="text-9xl" />
          <h1 className="text-2xl lg:text-3xl">{t("WELCOME")}</h1>
          <p className="text-center">{t("VERIFY_EMAIL_MESSAGE")}</p>

          <LoadingButton
            onClick={handleResendEmail}
            isPending={isPending}
            name={t("RESEND_EMAIL")}
            className="py-3 mt-4"
          />
        </>
      )}
    </div>
  );
}
