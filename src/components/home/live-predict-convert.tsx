import ConvertCode from "../ui/convert-code";
import paripersaBanner from "../../assets/images/peripesa-gy.webp";
import FUndBetAccount from "./fund-bet-account";
import Link from "next/link";
import Image from "next/image";
import XdaysMultiple from "../landing/xdays-multiple";
import kanuBanner from "../../assets/images/kanu-banner.webp";

export default function LivePredictConvert() {
  return (
    <div className="flex flex-col gap-8 lg:w-[25%] items-center">
      <Link
        className="w-full block"
        href="https://aff.partners.io/visit/?bta=45585&nci=7670"
        target="_blank"
      >
        <Image
          width={300}
          height={250}
          src={kanuBanner}
          alt="banner"
          className="w-full rounded"
        />
      </Link>
      <XdaysMultiple partnerLink="https://aff.partners.io/visit/?bta=45585&nci=7670" />
      <FUndBetAccount />
      <Link
        href="https://combodef.com/L?tag=d_3380999m_38497c_&site=3380999&ad=38497"
        className="overflow-y-hidden block w-full px-10"
        aria-label="paripesa referral link"
      >
        <Image
          width={300}
          height={300}
          src={paripersaBanner}
          alt="peripesa banner"
          className="w-full"
        />
      </Link>
      <ConvertCode />
    </div>
  );
}
