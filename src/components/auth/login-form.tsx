"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import Or from "../ui/or";
import useGoogleWithCaptcha from "@/hooks/useGoogleWithCaptcha";
import { GoogleIcon } from "../icons";
import { useTranslations } from "next-intl";
import PasswordInput from "../ui/password-input";
import LoadingButton from "../ui/loading-button";

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean(),
});

export type LoginForm = yup.InferType<typeof loginSchema>;

type LoginData = {
  email: string;
  recaptchaAction: string;
  token: string;
};

export default function LoginForm() {
  const t = useTranslations("AUTH");
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const { google, handleReCaptchaVerify } = useGoogleWithCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const { mutateAsync, isError } = useMutation({
    mutationFn: (data: LoginData) => HTTPRequest.Post("auth/login", data),
  });
  const onSubmit = async (data: LoginForm) => {
    const token = await handleReCaptchaVerify("login");
    if (!token) return toast.error("Recaptcha verification failed");

    const body = {
      email: data.email,
      token,
      recaptchaAction: "login",
    };

    setIsPending(true);
    try {
      // await signInWithEmailAndPassword(auth, data.email, data.password);
      const res = await mutateAsync(body);

      if (isError || !res?.success) {
        const message = res?.message;
        setIsPending(false);

        return toast.error(message);
      }
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setIsPending(false);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (e: any) {
      setIsPending(false);
      const message = e.message
        .replace(/\W|-/g, " ")
        .replace(/\b(?:Firebase|auth)\b/g, "")
        .trim();
      toast.error(message);
    }
  };

  return (
    <>
      <form
        className="flex flex-col w-full gap-6 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col gap-2 text-sm">
          <label htmlFor="email" className="flex items-center gap-2">
            {t("EMAIL_ADDRESS")}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("email")}
            placeholder={t("EMAIL_PLACEHOLDER")}
            className={cn(
              "px-4 py-3 border rounded focus:outline-none text-gray-neutral",
              {
                "border border-red-500": errors.email,
              }
            )}
          />
          {errors.email && (
            <p className="italic text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2 text-sm">
          <label htmlFor="password" className="flex items-center gap-2">
            {t("PASSWORD")}
            <span className="text-red-500">*</span>
          </label>
          <PasswordInput
            name="password"
            register={register}
            error={errors.password?.message}
            placeholder={t("PASSWORD_PLACEHOLDER")}
          />
        </fieldset>

        <fieldset className="">
          <label
            htmlFor="remember-me"
            className="flex items-center gap-2 text-sm cursor-pointer select-none"
          >
            <input
              {...register("rememberMe")}
              type="checkbox"
              id="remember-me"
              hidden
              className="peer"
            />
            <div
              className={cn(
                "w-5 h-5 rounded bg-white border border-cyan peer-checked:bg-[#2A2E45] flex items-center justify-center text-white",
                {
                  "border-red-500": errors.rememberMe,
                }
              )}
            >
              <FaCheck className="text-xs" />
            </div>
            <p>{t("REMEMBER_ME")}</p>
          </label>
          {errors.rememberMe && (
            <p className="italic text-xs text-red-500">
              {errors.rememberMe.message}
            </p>
          )}
        </fieldset>

        <LoadingButton isPending={isPending} name={t("SIGN_IN")} />
      </form>

      <div className="flex items-center justify-between w-full mt-4 mb-6">
        <p className="text-xs flex items-center gap-2">
          <span>{t("NO_ACCOUNT")}</span>
          <Link href="/auth/register" className="font-bold">
            {t("SIGN_UP")}
          </Link>
        </p>
        <Link href="/auth/forgot-password" className="text-sm">
          {t("FORGOT_PASSWORD")}
        </Link>
      </div>

      <div className="w-full flex flex-col gap-6">
        <Or />
        <Button
          type="button"
          onClick={google.signInWithSocial}
          className="flex items-center gap-4 justify-center py-3 text-center bg-white border border-cyan text-cyan dark:border-0 dark:text-blue-three hover:bg-hover-light"
        >
          <GoogleIcon />
          {t("SIGN_IN_WITH_GOOGLE")}
        </Button>
      </div>
    </>
  );
}
