"use client";
import { useState } from "react";
import { SlipContext } from "@/hooks/useSlip";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function SlipProvider({ children }: ThemeProviderProps) {
  const [slip, setSlip] = useState<TSlip>({
    timedOut: false,
    predictions: [],
  });
  return (
    <SlipContext.Provider value={{ slip, setSlip }}>
      {children}
    </SlipContext.Provider>
  );
}
