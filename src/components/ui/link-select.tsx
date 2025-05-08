import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import Link from "next/link";

interface MySelectProps {
  options: {
    title: string;
    href: string;
  }[];
  selectedOption?: string;
  dropTop?: boolean;
}

export default function LinkSelect({
  options,
  selectedOption,
  dropTop,
}: MySelectProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Button
        type="button"
        className="flex items-center bg-transparent hover:bg-transparent hover:text-blue-one capitalize justify-between border border-gray-three px-4 py-2 rounded w-full dark:text-white dark:bg-blue-two dark:border-0"
        onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
      >
        <span className="capitalize">{selectedOption}</span>
        <FaCaretDown />
      </Button>
      {dropdownOpen && (
        <div
          className={cn(
            "absolute border max-h-[400px] overflow-y-scroll border-gray-two top-[calc(100%+16px)] bg-white w-full py-4 rounded shadow dark:bg-blue-three dark:text-white dark:border-0",
            {
              "top-auto bottom-[calc(100%+16px)]": dropTop,
            },
          )}
        >
          {options.map((option) => (
            <Button
              type="button"
              key={option.title}
              asChild
              className="capitalize px-4 py-2 text-left justify-start  hover:bg-gray-light w-full truncate bg-transparent hover:text-blue-one dark:text-inherit dark:hover:bg-blue-two"
            >
              <Link href={option.href}>{option.title}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
