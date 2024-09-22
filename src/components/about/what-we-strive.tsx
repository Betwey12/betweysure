import { useTranslations } from "next-intl";
import value from "../../assets/images/value.webp";
import Image from "next/image";

export default function WhatWeStrive() {
  const { t, values } = useWhatWeStrive();

  return (
    <div className="px-4 md:px-10 lg:px-20 flex flex-col items-center text-blue-three dark:text-white">
      <h3 className="text-2xl lg:text-4xl text-center mb-4 max-w-5xl">
        {t("TITLE")}
      </h3>
      <div className="w-full flex flex-col gap-6 lg:flex-row items-center justify-evenly mt-8 lg:mt-16">
        <Image
          width={600}
          height={500}
          src={value}
          alt="value"
          className="rounded-3xl lg:max-w-[40%]"
        />
        <div className="flex flex-col gap-4 lg:max-w-[50%]">
          {values.map(({ key, value }) => (
            <div className="flex items-center gap-4" key={key}>
              <span className="text-2xl text-yellow-one font-semibold">
                {key}
              </span>
              <p className="text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function useWhatWeStrive() {
  const t = useTranslations("WHAT_WE_STRIVE");
  const values = [
    {
      key: "01",
      value: t("VALUE_ONE"),
    },
    {
      key: "02",
      value: t("VALUE_TWO"),
    },
    {
      key: "03",
      value: t("VALUE_THREE"),
    },
    {
      key: "04",
      value: t("VALUE_FOUR"),
    },
    {
      key: "05",
      value: t("VALUE_FIVE"),
    },
    {
      key: "06",
      value: t("VALUE_SIX"),
    },
  ];

  return {
    t,
    values,
  };
}
