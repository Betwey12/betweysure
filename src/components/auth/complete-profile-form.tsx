"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Country } from "country-state-city";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";
import { updateEmail } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import PhoneInput from "../ui/phone-input";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LoadingButton from "../ui/loading-button";
import { useTranslations } from "next-intl";
import { paymentSupportedCountries } from "@/assets/data/data";
import { log } from "console";

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number"),
  phonecode: yup.string(),
  email: yup.string().email("Invalid email"),
});

type ProfileForm = yup.InferType<typeof schema>;

type TPayload = {
  phone: string;
  fullName: string;
  email: string;
  phonecode: string;
  currency: string;
  uid: string;
  referredBy?: string;
};

export default function CompleteProfileForm() {
  const router = useRouter();
  const { user, isLoading, setUser } = useAuth();
  const t = useTranslations("AUTH");

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const countries = Country.getAllCountries();
  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: TPayload) =>
      HTTPRequest.Post("auth/finish-social-signup", data),
  });

  async function onSubmit(data: ProfileForm) {
    const phonecode = data.phonecode || "234";
    const authUser = auth.currentUser;
    if (!authUser) return toast.error("User not found");
    const currency =
      countries.find((country) => phonecode === country.phonecode)?.currency ??
      "USD";

    const newCurrency = paymentSupportedCountries.includes(currency)
      ? currency
      : "USD";

    const referredBy = sessionStorage.getItem("referralCode") || undefined;

    data.email &&
      (await updateEmail(authUser, data.email).catch((error) => {
        console.log(error);
        return toast.error("Error updating email");
      }));

    const response = await mutateAsync({
      email: data.email! || authUser.email!,
      phone: `${phonecode}${data.phone}`,
      fullName: user?.displayName || "No name",
      phonecode,
      currency: newCurrency,
      uid: authUser.uid,
      referredBy,
    });

    if (!response.success || isError) {
      return toast.error(response.message);
    }
    toast.success(response.message);
    setUser({
      ...user,
      ...response.user,
    });

    router.push("/dashboard");
    // window.location.replace("/dashboard");
  }

  return isLoading ? (
    <FaSpinner className="animate-spin" />
  ) : (
    <form
      className="flex items-center w-full gap-4 max-w-sm justify-center flex-col mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!user?.email && (
        <fieldset className="w-full flex items-center gap-2 flex-col">
          <input
            type="email"
            placeholder="Enter email address"
            className={cn(
              "px-4 border py-3 w-full rounded focus:outline-none text-gray-neutral",
              {
                "border border-red-500": errors.email,
              },
            )}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm italic">
              {errors.email.message}
            </p>
          )}
        </fieldset>
      )}

      <fieldset className="w-full gap-2 flex-col">
        <PhoneInput
          name="phone"
          phonecodeName="phonecode"
          register={register}
          setValue={setValue}
          className={cn("w-full", {
            "border border-red-500": errors.phone,
          })}
          phoneCodeClassName={cn("", {
            "border border-red-500": errors.phone,
          })}
          placeholder="Enter Phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm italic">{errors.phone.message}</p>
        )}
      </fieldset>

      <LoadingButton isPending={isPending} name={t("SUBMIT")} />
    </form>
  );
}
