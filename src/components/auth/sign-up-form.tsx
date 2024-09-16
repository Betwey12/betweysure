"use client";

import Link from "next/link";
import Or from "../ui/or";
import { Button } from "../ui/button";
import { GoogleIcon } from "../icons";
import { FaCheck, FaSpinner } from "react-icons/fa";
import { cn } from "@/lib/utils";
import PhoneInput from "../ui/phone-input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { Country } from "country-state-city";
import useGoogleWithCaptcha from "@/hooks/useGoogleWithCaptcha";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import PasswordInput from "../ui/password-input";
import { useTranslations } from "next-intl";
import LoadingButton from "../ui/loading-button";

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number")
    .min(10, "Phone number must be at least 10 characters"),
  phonecode: yup.string(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),

  tos: yup.boolean().oneOf([true], "You must accept the terms of service"),
});

export type RegisterForm = yup.InferType<typeof registerSchema>;

type RegisterData = RegisterForm & { token: string; recaptchaAction: string };

export default function SignUpForm() {
  const t = useTranslations("AUTH");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: RegisterData) => HTTPRequest.Post("auth/onboard", data),
  });
  const { google, handleReCaptchaVerify } = useGoogleWithCaptcha();

  const countries = Country.getAllCountries();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    const token = await handleReCaptchaVerify("signup");
    const phonecode = data.phonecode ? data.phonecode : "+234";
    const currency = countries.find((country) =>
      phonecode.includes(country.phonecode)
    )?.currency;
    const newPhone = `${phonecode}${data.phone}`;

    if (!token) return toast.error("Recaptcha verification failed");

    const body = {
      ...data,
      phone: newPhone,
      phonecode: phonecode,
      token: token,
      recaptchaAction: "signup",
      currency: currency,
    };

    const response = await mutateAsync(body);

    if (isError || !response?.success) {
      const isPhoneError = response?.message.includes("phone");
      const message = isPhoneError ? "Phone already exist" : response.message;
      return toast.error(message);
    }

    toast.success(response.message);

    await signInWithEmailAndPassword(auth, data.email, data.password);
    router.push("/auth/verify-email");
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col w-full gap-6 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
          <fieldset className="flex flex-col gap-2 w-full text-sm">
            <label htmlFor="fullName" className="flex items-center gap-2">
              {t("FULL_NAME")}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter your full name"
              className={cn(
                "px-4 border py-3 rounded focus:outline-none text-gray-neutral",
                {
                  "border border-red-500": errors.fullName,
                }
              )}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic">
                {errors.fullName.message}
              </p>
            )}
          </fieldset>
        </fieldset>

        <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
          <fieldset className="flex flex-col gap-2 w-full text-sm">
            <label htmlFor="email" className="flex items-center gap-2">
              {t("EMAIL_ADDRESS")}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Enter your email"
              className={cn(
                "px-4 py-3 border rounded focus:outline-none text-gray-neutral",
                {
                  "border border-red-500": errors.email,
                }
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="flex w-full flex-col gap-2 text-sm">
            <label htmlFor="phone" className="flex items-center gap-2">
              {t("PHONE_NUMBER")}
              <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              setValue={setValue}
              phonecodeName="phonecode"
              register={register}
              placeholder="Enter your phone number"
              name="phone"
              className={cn(
                "px-4 py-3 border-y border-r focus:outline-none text-gray-neutral",
                {
                  "border border-red-500": errors.phone,
                }
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">
                {errors.phone.message}
              </p>
            )}
          </fieldset>
        </fieldset>

        <fieldset className="flex flex-col gap-4 lg:flex-row justify-between">
          <fieldset className="flex flex-col gap-2 text-sm w-full">
            <label htmlFor="password" className="flex items-center gap-2">
              {t("PASSWORD")}
              <span className="text-red-500">*</span>
            </label>
            <PasswordInput
              error={errors.password?.message}
              name="password"
              register={register}
              placeholder={t("PASSWORD_PLACEHOLDER")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <fieldset className="flex flex-col gap-2 text-sm w-full">
            <label htmlFor="password" className="flex items-center gap-2">
              {t("CONFIRM_PASSWORD")}
              <span className="text-red-500">*</span>
            </label>
            <PasswordInput
              error={errors.confirmPassword?.message}
              name="confirmPassword"
              register={register}
              placeholder={t("CONFIRM_PASSWORD_PLACEHOLDER")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </fieldset>
        </fieldset>

        <fieldset className="">
          <label
            htmlFor="tos"
            className="flex items-center gap-2 text-sm cursor-pointer select-none"
          >
            <input
              type="checkbox"
              id="tos"
              {...register("tos")}
              hidden
              className="peer"
            />
            <div
              className={cn(
                "w-5 h-5 rounded bg-white border border-cyan peer-checked:bg-[#2A2E45] flex items-center justify-center text-white",
                {
                  "border border-red-500": errors.tos,
                }
              )}
            >
              <FaCheck className="text-xs" />
            </div>
            <p>{t("I_AGREE")}</p>
            <Link href="/terms-and-conditions" className="text-yellow-one">
              {t("TERMS_OF_USE")}
            </Link>
          </label>
          {errors.tos && (
            <p className="text-red-500 text-xs italic">{errors.tos.message}</p>
          )}
        </fieldset>

        <LoadingButton isPending={isPending} name={t("SIGN_UP")} />
      </form>
      <div className="flex items-center justify-between w-full mt-4 mb-6">
        <p className="text-xs flex items-center gap-2">
          <span>{t("HAVE_ACCOUNT")}</span>
          <Link href="/auth/login" className="font-bold">
            {t("SIGN_IN")}
          </Link>
        </p>
      </div>

      <div className="w-full flex flex-col gap-6">
        <Or />
        <Button
          type="button"
          onClick={google.signInWithSocial}
          className="flex items-center gap-4 justify-center py-3 text-center bg-white border border-cyan text-cyan dark:border-0 dark:text-blue-three hover:bg-hover-light"
        >
          <GoogleIcon />
          {t("SIGN_UP_WITH_GOOGLE")}
        </Button>
      </div>
    </>
  );
}
