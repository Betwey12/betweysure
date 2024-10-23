import Link from "next/link";
import Modal from "../shared/modal";
import { telegram } from "@/constants";
import usePopUp from "@/hooks/usePopUp";

interface PremiumPopUpProps {
  user: TAuthUser;
}

export default function PremiumPopUp({ user }: PremiumPopUpProps) {
  const { setPopUp } = usePopUp();
  return (
    <Modal>
      <div className="py-6 flex flex-col items-center gap-4 px-4 lg:px-6">
        <p className="text-2xl font-medium text-center">Hi, {user.fullName}</p>
        <p className="max-w-xs text-center">
          Subscribe to any of our premium predictions today, to get expert tips
          in your inbox
        </p>
        <Link
          href="/dashboard/buy-plan"
          className="my-4 w-full py-4 bg-cyan text-white font-medium hover:bg-cyan/80 rounded text-center"
          onClick={() => setPopUp(null)}
        >
          View Now
        </Link>
        <Link href={telegram} className="text-gray-one">
          Join use on telegram
        </Link>
      </div>
    </Modal>
  );
}
