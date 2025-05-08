import { cn } from "@/lib/utils";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Modal({ children, className }: ModalProps) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 px-4 z-[90]">
      <div
        className={cn(
          "bg-white overflow-hidden rounded-lg lg:rounded-3xl flex flex-col items-center text-sm relative lg:min-w-[400px] min-w-[360px] dark:bg-blue-one",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
