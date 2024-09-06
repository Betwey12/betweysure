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
        "absolute lg:top-6 dark:text-white lg:right-6 top-4 right-4 text-2xl text-inherit hover:text-red-500 transition-all text-blue-one",
        {
          className,
        }
      )}
      {...props}
    >
      <IoClose />
    </button>
  );
}
