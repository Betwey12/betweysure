"use client";
import { cn } from "../../lib/utils";
import { useState } from "react";
import MySelect from "../ui/my-select";
import { getDate } from "../../lib/utils";
import usePredictions from "../../hooks/usePredictions";
import dayjs from "dayjs";
import FootballPredictionTable from "../predictions/football-predictions-table";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import DateWidget from "../ui/date-widget";

export default function FreeFootballPredictions() {
  const t = useTranslations("PREDICTIONS_TABLE");
  const options = [
    "All",
    "La liga",
    "Premier league",
    "Bundesliga",
    "Seriea",
    "Ligue1",
  ];
  const period: {
    name: string;
    filter: "yesterday" | "today" | "tomorrow";
  }[] = [
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

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showDate, setShowDate] = useState(false);
  const [periodFilter, setPeriodFilter] = useState<
    "yesterday" | "today" | "tomorrow"
  >("today");

  const [fullDate, setFullDate] = useState(getDate(periodFilter));

  const endpoint = `tips/football/${fullDate}/${fullDate}`;
  const queryKey = ["predictions", fullDate];
  const predictionsPerPage = 9;

  const {
    data: predictions,
    from,
    to,
    isLoading,
  } = usePredictions({
    endpoint,
    queryKey,
    predictionsPerPage,
  });

  const payload = predictions?.data as TPredictionResponse["data"] | undefined;

  const filteredPredictions =
    payload?.filter((prediction) => {
      const filter =
        selectedOption.toLowerCase() === "all"
          ? true
          : prediction.competition_full
              .toLowerCase()
              .includes(selectedOption.toLowerCase());
      return filter;
    }) || [];

  const handlDateChange = (newValue: dayjs.Dayjs) => {
    const newDate = newValue.format("YYYY-MM-DD");
    setFullDate(newDate);
    setShowDate(false);
  };

  return (
    <div
      id="football-predictions"
      className="border-gray-three shadow border rounded-lg lg:rounded-[40px] p-4 md:py-7 md:px-6 text-blue-three overflow-x-scroll min-h-[400px] dark:bg-blue-one dark:text-white dark:border-0"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {t("FREE_FOOTBALL_PREDICTIONS")}
          </h2>
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
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="w-[260px]">
            <MySelect
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
          <div className="flex items-center gap-4">
            {period.map((period) => (
              <Button
                key={period.name}
                onClick={() => {
                  setFullDate(getDate(period.name.toLowerCase() as TPeriod));
                  setPeriodFilter(period.filter);
                }}
                className={cn("text-center bg-transparent", {
                  "text-cyan": period.filter === periodFilter,
                })}
              >
                {period.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-2 px-6 text-center">
          {mobileHeading.map((heading) => (
            <h4 className="text-xs" key={heading}>
              {heading}
            </h4>
          ))}
        </div>

        <div className="lg:grid grid-cols-6 px-6 text-center hidden">
          {headings.map((heading) => (
            <h4 className="text-xs" key={heading}>
              {heading}
            </h4>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <FootballPredictionTable
            predictions={filteredPredictions}
            from={from}
            to={to}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

const headings = [
  "League",
  "Home",
  "Away",
  "Predicted Score",
  "Prediction",
  "Result",
];

const mobileHeading = ["Matches", "Prediction"];
