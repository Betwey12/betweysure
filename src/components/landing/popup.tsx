"use client";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import CloseTimes from "../ui/close";
import XdaysMultiple from "./xdays-multiple";
import usePopUp from "@/hooks/usePopUp";

export default function PopUp() {
  const { setPopUp } = usePopUp();
  const popUpRef = useRef(null);
  useOnClickOutside(popUpRef, () => setPopUp(null));

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 px-4 z-[90]">
      <div
        ref={popUpRef}
        className="bg-white overflow-hidden rounded-lg lg:rounded-3xl flex flex-col items-center text-sm relative lg:min-w-[400px] min-w-[360px]"
      >
        <XdaysMultiple
          partnerLink="https://refpa7921972.top/L?tag=d_2927467m_1573c_&site=2927467&ad=1573"
          canShowImage={true}
        />

        <CloseTimes onClick={() => setPopUp(null)} />
      </div>
    </div>
  );
}
