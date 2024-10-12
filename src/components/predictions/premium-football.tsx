"use client";
import { Pagination } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";
import SelectedGames from "../ui/selected-games";
import useControlFootballPredictions from "@/hooks/useControlFootballPredictions";
import FootballPremiumTable from "./football-premium-table";
import { useQuery } from "@tanstack/react-query";
import usePredictions from "@/hooks/usePredictions";
import useChangeDate from "@/hooks/useChangeDate";

export default function PremiumFootball() {
  const { fullDate, handlDateChange, setShowDate, showDate, setFullDate } =
    useChangeDate("today");

  const predictionsPerPage = 10;
  const { data, handlePagination, from, to } = usePredictions({
    endpoint: `tips/football-premium/${fullDate}/${fullDate}`,
    queryKey: ["premium-football"],
    predictionsPerPage,
  });
  const premiumPredictions =
    (data?.data as unknown as TPremiumPrediction[]) ?? [];

  return (
    <>
      <div className="overflow-x-scroll">
        <div className="mt-10">
          <div className="lg:hidden grid grid-cols-2 text-center">
            {mobileHeading.map((heading) => (
              <h3 key={heading}>{heading}</h3>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-5 items-center px-6">
            {heading.map((heading) => (
              <h3 key={heading}>{heading}</h3>
            ))}
          </div>
          <div className="border border-gray-two bg-white py-4 mt-4 lg:mt-6 lg:py-6 dark:bg-blue-two dark:border-0">
            <div className="flex items-center justify-between px-4 lg:justify-center mb-4 gap-4">
              <FaInfoCircle className="text-yellow-500 text-lg" />

              <p className="text-center text-sm w-[80%] lg:w-auto">
                Click on a prediction to view more options, details, and tips
                for free
              </p>
            </div>

            <div className="flex flex-col">
              {premiumPredictions.slice(from, to).map((predictionObj) => (
                <FootballPremiumTable
                  key={predictionObj._id}
                  awayGoals={predictionObj.awayGoals}
                  awayLogo={predictionObj.awayLogo}
                  awayTeam={predictionObj.awayTeam}
                  competitionName={predictionObj.competition}
                  homeGoals={predictionObj.homeGoals}
                  homeLogo={predictionObj.homeLogo}
                  homeTeam={predictionObj.awayTeam}
                  leagueLogo={predictionObj.competitionLogo}
                  matchStatus={predictionObj.status}
                  tip={predictionObj.tip}
                />
              ))}
            </div>

            {([]?.length ?? 0) > 0 && (
              <div className="flex items-center lg:justify-end">
                <Pagination
                  count={3}
                  shape="rounded"
                  onChange={handlePagination}
                  className=""
                  page={Math.ceil(from / predictionsPerPage) + 1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <SelectedGames />
    </>
  );
}
const heading = ["League", "Home", "Away", "Prediction", "Result"];

const mobileHeading = ["Matches", "Prediction"];
