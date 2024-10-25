import Link from "next/link";
import Modal from "../shared/modal";
import { telegram } from "@/constants";
import usePopUp from "@/hooks/usePopUp";
import { Button } from "./button";

interface PremiumPopUpProps {
  user?: TAuthUser | null;
}

export default function PremiumPopUp({ user }: PremiumPopUpProps) {
  const { setPopUp } = usePopUp();
  return (
    <Modal>
      <div className="py-6 flex flex-col items-center gap-4 px-4 lg:px-6">
        <p className="text-2xl font-medium text-center">
          {user ? `Hi, ${user?.fullName}` : "Get Premium"}
        </p>
        <p className="max-w-xs text-center">
          Subscribe to any of our premium predictions today, to get expert tips
          in your inbox
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
    </Modal>
  );
}
