"use client";
import bankTransfer from "@/assets/icons/bank-transfer.png";
import flw from "@/assets/icons/fw-1.png";
import paystack from "@/assets/icons/paystack-payment.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { cn } from "../../lib/utils";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatCurrency } from "../../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { HTTPRequest } from "../../api";
import { FaLock, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { Button } from "../ui/button";
import BankTransfer from "./bank-transfer";

const PaymentSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount is required")
    .min(100, "Minimum amount is 100"),
  paymentMethod: yup.string().required("Payment method is required"),
});

type PaymentForm = yup.InferType<typeof PaymentSchema>;

type TPayload = {
  amount: number;
  userid?: string;
  method: string;
  currency: string;
};

export default function FundWalletForm() {
  const { user } = useAuth();
  const currency = user?.currency || "NGN";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentForm>({
    resolver: yupResolver(PaymentSchema),
  });
  const watchAmount = parseInt(watch("amount", 0).toString(), 10);
  const watchPaymentMethod = watch("paymentMethod");

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: (data: TPayload) => HTTPRequest.Post("wallet/topup", data),
  });

  const onSubmit: SubmitHandler<PaymentForm> = async (data) => {
    const payload = {
      amount: data.amount,
      userid: user?._id,
      method: data.paymentMethod,
      currency,
    };
    const response = await mutateAsync(payload);
    if (!response.success || isError) {
      return toast.error(response.message || "An error occurred");
    }

    const { link } = response;
    toast.success(response.message);
    window.location.href = link;
  };

  return (
    <>
      <h2>Fund Wallet</h2>{" "}
      <div className="flex flex-col gap-3 mt-10">
        <form
          action=""
          className="flex flex-col max-w-fit gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p>Select payment method</p>

          <fieldset>
            <fieldset className="mt-4 flex gap-2">
              {paymentMethods.map((method, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    id={method.name}
                    className="peer"
                    hidden
                    value={method.name}
                    disabled={method.name === "bank-transfer"}
                  />
                  <label
                    htmlFor={method.name}
                    className={cn(
                      "cursor-pointer shadow-lg opacity-50 relative flex items-center justify-center peer-checked:opacity-100 hover:opacity-100 transition-all peer-checked:scale-105 rounded"
                    )}
                    title="Bank transfer is currently disabled. Please use other payment methods."
                  >
                    <Image
                      width={128}
                      height={48}
                      src={method.image}
                      alt=""
                      className="w-32 h-12 rounded shadow"
                    />
                    {method.name === "bank-transfer" && (
                      <FaLock className="absolute text-gray-500" />
                    )}
                  </label>
                </div>
              ))}
            </fieldset>
            {errors.paymentMethod && (
              <p className="text-red-500 text-xs italic">
                {errors.paymentMethod.message}
              </p>
            )}
          </fieldset>
          {watchPaymentMethod === "bank-transfer" ? (
            <BankTransfer />
          ) : (
            <>
              <fieldset className="maxw">
                <input
                  type="number"
                  {...register("amount")}
                  id="amount"
                  defaultValue={0}
                  placeholder="Enter amount"
                  className={cn(
                    "w-full px-4 py-3 rounded mt-4 border border-gray-two text-gray-one focus:outline-none shadaow",
                    {
                      "border-red-500": errors.amount,
                    }
                  )}
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs italic">
                    {errors.amount.message}
                  </p>
                )}
              </fieldset>
              <Button className="self-start mt-6">
                Fund Wallet {formatCurrency(watchAmount)}
                {isPending && (
                  <span className="animate-spin">
                    <FaSpinner />
                  </span>
                )}
              </Button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

const paymentMethods = [
  {
    name: "flutterwave",
    image: flw,
  },
  {
    name: "paystack",
    image: paystack,
  },
  {
    name: "bank-transfer",
    image: bankTransfer,
  },
];
