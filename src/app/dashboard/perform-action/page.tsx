"use client";
import imageOne from "@/assets/images/image5.webp";
import imageTwo from "@/assets/images/image6.webp";
import imageThree from "@/assets/images/image7.webp";
import imageFour from "@/assets/images/image8.webp";
import AirtimeForm from "@/components/bills/airtime-form";
import BuyDataForm from "@/components/bills/buy-data-form";
import ConvertBettingCodeForm from "@/components/bills/convert-betting-code-form";
import FundBettingWalletForm from "@/components/bills/fund-betting-wallet-form";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PerformActionPage() {
  const searchParams = useSearchParams();
  const task = searchParams.get("task");

  return (
    <div className="flex justify-between gap-4 flex-col lg:flex-row">
      <div className="lg:w-[40%]">
        {task === "airtime" && <AirtimeForm />}
        {task === "data" && <BuyDataForm />}
        {task === "convert-bet-code" && <ConvertBettingCodeForm />}
        {task === "fund-bet-wallet" && <FundBettingWalletForm />}
      </div>
      <div className="hidden lg:block w-[55%]">
        <h2 className="text-2xl">Bet Offers</h2>
        <div className="grid lg:grid-cols-2 gap-4 mt-10">
          {offers.map((offer, index) => (
            <Link href="https://bet9ja.com" target="_blank" key={index}>
              <Image width={500} height={500} src={offer} alt="offer" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const offers = [imageOne, imageTwo, imageThree, imageFour];
