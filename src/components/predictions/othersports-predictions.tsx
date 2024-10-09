"use client";
import { useState } from "react";
import { Pagination, capitalize } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { otherSportGroupings, period } from "@/assets/data/data";
import useChangeDate from "@/hooks/useChangeDate";
import usePredictions from "@/hooks/usePredictions";
import useFilterOtherSports from "@/hooks/useFilterOtherSports";
import PredictionsFilter from "./predictions-filter";
import Freetabs from "./free-tabs";
import PaidTabs from "./paid-tabs";
import OtherSportsPredictionTable from "./othersports-prediction-table";
import SelectedGames from "../ui/selected-games";

export default function OtherSportsPredictions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [periodIndex, setPeriodIndex] = useState(1);
  const [activeTab, setActiveTab] = useState("botd");
  const sport = searchParams.get("sport") ?? "basketball";
  const currentPeriod = period[periodIndex] as TPeriod;

  const sportGrouping = otherSportGroupings[sport];

  const { fullDate, handlDateChange, setFullDate, setShowDate, showDate } =
    useChangeDate(currentPeriod);
  const endpoint = `tips/othersports/${sport
    .replace(/\s/g, "")
    ?.toLowerCase()}/${fullDate}`;
  const queryKey = ["predictions", fullDate, sport?.toLowerCase()];

  const predictionsPerPage = 10;

  const { data, handlePagination, isLoading, from, to } = usePredictions({
    endpoint,
    queryKey,
    predictionsPerPage,
  });

  const payload = (data?.data || []) as TOtherSportsResponse["data"];
  const [searchValue, setSearchValue] = useState("");

  const { tableData, handleFilterPrediction } = useFilterOtherSports({
    payload,
    setActiveTab,
    handlePagination,
  });

  const filteredData = tableData
    ?.filter((item: any) => {
      return (
        item?.league_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item?.country_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item?.home_team_name
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        item?.away_team_name?.toLowerCase().includes(searchValue.toLowerCase())
      );
    })
    .sort((a, b) => {
      return a.league_name.localeCompare(b.league_name);
    });

  const count = Math.ceil((filteredData?.length ?? 0) / predictionsPerPage);

  const handleSelectOption = (option: string) => {
    router.push(`/dashboard/other-sports?sport=${option}`);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <PredictionsFilter
          options={options}
          setShowDate={setShowDate}
          handlDateChange={handlDateChange}
          showDate={showDate}
          fullDate={fullDate}
          periodIndex={periodIndex}
          setFullDate={setFullDate}
          setPeriodIndex={setPeriodIndex}
          title={`${capitalize(sport)} Predictions`}
          selectedOption={sport}
          handleSelectOption={handleSelectOption}
          setSearchValue={setSearchValue}
          handlePagination={handlePagination}
        />
      </div>

      <div className="flex flex-col gap-8 mt-10">
        <Freetabs
          activeTab={activeTab}
          freeTabs={sportGrouping.free as string[]}
          handlePrediction={handleFilterPrediction}
          sport={sport}
        />
        <PaidTabs
          activeTab={activeTab}
          handlePrediction={handleFilterPrediction}
          paidTabs={sportGrouping.paid}
          sport={sport}
        />
      </div>
      <div className="bg-white border border-gray-two py-6 px-4 lg:px-6 mt-10 dark:bg-blue-two dark:border-0">
        <OtherSportsPredictionTable
          from={from}
          isLoading={isLoading}
          predictions={filteredData}
          to={to}
          bgDashboard={true}
          sport={sport}
        />
        <div className="flex items-center lg:justify-end">
          <Pagination
            count={count}
            shape="rounded"
            onChange={handlePagination}
            className="mt-4"
            page={Math.ceil(from / predictionsPerPage) + 1}
          />
        </div>
      </div>
      <SelectedGames />
    </>
  );
}

const options = ["basketball", "baseball", "tennis", "ice hockey"];
