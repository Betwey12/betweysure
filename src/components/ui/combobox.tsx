import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
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
          className="w-full lg:max-w-[300px] justify-between bg-transparent text-sm font-normal"
        >
          {label ? label : (placeholder ?? "Select option")}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full lg:max-w-[300px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceHolder} className="h-9" />
          <CommandList>
            <CommandEmpty>{empty ?? "Not found"}</CommandEmpty>
            <CommandGroup>{children}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
