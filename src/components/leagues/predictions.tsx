import {
  TPopularLeague,
  footballFreeTabs,
  footballPaidTabs,
  period,
} from "@/assets/data/data";
import useControlFootballPredictions from "@/hooks/useControlFootballPredictions";
import { cn, getDate } from "@/lib/utils";
import { Pagination } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import Freetabs from "../predictions/free-tabs";
import PaidTabs from "../predictions/paid-tabs";
import { Button } from "../ui/button";
import DateWidget from "../ui/date-widget";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FootballPredictionTable from "../predictions/football-predictions-table";
import LivePredictions from "../predictions/live-predictions";

interface PredictionsProps {
  popularLeague?: TPopularLeague;
  category: string;
}

export default function Predictions({
  popularLeague,
  category,
}: PredictionsProps) {
  return (
    <div className="flex flex-col gap-20">
      <ApiFootballPredictions
        popularLeague={popularLeague}
        category={category}
      />
      <BetMinerPredictions popularLeague={popularLeague} category={category} />
    </div>
  );
}

function BetMinerPredictions({ popularLeague, category }: PredictionsProps) {
  const t = useTranslations("PREDICTIONS_TABLE");
  const {
    from,
    handlePagination,
    handlePrediction,
    isLoading,
    livePredictions,
    showLive,
    predictionsPerPage,
    tableData,
    to,
    setShowDate,
    handlDateChange,
    showDate,
    fullDate,
    periodIndex,
    setFullDate,
    setPeriodIndex,
    activeTab,
    isLoadingLive,
  } = useControlFootballPredictions();

  const filteredPredictions =
    tableData?.filter((prediction) => {
      return popularLeague
        ? prediction.competition_full
            .toLowerCase()
            ?.includes(popularLeague.name.toLowerCase()) ||
            popularLeague?.name
              .toLowerCase()
              ?.includes(prediction.competition_full.toLowerCase()) ||
            prediction.competition_full
              .toLowerCase()
              .includes(
                popularLeague?.betMinerCompetitionFull?.toLowerCase() ??
                  "undefined"
              )
        : true;
    }) ?? [];

  const count = Math.ceil(
    (filteredPredictions?.length ?? 0) / predictionsPerPage
  );

  useEffect(() => {
    if (category && period.includes(category)) {
      setPeriodIndex(period.indexOf(category));
      setFullDate(getDate(category as "today" | "tomorrow" | "yesterday"));
    }
  }, [category, setFullDate, setPeriodIndex]);

  return (
    <>
      <div className="flex lg:items-center justify-between lg:flex-row flex-col gap-6">
        <div className="flex gap-6 flex-col">
          <Freetabs
            activeTab={activeTab}
            freeTabs={footballFreeTabs}
            handlePrediction={handlePrediction}
          />
          <PaidTabs
            activeTab={activeTab}
            handlePrediction={handlePrediction}
            paidTabs={footballPaidTabs}
          />
          <p>{t("UPGRADE_DESCRIPTION")}</p>
        </div>
        <div className="flex flex-col gap-4">
          <DateWidget
            fullDate={fullDate}
            handlDateChange={handlDateChange}
            handleShowDate={() => setShowDate(!showDate)}
            showDate={showDate}
          />

          <div className="flex items-center gap-4">
            {period.map((period, index) => (
              <Button
                key={period}
                className={cn("bg-gray-one text-white capitalize", {
                  "bg-cyan": periodIndex === index,
                })}
                onClick={() => {
                  setPeriodIndex(index);
                  setFullDate(
                    getDate(period as "today" | "tomorrow" | "yesterday")
                  );
                }}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col my-10">
        {showLive ? (
          <LivePredictions
            livePredictions={livePredictions}
            isLoading={isLoadingLive}
          />
        ) : (
          <FootballPredictionTable
            from={from}
            isLoading={isLoading}
            predictions={filteredPredictions}
            to={to}
          />
        )}
      </div>
      {(tableData?.length ?? 0) > 0 && (
        <div className="flex items-center lg:justify-end">
          <Pagination
            count={count}
            shape="rounded"
            onChange={handlePagination}
            className=""
            page={Math.ceil(from / predictionsPerPage) + 1}
          />
        </div>
      )}
    </>
  );
}

function ApiFootballPredictions({ popularLeague }: PredictionsProps) {
  const t = useTranslations("PREDICTIONS_TABLE");
  const [showDate, setShowDate] = useState(false);
  const [fullDate, setFullDate] = useState(getDate("today"));
  const [periodIndex, setPeriodIndex] = useState(1);

  const { data: apiFootballPredictionResponse, isLoading } = useQuery({
    queryKey: [
      "apiFootballPredictions",
      popularLeague?.apiFootballId,
      fullDate,
    ],
    queryFn: (): Promise<any> =>
      HTTPRequest.Get(
        `tips/api-football/${popularLeague?.apiFootballId}/${fullDate}`
      ),
  });

  const predictions = apiFootballPredictionResponse?.data;

  const handlDateChange = (newValue: dayjs.Dayjs) => {
    const newDate = newValue.format("YYYY-MM-DD");
    setFullDate(newDate);
    setShowDate(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <DateWidget
          fullDate={fullDate}
          handlDateChange={handlDateChange}
          handleShowDate={() => setShowDate(!showDate)}
          showDate={showDate}
        />

        <div className="flex items-center gap-4">
          {period.map((period, index) => (
            <Button
              key={period}
              className={cn("bg-gray-one text-white capitalize", {
                "bg-cyan": periodIndex === index,
              })}
              onClick={() => {
                setPeriodIndex(index);
                setFullDate(
                  getDate(period as "today" | "tomorrow" | "yesterday")
                );
              }}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-2 w-full">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      {predictions?.length === 0 ? (
        <div className="flex items-center justify-center py-6">
          <p>{t("NO_PREDICTIONS")}</p>
        </div>
      ) : (
        <div className="mt-10 grid lg:grid-cols-3 gap-10">
          {predictions?.map((prediction: any, index: any) => {
            const team = prediction?.teams;
            const matchPrediction = prediction?.predictions;
            return (
              <div key={index} className="flex flex-col gap-2">
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={team?.home?.logo}
                      className="w-8 h-8 rounded-full"
                      alt="logo"
                    />
                    <p>{team?.home?.name}</p>
                  </div>
                  <p>Vs</p>
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={team?.away?.logo}
                      className="w-8 h-8 rounded-full"
                      alt="logo"
                    />
                    <p>{team?.away?.name}</p>
                  </div>
                </div>
                <div>
                  <p>{matchPrediction?.advice}</p>
                  {matchPrediction?.under_over && (
                    <p>{matchPrediction?.under_over}</p>
                  )}
                  {matchPrediction?.goals?.home &&
                    matchPrediction?.goals?.away && (
                      <>
                        <p>Home Goals: {matchPrediction?.goals?.home}</p>
                        <p>Away Goals: {matchPrediction?.goals?.away}</p>
                      </>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
