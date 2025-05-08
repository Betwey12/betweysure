import { cn } from "@/lib/utils";

export default function Divider({
  className,
}: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("mt-10 border-gray-50", className)} />;
}
