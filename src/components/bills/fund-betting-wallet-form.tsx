import { cn } from "../../lib/utils";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { formatCurrency } from "../../lib/utils";
import { clubkonnectBookies } from "@/assets/data/data";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

const schema = yup.object({
  amount: yup.number().min(100).required("Amount is required"),
  customerid: yup.string().required("Customer ID is required"),
  provider: yup.string().required("Please select provide"),
});

type FundBettingWalletForm = typeof schema extends yup.Schema<infer T>
  ? T
  : any;

export default function FundBettingWalletForm() {
  const { user } = useAuth();
  const currency = user?.currency || "NGN";
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="amount">Enter Amount</label>
        <input
          type="number"
          id="amount"
          className={cn(
            "w-full px-4 py-3 rounded text-gray-one focus:outline-none shadaow border-gray-two border",
            {
              "border-red-500": errors.amount,
            }
          )}
          placeholder="Enter amount to fund"
          {...register("amount")}
        />
        {errors.amount && (
          <p className="text-red-500 text-xs">{errors.amount.message}</p>
        )}
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="accountId">Account ID</label>
        <input
          type="text"
          id="customerId"
          className={cn(
            "w-full px-4 py-3 rounded text-gray-one focus:outline-none shadaow border-gray-two border",
            {
              "border-red-500": errors.customerid,
            }
          )}
          placeholder="Enter account ID"
          {...register("customerid")}
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
            "w-full px-4 py-3 rounded text-gray-one focus:outline-none shadaow border-gray-two border",
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
      <Button
        type="submit"
        className="items-center justify-center mt-4 capitalize"
      >
        Fund wallet{" "}
        {formatCurrency(isNaN(watchAmount) ? 0 : watchAmount, currency)}
        {isPending && (
          <span className="animate-spin">
            <FaSpinner />
          </span>
        )}
      </Button>
    </form>
  );
}
