import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IComboboxDemo extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  searchPlaceHolder?: string;
  empty?: string;
  label?: string;
  open?: boolean;
  handleOpen: (open: boolean) => void;
}

export function Combobox({
  placeholder,
  searchPlaceHolder,
  empty,
  label,
  open,
  handleOpen,
  children,
}: IComboboxDemo) {
  return (
    <Popover open={open} onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full lg:max-w-[300px] justify-between bg-transparent hover:bg-transparent text-sm font-normal"
        >
          {label ? label : (placeholder ?? "Select option")}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-[300px] lg:max-w-[300px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceHolder} className="h-9" />
          <CommandList>
            <CommandEmpty>{empty ?? "Not found"}</CommandEmpty>
            {children}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
