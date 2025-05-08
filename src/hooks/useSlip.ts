import { createContext, useContext } from "react";

interface SlipContext {
  slip: TSlip;
  setSlip: React.Dispatch<React.SetStateAction<TSlip>>;
}

export const SlipContext = createContext<SlipContext | null>(null);

export function useSlip() {
  const context = useContext(SlipContext);
  if (context === null) {
    throw new Error("useSlip must be used within a slip provider");
  }
  return context;
}
