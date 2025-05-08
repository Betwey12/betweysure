import Image from "next/image";
import predictPopUp from "@/assets/images/sportsbet-banner.gif";
import CloseTimes from "./close";
import usePopUp from "@/hooks/usePopUp";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";

export default function BottomPopUp() {
  const { setPopUp } = usePopUp();
  const popUpRef = useRef(null);
  useOnClickOutside(popUpRef, () => setPopUp("bottom"));

  return (
    <div className="hidden fixed w-full lg:flex items-center justify-center bottom-0 z-[9999]">
      <div className="relative" ref={popUpRef}>
        <Link
          href="https://aff.partners.io/visit/?bta=45585&nci=7670"
          target="_blank"
          onClick={() => setPopUp(null)}
        >
          <Image
            width={1080}
            height={107}
            src={predictPopUp}
            alt="banner"
            className="max-w-[808px] w-full h-[60px] lg:h-[100px]"
          />
        </Link>
        <CloseTimes
          className="lg:-top-2 lg:-right-2 bg-white rounded-full text-blue-one w-8 h-8"
          onClick={() => setPopUp(() => null)}
        />
      </div>
    </div>
  );
}
