import Image from "next/image";
import predictPopUp from "@/assets/images/predict-win.webp";
import CloseTimes from "./close";
import usePopUp from "@/hooks/usePopUp";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function BottomPopUp() {
  const { setPopUp } = usePopUp();
  const popUpRef = useRef(null);
  useOnClickOutside(popUpRef, () => setPopUp("bottom"));

  return (
    <div className="hidden fixed w-full lg:flex items-center justify-center bottom-0 z-[9999]">
      <div className="relative" ref={popUpRef}>
        <Image
          width={1080}
          height={107}
          src={predictPopUp}
          alt="banner"
          className="max-w-[808px] w-full h-[60px] lg:h-[100px] object-cover"
        />
        <CloseTimes
          className="lg:-top-2 lg:-right-2 bg-white rounded-full text-blue-one w-8 h-8"
          onClick={() => setPopUp(() => null)}
        />
      </div>
    </div>
  );
}
