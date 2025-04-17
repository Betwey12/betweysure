"use client";

import WalletCard from "@/components/dashboard/wallet-card";
import FundWalletForm from "@/components/wallet/fund-wallet-form";
import Transactions from "@/components/wallet/transactions";
import { useSearchParams } from "next/navigation";

export type TActiveTab = "transactions" | "topup";

export default function Wallet() {
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as TActiveTab) || "transactions";

  return (
    <>
      <div className="flex items-center justify-between lg:justify-end gap-4 lg:flex-row-reverse">
        <h1 className="text-2xl">Wallet</h1>
      </div>
      <div className="mt-10 flex items-center">
        <WalletCard />
      </div>
      <div className="mt-10">
        {activeTab === "transactions" ? <Transactions /> : <FundWalletForm />}
      </div>
    </>
  );
}
