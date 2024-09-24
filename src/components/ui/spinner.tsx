import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <span className="animate-spin">
        <FaSpinner />
      </span>
    </div>
  );
}
