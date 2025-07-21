import { FaSpinner } from "react-icons/fa";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPending: boolean;
  name: string;
}

export default function LoadingButton({
  isPending,
  name,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      {...props}
      disabled={isPending}
      className={cn(
        "flex items-center gap-4 justify-center py-3 text-center text-white bg-cyan",
        className,
      )}
    >
      {name}
      {isPending && (
        <span className="animate-spin">
          <FaSpinner />
        </span>
      )}
    </Button>
  );
}
