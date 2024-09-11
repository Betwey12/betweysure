"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import PasswordInput from "../ui/password-input";

const schema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
  newPassword: yup.string().required("New Password is required"),
});

type ChangePasswordForm = yup.InferType<typeof schema>;
type MutationBody = ChangePasswordForm & { email?: string | null };

export default function Settings() {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm<ChangePasswordForm>({
    resolver: yupResolver(schema),
  });

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: MutationBody) =>
      HTTPRequest.Post(`auth/update-password`, data),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    if (!user) return toast.error("User not found");
    const response = await mutateAsync({ ...data, email: user.email });
    if (!response.success || isError) {
      return toast.error(response.message || "An error occurred");
    }
    toast.success(response.message);
  };

  return (
    <div className="mt-4 max-w-lg">
      {/* Change Password */}
      <div className="mb-2 flex flex-col gap-2">
        <h4 className="text-md font-semibold text-gray-one">Change Password</h4>
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <PasswordInput
            name="currentPassword"
            register={register}
            placeholder="Enter your current password"
          />

          <PasswordInput
            name="newPassword"
            register={register}
            placeholder="Enter new password"
          />

          <Button className="mt-2 bg-cyan items-center justify-center text-white p-2 rounded">
            Change Password
            {isPending && <FaSpinner className="animate-spin" />}
          </Button>
        </form>
      </div>

      {/* Email Notification Preferences */}
      <div className="mt-6 flex flex-col gap-2">
        <h4 className="text-md font-semibold text-gray-one">
          Email Notification Preferences
        </h4>
        <form action="">
          {/* Add options for email notification preferences */}
          <label className="block mt-2">
            <input type="checkbox" className="mr-2" />
            Receive email notifications
          </label>
        </form>
      </div>

      <button className="mt-6 bg-red-500 text-white p-2 rounded-md hover:bg-blue-600">
        Delete Account
      </button>
    </div>
  );
}
