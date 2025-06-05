import Link from "next/link";
import Modal from "../shared/modal";
import usePopUp from "@/hooks/usePopUp";
import Image from "next/image";
import premiumPopUp from "@/assets/images/premium-popup.webp";
import CloseTimes from "./close";

interface PremiumPopUpProps {
  user?: TAuthUser | null;
}

export default function PremiumPopUp({ user }: PremiumPopUpProps) {
  const { setPopUp } = usePopUp();

  return (
    <Modal>
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
    </Modal>
  );
}
