import ConvertCode from "../ui/convert-code";
import paripersaBanner from "../../assets/images/peripesa-gy.webp";
import XdaysMultiple from "./xdays-multiple";
import FUndBetAccount from "./fund-bet-account";
import Link from "next/link";
import Image from "next/image";

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
          src="https://aff-partners-io.ck-cdn.com/tn/serve/?cid=1160147"
          alt="banner"
          className="w-full rounded"
        />
      </Link>
      <XdaysMultiple partnerLink="https://refpa7921972.top/L?tag=d_2927467m_1573c_&site=2927467&ad=1573" />
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
          alt=""
          className="w-full"
        />
      </Link>
      <ConvertCode />
    </div>
  );
}
