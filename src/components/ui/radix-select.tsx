import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./select";

interface RadixSelectProps {
  handleValueChange: (v: string) => void;
  selectItems: JSX.Element[] | JSX.Element;
  className?: string;
  placeholder?: string;
}

export default function RadixSelect({
  handleValueChange,
  selectItems,
  className,
  placeholder,
}: RadixSelectProps) {
  return (
    <Select onValueChange={(v) => handleValueChange(v)}>
      <SelectTrigger className={cn(className)} aria-label="select">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
}
