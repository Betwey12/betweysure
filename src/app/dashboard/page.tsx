import ReferralCard from "@/components/dashboard/referral-card";
import ScrollingText from "@/components/dashboard/scrolling-text";
import TipsCard from "@/components/dashboard/tips-card";
import WalletCard from "@/components/dashboard/wallet-card";
import { BundlesIcon } from "@/components/icons";
import Link from "next/link";
import { FaMoneyCheck } from "react-icons/fa";
import { FaArrowsSpin } from "react-icons/fa6";
import { MdBatchPrediction } from "react-icons/md";

export default function DashboardPage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8">
      <div className="lg:w-[64%]">
        <h1 className="text-2xl">Dashboard</h1>
        <ScrollingText />

        <div className="gap-6 mt-6 grid lg:grid-cols-3 grid-cols-2">
          {services.map((service) => {
            return (
              <Link
                href={service.href}
                key={service.name}
                className="shadow bg-white border border-gray-two p-6 text-center rounded-3xl h-full justify-center flex flex-col items-center gap-1 min-w-[100px] dark:bg-blue-two"
              >
                <span className="text-2xl">{service.icon}</span>
                {service.name}
              </Link>
            );
          })}
        </div>
        <div className="mt-10  lg:hidden">
          <TipsCard />
        </div>
        <ReferralCard />
      </div>
      <div className="lg:w-[31%]">
        <WalletCard />
        <div className="mt-10 hidden lg:block">
          <TipsCard />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    name: "Predictions",
    href: "/dashboard/football-predictions?country=all",
    icon: <MdBatchPrediction className="text-yellow-500" />,
  },
  {
    name: "Covert Booking Code",
    icon: <FaArrowsSpin className="text-green-500" />,
    task: "convert-bet-code",
    href: `/dashboard/perform?task=convert-bet-code`,
  },
  {
    name: "Fund Betting Account",
    icon: <FaMoneyCheck className="text-gray-two" />,
    task: "fund-bet-wallet",
    href: `/dashboard/perform?task=fund-bet-wallet`,
  },

  {
    name: "Buy plan",
    icon: <BundlesIcon className="text-green-500" />,
    href: "/dashboard/buy-plan",
  },
  // {
  //   name: "Data",
  //   icon: <FaExchangeAlt className="text-yellow-orange" />,
  //   task: "data",
  //   href: `/dashboard/perform?task=data`,
  // },
  // {
  //   name: "Airtime",
  //   icon: <FaSimCard className="text-yellow-sunset" />,
  //   task: "airtime",
  //   href: `/dashboard/perform?task=airtime`,
  // },
];
