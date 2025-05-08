import { createContext, useContext } from "react";

export type TPopUp =
  | "newsletter"
  | "popUp"
  | "premium"
  | "bottom"
  | "survey"
  | null;

export type TPopUpContext = {
  popUp: TPopUp;
  setPopUp: React.Dispatch<React.SetStateAction<TPopUp>>;
  showAny: boolean;
  setShowAny: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpContext = createContext<TPopUpContext | undefined>(undefined);

export default function usePopUp() {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error("usePopUp must be used within a PopUpProvider");
  }

  return context;
}
