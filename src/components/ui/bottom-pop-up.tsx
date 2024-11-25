import Image from "next/image";
import predictPopUp from "@/assets/images/predict-win.webp";
import CloseTimes from "./close";

export default function BottomPopUp() {
  return (
    <div className="hidden fixed w-full lg:flex items-center justify-center bottom-0 z-[9999]">
      <div className="relative">
        <Image
          width={1080}
          height={107}
          src={predictPopUp}
          alt="banner"
          className="max-w-[808px] w-full h-[60px] lg:h-[100px] object-cover"
        />
        <CloseTimes className="lg:-top-2 lg:-right-2 bg-white rounded-full text-blue-one w-8 h-8" />
      </div>
    </div>
  );
}
