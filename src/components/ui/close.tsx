"use client";

import { IoClose } from "react-icons/io5";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function CloseTimes({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "absolute  flex items-center justify-center top-4 right-4 lg:top-6 lg:right-6 text-2xl text-inherit hover:text-red-500 transition-all",
        className
      )}
      {...props}
    >
      <IoClose />
    </button>
  );
}
