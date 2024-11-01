"use client";
import { cn } from "../../lib/utils";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HTTPRequest } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { formatCurrency } from "../../lib/utils";
import { Country } from "country-state-city";
import { networks } from "@/assets/data/data";
import Image from "next/image";
import PhoneInput from "../ui/phone-input";
import { Button } from "@mui/material";

const schema = yup.object({
  network: yup.string().required("Network is required"),
  amount: yup
    .number()
    .positive("Amount must be positive")
    .min(50, "Amount must be at least 50")
    .integer("Amount must be a whole number")
    .required("Amount is required"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[\d+()\-\s]+$/, "Phone number must be a number"),
  phonecode: yup.string(),
});

type AirtimeForm = typeof schema extends yup.Schema<infer T> ? T : any;

type TPayload = {
  phone: string;
  amount: number;
  networkCode: string;
};

export default function AirtimeForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchAmount = parseInt(watch("amount", 0).toString(), 10);
  const watchPhonecode = watch("phonecode");
  const currency = Country.getAllCountries().find((country) =>
    watchPhonecode?.includes(country.phonecode)
  )?.currency;

  const {
    isPending: buyingAirtime,
    mutateAsync,
    isError,
  } = useMutation({
    mutationFn: (data: TPayload) =>
      HTTPRequest.Post("bills/airtime/initiate", data),
  });

  const onSubmit: SubmitHandler<AirtimeForm> = async (data) => {
    const payload = {
      phone: `${data.phonecode || "234"}${data?.phone}`,
      amount: data?.amount,
      networkCode: data.network,
    };

    const response = await mutateAsync(payload);
    if (!response.success || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success(response.message);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <p className="font-bold">Select Network</p>
      <fieldset className="flex flex-col gap-2">
        <fieldset className="mt-2 flex gap-2">
          {networks?.map((network, index) => (
            <div key={index}>
              <input
                type="radio"
                {...register("network")}
                id={network.scheme}
                className="peer"
                hidden
                value={network.code}
              />
              <label
                htmlFor={network.scheme}
                className={cn(
                  "cursor-pointer peer-checked:border-2 peer-checked:border-cyan border-opacity-30 shadow transition-all peer-checked:scale-105 block rounded",
                  {
                    "border-red-500": errors.network,
                  }
                )}
              >
                <Image
                  width={48}
                  height={48}
                  src={network.logo}
                  alt=""
                  className="w-12 h-12 rounded"
                />
              </label>
            </div>
          ))}
        </fieldset>
        {errors.network && (
          <p className="text-red-500 text-xs italic max-w-[200px]">
            {errors.network.message}
          </p>
        )}
      </fieldset>
      <fieldset className="flex flex-col gap-2 mt-4">
        <PhoneInput
          register={register}
          name="phone"
          phonecodeName="phonecode"
          setValue={setValue}
          placeholder="Enter mobile number"
          className="border border-gray-two"
          phoneCodeClassName="border-l border-y border-gray-two"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs italic max-w-[200px]">
            {errors.phone.message}
          </p>
        )}
        <input
          type="number"
          {...register("amount")}
          defaultValue={50}
          id="amount"
          placeholder="Enter amount"
          className={cn(
            "w-full px-4 py-3 rounded mt-4 text-gray-one focus:outline-none shadaow border-gray-two border",
            {
              "border-red-500": errors.amount,
            }
          )}
        />
        {errors.amount && (
          <p className="text-red-500 text-xs italic max-w-[200px]">
            {errors.amount.message}
          </p>
        )}
      </fieldset>

      <Button className="mt-6 items-center justify-center">
        Recharge{" "}
        {formatCurrency(isNaN(watchAmount) ? 0 : watchAmount, currency)}
        {buyingAirtime && <FaSpinner className="animate-spin" />}
      </Button>
    </form>
  );
}
