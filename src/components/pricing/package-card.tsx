import { EPaidPlanNames, EPlanNames } from "@/assets/data/data";
import { cn, formatCurrency } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FaCheck, FaMinus, FaTimes } from "react-icons/fa";
import AuthedLink from "../ui/authed-link";
import { FaStar } from "react-icons/fa6";

type TPackage = {
  title: string;
  name: string;
  price: number;
  features: string[];
  types: string[];
}[];

export default function PackageCard({
  predictionPackage,
  timeframe,
  isSupported,
  currencyCode,
}: {
  predictionPackage: TPackage[number];
  timeframe: string;
  currencyCode: string;
  isSupported: boolean;
}) {
  const t = useTranslations("PRICING_PLANS");
  const isFree = predictionPackage.name === EPlanNames.FREE;

  return (
    <div
      className={cn(
        "flex relative flex-col border border-gray-two items-center justify-between gap-4 px-4 lg:p-6 py-12 lg:rounded-xl shadow-lg bg-white text-blue-three dark:bg-blue-one dark:border-0 dark:text-white rounded",
        {
          "dark:bg-blue-one dark:text-white":
            predictionPackage.name !== EPaidPlanNames.PREMIUM,
          "bg-gradient-to-bl to-purple-royal from-purple-800 via-purple-500 text-white scale-y-110":
            predictionPackage.name === EPaidPlanNames.PREMIUM,
        },
      )}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="capitalize text-center text-2xl lg:text-3xl max-w-[250px]">
            {predictionPackage.title} Plan
          </h2>

          <div className="w-[80%] h-[1px] bg-yellow-sunset lg:my-4 my-2" />

          <div className="flex items-center">
            <p className="font-bold text-2xl">
              {formatCurrency(
                predictionPackage.price,
                isSupported ? currencyCode : "USD",
              )}
            </p>
            <p className="font-bold">/{timeframe}</p>
          </div>

          <div className="w-[40%] h-[1px] bg-yellow-sunset lg:my-4 my-2" />
        </div>
        <ul className="flex flex-col gap-2 w-full">
          {predictionPackage.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              {feature.includes("No") ? (
                <FaTimes className="text-red-700" />
              ) : feature.includes("ACCA") || feature.includes("AI") ? (
                <FaStar className="text-yellow-one" />
              ) : (
                <FaCheck
                  className={cn("text-green-700", {
                    "text-cyan":
                      predictionPackage.name === EPaidPlanNames.PREMIUM,
                  })}
                />
              )}
              <span className="text-xs flex items-center gap-2">{feature}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full list-inside pl-4">
          {predictionPackage.types.map((type) => (
            <li key={type} className="flex items-center gap-2">
              <FaMinus />
              <span className="text-xs">{type}</span>
            </li>
          ))}
        </ul>
      </div>
      <AuthedLink
        href="/dashboard/buy-plan"
        title={isFree ? t("GET_STARTED") : t("SUBSCRIBE_NOW")}
        className="w-full rounded lg:text-base text-xs px-2 lg:px-4 flex items-center justify-center py-3 bg-yellow-sunset mt-20 text-white"
      />
    </div>
  );
}
