"use client";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { cn } from "@/lib/utils";
import LoadingButton from "../ui/loading-button";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
});

type ProfileForm = yup.InferType<typeof schema>;

export default function EditProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: (data: ProfileForm) =>
      HTTPRequest.Post("users/edit-profile", data),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<ProfileForm> = async (data) => {
    const user = auth.currentUser;
    if (!user) return toast.error("User not found");
    await updateProfile(user, {
      displayName: data.fullName,
    });
    const response = await mutateAsync(data);
    if (!response.success || isError) {
      return toast.error(response.message);
    }
    toast.success(response.message);
    window.location.replace("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:max-w-md mt-8 flex flex-col gap-3"
    >
      <fieldset className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-gray-one font-medium mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          className={cn(
            "border rounded-md text-blue-three p-2 w-full border-gray-two focus:outline-none",
            {
              "border-red-500": errors.fullName,
            }
          )}
          placeholder="Enter your username"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm italic">
            {errors.fullName.message}
          </p>
        )}
      </fieldset>
      {/* Add more input fields for other profile information */}
      <LoadingButton isPending={isPending} name="Save Changes" />
    </form>
  );
}
