"use client";
import { useQuery } from "@tanstack/react-query";
import { formatCurrency } from "../../lib/utils";
import { cn } from "../../lib/utils";
import { HTTPRequest } from "../../api";
import dayjs from "dayjs";
import { useAuth } from "@/hooks/useAuth";

export default function Transactions() {
  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: (): Promise<TTransactionResponse> =>
      HTTPRequest.Get(`transactions/me`),
  });
  const transactions = data?.transactions;

  return (
    <>
      <h2>Transaction History</h2>{" "}
      <div className="flex flex-col gap-3 mt-10">
        {transactions?.map((transaction) => (
          <TransactionList transaction={transaction} key={transaction?._id} />
        ))}
      </div>
    </>
  );
}

interface TransactionListProps {
  transaction: TTransaction;
}

function TransactionList({ transaction }: TransactionListProps) {
  const date = new Date(transaction?.createdAt).toDateString();
  const time = dayjs(transaction?.createdAt).format("hh:mm A");
  const { user } = useAuth();

  return (
    <div className="grid  items-center lg:grid-cols-[1fr_200px] shadow p-4 rounded-3xl lg:px-10 bg-white border border-gray-two dark:bg-blue-two dark:text-white dark:border-0">
      <div className="flex items-center gap-4">
        <div
          className={cn("w-3 h-3 bg-gray-one rounded-full", {
            "bg-green-500": transaction?.status === "success",
            "bg-red-500": transaction?.status === "failed",
            "bg-yellow-500": transaction?.status === "pending",
          })}
        />
        <div>
          <div className="flex lg:flex-row flex-col lg:items-center gap-2">
            <p className="text-sm text-gray-one capitalize">
              {transaction?.description}
            </p>

            <p className="font-bold capitalize">{transaction?.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-one capitalize">{date}</p>
            <p className="text-sm text-gray-one uppercase">{time}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p
          className={cn("text-base text-gray-one", {
            "text-green-500": transaction?.status === "success",
            "text-red-500": transaction?.status === "failed",
            "text-yellow-500": transaction?.status === "pending",
          })}
        >{`${transaction.type === "debit" ? "-" : "+"}${formatCurrency(
          transaction?.amount,
          transaction?.currency ?? user?.currency ?? "NGN",
        )}`}</p>
        <p
          className={cn("text-sm text-gray-one capitalize", {
            "text-green-500": transaction?.status === "success",
            "text-red-500": transaction?.status === "failed",
            "text-yellow-500": transaction?.status === "pending",
          })}
        >
          {transaction?.status}
        </p>
      </div>
    </div>
  );
}
