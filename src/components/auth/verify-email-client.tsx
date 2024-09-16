"use client";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { auth } from "@/firebase/config";
import { applyActionCode, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";
import Link from "next/link";
import { EmailSentIcon } from "../icons";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function VerifyEmailClient() {
  const t = useTranslations("AUTH");
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(false);
  const { user, setUser, isLoading } = useAuth();
  const token = searchParams.get("oobCode");

  useEffect(() => {
    if (!token || !user) {
      return;
    }
    (async () => {
      setIsVerifying(true);
      await applyActionCode(auth, token)
        .then(() => {
          toast.success("Email verified successfully");
          setUser({
            ...user,
            emailVerified: true,
          });
        })
        .catch(() => {
          setIsVerifying(false);
        });
    })();
  }, [token, user, isLoading, setUser]);

  async function handleResendEmail() {
    const user = auth.currentUser;
    if (!user?.email) {
      toast.error("Email not found");
      return;
    }
    await sendEmailVerification(user).catch((error) => {
      const message = error.message
        .replace(/\W|-/g, " ")
        .replace(/\b(?:Firebase|auth)\b/g, "")
        .trim();

      toast.error(message || "An error occurred");
    });
    toast.success("Email sent successfully");
  }

  return (
    <div className="flex flex-col max-w-xl border border-gray-two items-center justify-center w-full gap-2 bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:border-0 dark:bg-blue-one">
      {isLoading || isVerifying ? (
        <FaSpinner className="animate-spin" />
      ) : user?.emailVerified ? (
        <div className="flex items-center justify-center flex-col gap-3">
          <FaCheckCircle className="text-6xl text-green-600 bg-white rounded-full" />

          <p className="text-2xl max-w-sm text-center">{t("EMAIL_VERIFIED")}</p>
          <Link
            className="py-3 text-center text-white justify-center bg-cyan px-4 rounded"
            href="/dashboard?tour=true"
          >
            {t("GO_TO_DASHBOARD")}
          </Link>
        </div>
      ) : (
        <>
          <EmailSentIcon className="text-9xl" />
          <h1 className="text-2xl lg:text-3xl">{t("WELCOME")}</h1>
          <p className="text-center">{t("VERIFY_EMAIL_MESSAGE")}</p>

          <Button
            type="button"
            className="py-3 mt-6 text-center justify-center"
            onClick={handleResendEmail}
          >
            {t("RESEND_EMAIL")}
          </Button>
        </>
      )}
    </div>
  );
}
