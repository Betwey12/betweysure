"use client";
import * as yup from "yup";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type ResetPasswordForm = yup.InferType<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const t = useTranslations("AUTH");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  return (
    <div className="relative flex min-h-screen h-max">
      <div className="bg-white text-blue-two w-full lg:w-[50%] flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32 dark:bg-blue-one dark:text-white">
        <div className="flex flex-col items-start w-full bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:bg-blue-one">
          <h1 className="text-3xl text-left lg:text-5xl">
            {t("RESET_PASSWORD")}
          </h1>

          <ResetPasswordForm token={token} />
        </div>
        <p className="absolute text-xs bottom-4 left-4">{t("COPYRIGHT")}</p>
      </div>
      <div className="signup_bg w-[50%] lg:block relative hidden"></div>
    </div>
  );
}
