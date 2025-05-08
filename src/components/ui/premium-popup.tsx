import Link from "next/link";
import Modal from "../shared/modal";
import usePopUp from "@/hooks/usePopUp";
import { Button } from "./button";
import { useEffect, useState } from "react";
import Image from "next/image";
import premiumPopUp from "@/assets/images/premium-popup.webp";
import CloseTimes from "./close";

interface PremiumPopUpProps {
  user?: TAuthUser | null;
}

export default function PremiumPopUp({ user }: PremiumPopUpProps) {
  const { setPopUp } = usePopUp();
  const [randPopUp, setRandPopUp] = useState("text");

  useEffect(() => {
    const popUps = ["text", "image"];
    const randomIndex = Math.floor(Math.random() * popUps.length);
    setRandPopUp(popUps[randomIndex]);
  }, []);

  return (
    <Modal>
      {randPopUp === "text" && (
        <div className="py-6 flex flex-col items-center gap-4 px-4 lg:px-6">
          <p className="text-2xl font-medium text-center">
            {user ? `Hi, ${user?.fullName}` : "Get Premium"}
          </p>
          <p className="max-w-xs text-center">
            Subscribe to any of our premium predictions today, to get expert
            tips in your inbox
          </p>
          <div className="flex flex-col gap-4 w-full mt-4">
            <Link
              href="/dashboard/buy-plan"
              className="w-full py-3 bg-cyan text-white font-medium hover:bg-cyan/80 rounded text-center"
              onClick={() => setPopUp(null)}
            >
              View Pricing
            </Link>
            <Button
              onClick={() => setPopUp(null)}
              variant="secondary"
              className="w-full h-auto py-3 font-medium rounded text-center"
            >
              Not Interested
            </Button>
          </div>
        </div>
      )}
      {randPopUp === "image" && (
        <div className="relative lg:w-[720px] h-[320px] lg:h-[400px]">
          <Link href={user ? "/dashboard/buy-plan" : "/auth/login"}>
            <Image
              width={1080}
              height={607}
              src={premiumPopUp}
              alt="banner"
              className="w-full h-full"
            />
          </Link>
          <CloseTimes
            onClick={() => setPopUp(null)}
            className="text-white hover:text-red-500"
          />
        </div>
      )}
    </Modal>
  );
}
