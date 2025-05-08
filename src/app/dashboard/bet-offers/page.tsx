import Image from "next/image";
import Link from "next/link";
import oneXPayout from "@/assets/images/1x-payout.gif";
import bonus from "@/assets/images/bonus.gif";
import peripesa from "@/assets/images/peripesa-wb.webp";

export default function BetOffers() {
  return (
    <div>
      <h1 className="text-2xl">Bet Offers</h1>
      <div className="mt-6 py-4 lg:p-6 flex flex-wrap gap-4 justify-between">
        {offers.map((offer) => (
          <Link key={offer.name} href={offer.url} target="_blank">
            <Image width={500} height={500} src={offer.img} alt={offer.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const offers = [
  {
    name: "1xbet",
    url: "https://refpa4293501.top/C?tag=d_2898437m_8143c_&site=2898437&ad=8143&urlred=https%3A%2F%2Fng.1x001.com%2Fen",
    img: oneXPayout,
  },
  {
    name: "Bet365",
    url: "https://refpa4293501.top/C?tag=d_2927467m_2811c_&site=2927467&ad=2811&urlred=https%3A%2F%2Fng.1x001.com%2Fen",
    img: bonus,
  },
  {
    name: "Bet9ja",
    url: "https://refpa4293501.top/C?tag=d_2927467m_4593c_&site=2927467&ad=4593&urlred=https%3A%2F%2Fng.1x001.com%2Fen",
    img: peripesa,
  },
];
