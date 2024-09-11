import { FaSpinner } from "react-icons/fa";
import { Button } from "./button";

interface LoadingButtonProps {
  isPending: boolean;
  name: string;
}

export default function LoadingButton({ isPending, name }: LoadingButtonProps) {
  return (
    <Button
      disabled={isPending}
      className="flex items-center gap-4 justify-center py-3 text-center text-white bg-cyan"
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
