"use client";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import PasswordInput from "../ui/password-input";
import LoadingButton from "../ui/loading-button";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type ResetPasswordForm = yup.InferType<typeof resetPasswordSchema>;

type TPayload = {
  token: string;
  password: string;
};

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const t = useTranslations("AUTH");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),
  });
  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: TPayload) =>
      HTTPRequest.Post("auth/reset-password", data),
  });

  const onSubmit = async (data: ResetPasswordForm) => {
    if (!token) return toast.error("Invalid or expired link");
    const response = await mutateAsync({
      token,
      password: data.password,
    });
    console.log(response, isError);

    if (!response.success || isError) {
      return toast.error(response.message || "An error occurred");
    }
    toast.success("Password reset successful");
    router.push("/auth/login");
  };

  return (
    <form
      action=""
      className="flex flex-col w-full gap-6 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-2 text-sm">
        <label htmlFor="password">{t("PASSWORD")}</label>
        <PasswordInput
          name="password"
          placeholder={t("PASSWORD_PLACEHOLDER")}
          register={register}
          error={errors?.password?.message}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </fieldset>

      <LoadingButton name={t("RESET")} isPending={isPending} />
    </form>
  );
}
