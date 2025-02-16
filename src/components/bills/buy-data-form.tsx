"use client";
import { cn } from "../../lib/utils";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatCurrency } from "../../lib/utils";
import { HTTPRequest } from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { networks } from "@/assets/data/data";
import { Button } from "../ui/button";
import Image from "next/image";
import PhoneInput from "../ui/phone-input";

const schema = yup.object({
  network: yup.string().required("Network is required"),
  plan: yup.string().required("Select a data bundle"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be a number")
    .min(10, "Phone number must be at least 10 characters"),
  phonecode: yup.string(),
});

type AirtimeForm = typeof schema extends yup.Schema<infer T> ? T : any;
type TPayload = {
  phone: string;
  bundleSize: string;
  scheme: string;
};

export default function BuyDataForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchAmount = parseInt(watch("plan") ?? 0, 10);
  const watchNetwork = watch("network") || "MTN";

  const { data: bundlesData, isLoading: bundlesLoading } = useQuery({
    queryKey: ["bundles"],
    queryFn: async (): Promise<any> => HTTPRequest.Get(`bills/data-bundles`),
    enabled: !!watchNetwork,
  });
  const dataBundles: TBundlesResponse["data"] =
    bundlesData?.data?.MOBILE_NETWORK[watchNetwork].reduce((data: any) => data)[
      "PRODUCT"
    ];

  const {
    isPending: buyingData,
    mutateAsync,
    isError,
  } = useMutation({
    mutationFn: (data: TPayload) =>
      HTTPRequest.Post("bills/data-bundles/initiate", data),
  });

  const onSubmit: SubmitHandler<AirtimeForm> = async (data) => {
    const payload: TPayload = {
      phone: `${data.phonecode || "234"}${data.phone}`,
      bundleSize: data.plan,
      scheme: data.network,
    };

    const response = await mutateAsync(payload);
    if (!response.sucess || isError) {
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
                value={network.scheme}
              />
              <label
                htmlFor={network.scheme}
                className={cn(
                  "cursor-pointer peer-checked:border-2 peer-checked:border-cyan border-opacity-30 shadow transition-all peer-checked:scale-105 block rounded",
                  {
                    "border-red-500": errors.network,
                  }
                )}
                onClick={() => reset({ plan: "", phone: "" })}
              >
                <Image
                  width={48}
                  height={48}
                  src={network.logo}
                  alt="network logo"
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

      <fieldset className="flex flex-col gap-2 mt-4 w-full">
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
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        {bundlesLoading ? (
          <span className="self-center animate-spin py-2">
            <FaSpinner />
          </span>
        ) : (
          dataBundles?.length && (
            <fieldset className="grid grid-cols-3 flex-wrap gap-2 max-h-[300px] overflow-y-scroll mt-4 p-4">
              {dataBundles?.map((bundle, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    {...register("plan")}
                    id={bundle.PRODUCT_ID}
                    className="peer"
                    hidden
                    value={bundle.PRODUCT_ID}
                  />
                  <label
                    htmlFor={bundle.PRODUCT_ID}
                    className={cn(
                      "cursor-pointer flex h-full border border-gray-two bg-white flex-col justify-center items-center peer-checked:border-2 peer-checked:border-cyan border-opacity-30 shadow transition-all peer-checked:scale-105  rounded p-2 dark:bg-blue-two dark:border-0",
                      {
                        "border-red-500": errors.network,
                      }
                    )}
                  >
                    <p className="text-sm font-bold capitalize text-center">
                      {bundle.PRODUCT_NAME}
                    </p>
                    <p className="text-xs text-gray-one">
                      {formatCurrency(+(bundle?.PRODUCT_AMOUNT ?? 0) + 5)}
                    </p>
                  </label>
                </div>
              ))}
            </fieldset>
          )
        )}
        {errors.plan && (
          <p className="text-red-500 text-xs italic max-w-[200px]">
            {errors.plan.message}
          </p>
        )}
      </fieldset>

      <Button type="submit" className="items-center justify-center mt-4">
        <span>Buy</span>
        <span>{formatCurrency(isNaN(watchAmount) ? 0 : watchAmount + 5)}</span>
        {buyingData && <FaSpinner className="animate-spin" />}
      </Button>
    </form>
  );
}
