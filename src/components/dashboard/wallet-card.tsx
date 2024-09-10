"use client";
import { IoWalletSharp } from "react-icons/io5";
import { FaHistory, FaSpinner } from "react-icons/fa";
import { formatCurrency } from "../../lib/utils";
import { cn } from "../../lib/utils";
import useGetUser from "@/hooks/useGetUser";
import Link from "next/link";

export default function WalletCard() {
  const { user: fetchedUser, isLoading } = useGetUser();
  const plan =
    fetchedUser?.plan?.type !== "free" &&
    (fetchedUser?.plan?.expiry ?? 0) < Date.now()
      ? "expired"
      : fetchedUser?.plan?.type;

  return (
    <div className="bg-yellow-sunset rounded-3xl p-6 flex flex-col gap-2 text-white md:max-w-[350px]">
      <div>
        <div className="flex items-center gap-2 justify-between">
          <h3>Wallet balance</h3>
          {isLoading ? (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          ) : (
            <p
              className={cn(
                " bg-[#ff0101] px-3 py-1 text-xs capitalize rounded-full",
                {
                  "bg-[#572805]":
                    fetchedUser?.plan?.type.toLowerCase() === "standard",
                  "bg-purple-royal":
                    fetchedUser?.plan?.type.toLowerCase() === "premium",
                }
              )}
            >
              {plan}
            </p>
          )}
        </div>
        <p className="text-2xl">
          {isLoading ? (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          ) : (
            formatCurrency(fetchedUser?.wallet || 0, fetchedUser?.currency)
          )}
        </p>
      </div>
      <div className="">
        <h3>Loyalty points</h3>
        <p className="text-2xl">
          {isLoading ? (
            <span className="animate-spin">
              <FaSpinner />
            </span>
          ) : (
            fetchedUser?.loyalty || 0
          )}
        </p>
      </div>
      <div className="grid grid-cols-2 items-center justify-between gap-3 w-full mt-2">
        <Link
          href="/dashboard/wallet?tab=topup"
          className="rounded flex items-center gap-2 p-0 bg-purple-royal px-4 py-3 text-xs"
        >
          <IoWalletSharp />
          <span>Top up wallet</span>
        </Link>
        <Link
          href="/dashboard/wallet?tab=transactions"
          className="flex rounded items-center gap-2 p-0 bg-cyan px-4 py-3 text-xs"
        >
          <FaHistory />
          <span>Transactions</span>
        </Link>
      </div>
    </div>
  );
}
