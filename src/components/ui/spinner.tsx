import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <FaSpinner className="animate-spin" />
    </div>
  );
}

export function DashboardSpinner() {
  return (
    <div className="bg-gray-light min-h-screen flex flex-col justify-center items-center h-full dark:bg-blue-one dark:text-white">
      <Image
        width={120}
        height={46}
        src="/logo.png"
        alt="logo"
        className="w-[120px] h-[45px] lg:w-[160px] animate-pulse"
      />
    </div>
  );
}
