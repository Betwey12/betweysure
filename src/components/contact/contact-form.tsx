"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "../../lib/utils";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

type ContactForm = typeof schema extends yup.Schema<infer T> ? T : any;

export default function ContactForm() {
  const t = useTranslations("CONTACT_FORM");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: ContactForm) => HTTPRequest.Post(`contact`, data),
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await mutateAsync(data);
    if (!response.success || isError) {
      return toast.error(response.message || "An error occurred");
    }
    toast.success(response.message);
  };

  return (
    <form
      className="flex flex-col gap-2 shadow-lg mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col lg:flex-row items-center gap-8">
        <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
          <label htmlFor="name">{t("NAME")}</label>
          <input
            type="text"
            id="name"
            placeholder={t("NAME_PLACEHOLDER")}
            {...register("name")}
            className={cn(
              "w-full px-4 bg-white py-3 rounded mt-4 text-gray-one focus:outline-none shadaow border-gray-one border",
              {
                "border border-red-500": errors.name,
              }
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2 w-full lg:w-1/2">
          <label htmlFor="email">{t("EMAIL")}</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email"
            className={cn(
              "w-full px-4 py-3 bg-white rounded mt-4 text-gray-one focus:outline-none shadaow border-gray-one border",
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
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="message">{t("MESSAGE")}</label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Enter your message"
          className={cn(
            "w-full px-4 py-3 rounded mt-4 bg-white text-gray-one focus:outline-none shadaow border-gray-one border h-32",
            {
              "border border-red-500": errors.message,
            }
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-xs italic">
            {errors.message.message}
          </p>
        )}
      </fieldset>
      <button className="bg-cyan flex items-center justify-center gap-2 text-white py-2 rounded mt-8">
        {t("SEND_MESSAGE")}
        {isPending && <FaSpinner className="animate-spin" />}
      </button>
    </form>
  );
}
