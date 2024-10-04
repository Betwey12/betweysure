"use client";
import { cn } from "../../lib/utils";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import useGetUser from "@/hooks/useGetUser";
import useGetSupportedBookies from "@/hooks/useGetSupportedBookies";
import { Button } from "../ui/button";

const schema = yup.object({
  code: yup.string().required("Betting code is required"),
  from: yup.string().required("Convert from bookie is required"),
  to: yup.string().required("Convert to bookie is required"),
});

type ConvertForm = typeof schema extends yup.Schema<infer T> ? T : any;

export default function ConvertBettingCodeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { user: fetchedUser } = useGetUser();
  const today = new Date();
  const expiryDate = new Date(fetchedUser?.plan?.expiry ?? 0);
  const { bookies, isPending: isFetchingBookies } = useGetSupportedBookies();

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: ConvertForm) =>
      HTTPRequest.Post(`bet/convert-bet-code`, data),
  });

  const onSubmit: SubmitHandler<ConvertForm> = async (data) => {
    if (today > expiryDate) {
      return toast.error("Only Subscribed user can convert codes");
    }
    const response = await mutateAsync(data);

    if (!response.status || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success(response.message);
  };

  return (
    <>
      {isFetchingBookies ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="code">Betting Code</label>
            <input
              type="text"
              id="code"
              className={cn(
                "w-full px-4 py-3 rounded text-gray-one focus:outline-none shadaow border-gray-one border",
                {
                  "border-red-500": errors.code,
                }
              )}
              placeholder="Enter bet slip"
              {...register("code")}
            />
            {errors.code && (
              <p className="text-red-500 text-xs">{errors.code.message}</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="from">Convert From</label>
            <select
              id="from"
              className={cn(
                "w-full bg-white px-4 py-3 rounded text-gray-one focus:outline-none shadaow border-gray-one border",
                {
                  "border-red-500": errors.from,
                }
              )}
              {...register("from")}
            >
              {bookies.map((bookie, index) => (
                <option key={index} value={bookie}>
                  {bookie}
                </option>
              ))}
            </select>
            {errors.from && (
              <p className="text-red-500 text-xs italic">
                {errors.from.message}
              </p>
            )}
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="to">Convert To</label>
            <select
              id="to"
              className={cn(
                "w-full px-4 py-3 bg-white rounded text-gray-one focus:outline-none shadaow border-gray-one border",
                {
                  "border-red-500": errors.to,
                }
              )}
              {...register("to")}
            >
              {bookies.map((bookie, index) => (
                <option key={index} value={bookie}>
                  {bookie}
                </option>
              ))}
            </select>
            {errors.to && (
              <p className="text-red-500 text-xs italic">{errors.to.message}</p>
            )}
          </fieldset>
          <Button
            type="submit"
            className="items-center justify-center mt-4 capitalize"
          >
            convert code
            {isPending && (
              <span className="animate-spin">
                <FaSpinner />
              </span>
            )}
          </Button>
        </form>
      )}
    </>
  );
}
