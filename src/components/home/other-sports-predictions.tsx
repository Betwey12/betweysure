"use client";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { getDate } from "../../lib/utils";
import usePredictions from "../../hooks/usePredictions";
import dayjs from "dayjs";
import OtherSportsPredictionTable from "../predictions/othersports-prediction-table";
import { useTranslations } from "next-intl";
import DateWidget from "../ui/date-widget";
import LinkSelect from "../ui/link-select";
import { usePathname } from "next/navigation";

export default function OtherSportsPredictions() {
  const pathname = usePathname();
  const t = useTranslations("PREDICTIONS_TABLE");
  const [showDate, setShowDate] = useState(false);
  const [period, setPeriod] = useState<"today" | "yesterday" | "tomorrow">(
    "today",
  );
  const periodArray: Array<{
    name: string;
    filter: "yesterday" | "today" | "tomorrow";
  }> = [
    {
      name: t("YESTERDAY"),
      filter: "yesterday",
    },
    {
      name: t("TODAY"),
      filter: "today",
    },
    {
      name: t("TOMORROW"),
      filter: "tomorrow",
    },
  ];

  const [fullDate, setFullDate] = useState(getDate(period));
  const sportOptions = [
    {
      href: "/basketball",
      title: "Basketball",
    },
    {
      href: "/baseball",
      title: "Baseball",
    },
    {
      href: "/tennis",
      title: "Tennis",
    },
    {
      href: "/ice-hockey",
      title: "Ice Hockey",
    },
  ];
  const selectedSport =
    sportOptions.find((option) => option.href === pathname)?.title ??
    sportOptions[Math.floor(Math.random() * sportOptions.length)]?.title ??
    "";
  const option = selectedSport.toLowerCase().replace(/\s/g, "");
  const endpoint = `tips/othersports/${option}/${fullDate}`;
  const queryKey = ["predictions", period, option];
  const predictionsPerPage = 9;

  const { data, isLoading, from, to } = usePredictions({
    endpoint,
    queryKey,
    predictionsPerPage,
  });

  const predictions = data?.data as TOtherSportsResponse["data"] | undefined;
  const handlDateChange = (newValue: dayjs.Dayjs) => {
    const newDate = newValue.format("YYYY-MM-DD");
    setFullDate(newDate);
    setShowDate(false);
  };

  return (
    <div
      id={option}
      className="border shadow border-gray-three rounded-lg lg:rounded-[40px] text-blue-three overflow-x-scroll  min-h-[400px] dark:bg-blue-one dark:border-0 dark:text-white"
    >
      <div className="p-4 md:py-7 md:px-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <h2 className="text-xl font-bold">{t("OTHER_SPORTS_PREDICTIONS")}</h2>
          <div className="relative">
            <DateWidget
              showDate={showDate}
              handleShowDate={() => setShowDate(!showDate)}
              handlDateChange={handlDateChange}
              fullDate={fullDate}
              alignRight
            />
          </div>
        </div>
        {/* <Select /> */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mt-8">
          <div className="w-[260px]">
            <div></div>
            <LinkSelect options={sportOptions} selectedOption={selectedSport} />
          </div>
          <div className="flex items-center gap-4">
            {periodArray.map((periodObj) => (
              <Button
                key={periodObj.name}
                onClick={() => {
                  setFullDate(
                    getDate(
                      periodObj.name.toLowerCase() as
                        | "today"
                        | "tomorrow"
                        | "yesterday",
                    ),
                  );
                  setPeriod(periodObj.filter);
                }}
                className={cn(
                  "min-w-max hover:text-white text-center bg-transparent",
                  {
                    "text-cyan": periodObj.filter === period,
                  },
                )}
              >
                {periodObj.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <OtherSportsPredictionTable
            from={from}
            isLoading={isLoading}
            predictions={predictions}
            to={to}
          />
        </div>
      </div>
    </div>
  );
}
