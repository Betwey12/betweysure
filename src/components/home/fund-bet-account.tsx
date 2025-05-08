import { HTTPRequest } from "@/api";
import { cn, formatCurrency } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { clubkonnectBookies } from "@/assets/data/data";

const schema = yup.object({
  amount: yup
    .number()
    .required("Amount is required")
    .min(
      100,
      `Minimum amount is you can fund is ${formatCurrency(100, "NGN")}`
    ),
  customerid: yup.string().required("Customer ID is required"),
  provider: yup.string().required("Please select provide"),
});

type FundBettingWalletForm = yup.InferType<typeof schema>;

export default function FundBetAccount() {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const currency = user?.currency || "NGN";
  const watchAmount = parseInt(watch("amount")?.toString() ?? 0, 10);

  const { isPending, mutateAsync, isError } = useMutation({
    mutationFn: (data: FundBettingWalletForm) =>
      HTTPRequest.Post(`bet/fund-bet-wallet/${user?._id}`, data),
  });

  const onSubmit: SubmitHandler<FundBettingWalletForm> = async (data) => {
    const response = await mutateAsync(data);

    if (!response.success || isError) {
      return toast.error(response.errorMessage || response.message);
    }
    toast.success(response.message);
  };

  return (
    <div
      id="convert-bet-code"
      className="border border-gray-three shadow w-full rounded-lg lg:rounded-[20px] p-4 lg:py-8 dark:bg-blue-one dark:text-white dark:border-0"
    >
      <h3 className="text-2xl font-semibold">Fund Bet Account</h3>
      <form
        action=""
        className="rounded-lg text-gray-one text-sm flex flex-col gap-2 mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="amount">Enter Amount</label>
          <input
            type="text"
            {...register("amount")}
            placeholder="Enter amount"
            id="amount"
            className={cn(
              "px-4 border border-gray-two bg-white py-2 rounded focus:outline-none",
              {
                "border border-red-500": errors.amount,
              }
            )}
          />
          {errors.amount && (
            <p className="text-red-500 text-xs">{errors.amount.message}</p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="customerid">Account ID</label>
          <input
            type="text"
            {...register("customerid")}
            placeholder="Enter customer id"
            id="customerid"
            className={cn(
              "px-4 border border-gray-two py-2 rounded bg-white focus:outline-none",
              {
                "border border-red-500": errors.customerid,
              }
            )}
          />
          {errors.customerid && (
            <p className="text-red-500 text-xs italic">
              {errors.customerid.message}
            </p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="provider">Select Provider</label>
          <select
            id="provider"
            className={cn(
              "w-full px-4 py-3 rounded bg-white text-gray-one focus:outline-none shadaow border-gray-one border",
              {
                "border-red-500": errors.provider,
              }
            )}
            {...register("provider")}
          >
            {clubkonnectBookies.map((bookie, index) => (
              <option key={index} value={bookie}>
                {bookie}
              </option>
            ))}
          </select>
          {errors.provider && (
            <p className="text-red-500 text-xs italic">
              {errors.provider.message}
            </p>
          )}
        </fieldset>

        <Button className="bg-[#FE7750] text-white text-center flex justify-center items-center py-4 mt-6">
          Fund wallet{" "}
          {formatCurrency(isNaN(watchAmount) ? 0 : watchAmount, currency)}
          {isPending && (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
