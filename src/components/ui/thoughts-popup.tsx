import Link from "next/link";
import { ThoughtsIcon } from "../icons";
import usePopUp from "@/hooks/usePopUp";
import { cn } from "@/lib/utils";
import CloseTimes from "./close";

interface IThoughtsPopup {
  link: string;
}

export default function ThoughtsPopup({ link }: IThoughtsPopup) {
  const { setShowAny, showAny } = usePopUp();

  return (
    <div
      className={cn(
        "flex flex-col transition-all fixed bottom-0 -left-1 z-50 bg-white -translate-x-[100%] dark:bg-blue-two rounded",
        {
          "translate-x-0": showAny,
        }
      )}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <p className="font-medium text-cyan">Try this feature</p>
        <CloseTimes onClick={() => setShowAny(false)} className="static" />
      </div>

      <Link href={link} onClick={() => setShowAny(false)}>
        <ThoughtsIcon className="text-[120px]" />
      </Link>
    </div>
  );
}
