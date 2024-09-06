import { createContext, useContext } from "react";

export type TPopUp = "newsletter" | "popUp" | null;

export type TPopUpContext = {
  popUp: TPopUp;
  setPopUp: React.Dispatch<React.SetStateAction<TPopUp>>;
};

export const PopUpContext = createContext<TPopUpContext | undefined>(undefined);

export default function usePopUp() {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error("usePopUp must be used within a PopUpProvider");
  }

  return context;
}
