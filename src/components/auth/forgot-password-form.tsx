"use client";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LoadingButton from "../ui/loading-button";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

type ForgotPasswordForm = Yup.InferType<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const t = useTranslations("AUTH");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: ForgotPasswordForm) =>
      HTTPRequest.Post(`auth/forgot-password`, data),
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    const response = await mutateAsync(data);
    if (!response.success || isError) {
      return toast.error(response.message || "An error occurred");
    }
    toast.success(response.message);
    router.push("/auth/login");
  };

  return (
    <form
      action=""
      className="flex flex-col w-full gap-6 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-2 text-sm">
        <label htmlFor="email">{t("EMAIL_ADDRESS")}</label>
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email")}
          className={cn(
            "px-4 py-3 rounded focus:outline-none text-gray-neutral",
            {
              "border border-red": errors.email,
            }
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </fieldset>

      <LoadingButton isPending={isPending} name={t("SEND_RESET_LINK")} />
    </form>
  );
}
