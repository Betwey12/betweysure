"use client";
import { cn, getDate } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import * as yup from "yup";
import { useEffect, useState } from "react";
import usePredictions from "@/hooks/usePredictions";
import { outcomes } from "@/assets/data/data";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import XdaysMultiple from "../home/xdays-multiple";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import useHasPlan from "@/hooks/useHasPlan";
import Spinner from "../ui/spinner";
import Link from "next/link";

const builderSchema = yup.object().shape({
  games: yup.number().required("Please select number of games"),
  timeframe: yup.string().required("Please select timeframe"),
  markets: yup
    .array()
    .of(yup.string().required("Market is required"))
    .required("Please select markets")
    .typeError("Please select market")
    .min(1, "Please select at least one market"),
});

type TBuilderValues = yup.InferType<typeof builderSchema>;

interface AccumulatorBuilderFormProps {
  bookie?: string;
}

export default function AccumulatorBuilderForm({
  bookie = "1xbet",
}: AccumulatorBuilderFormProps) {
  const queryClient = useQueryClient();
  const { hasPlan } = useHasPlan();
  const { user } = useAuth();
  const accaUseLeft = user?.accaUseLeft;
  const canUseAcca = (accaUseLeft ?? 5) > 0 || hasPlan;
  const t = useTranslations("ACCA_BUILDER");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      games: 3,
      timeframe: "Next 4 hours",
      markets: [],
    },
    resolver: yupResolver(builderSchema),
  });
  const [accaOptions, setAccaOptions] = useState<TBuilderValues>();
  const [fullDate, setFullDate] = useState(getDate("today"));
  const today = getDate("today");
  const queryKey = ["predictions", fullDate];
  const endpoint = `tips/football-history/${today}/${fullDate}`;

  const { data, isLoading } = usePredictions({
    endpoint,
    predictionsPerPage: 10,
    queryKey,
  });
  const predictions = (data?.data ?? []) as Prediction[];

  const { mutateAsync } = useMutation({
    mutationFn: (data: { accaUsed: boolean }) =>
      HTTPRequest.Post("users/edit-profile", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", user?.uid],
      });
    },
  });

  const durations: Record<string, number> = {
    "Next 4 hours": 4,
    "Next 12 hours": 12,
    "Next 24 hours": 24,
    "Next 48 hours": 48,
  };

  const timeframeDuration = durations[accaOptions?.timeframe ?? "Next 4 hours"];
  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + timeframeDuration);

  const hwd: Record<string, keyof Prediction> = {
    "1X": "home_win",
    X: "draw",
    "2": "away_win",
    "1": "home_win",
    "2X": "away_win",
    "12": "draw",
  };

  const filters: Record<string, (prediction: Prediction) => number> = {
    "1X2": (prediction: Prediction) =>
      +(prediction[hwd[prediction["1x2"]]] ?? 0),
    "Both Teams to Score": (prediction: Prediction) =>
      +(prediction.both_teams_to_score ?? 0),
    "Over 2.5 Goals": (prediction: Prediction) =>
      +(prediction.over25goals ?? 0),
    "Over 1.5 Goals": (prediction: Prediction) =>
      +(prediction.over15goals ?? 0),
  };
  const isValidValue = (option: string, value: number) =>
    (option === "Over 1.5 Goals" && value >= 90) ||
    (option !== "Over 1.5 Goals" && value >= 60);

  const isValidMarketOption = (prediction: Prediction) =>
    accaOptions?.markets?.some((option) => {
      const value = filters[option](prediction) ?? 0;
      return isValidValue(option, value);
    });

  const isValidPrediction = (prediction: Prediction) => {
    const predictionDate = new Date(prediction.date);
    const isWithinTimeFrame =
      predictionDate < futureDate && predictionDate > new Date();

    const isValidMarket = isValidMarketOption(prediction);

    return isWithinTimeFrame && isValidMarket;
  };

  const filteredPredictions = predictions
    ?.filter(isValidPrediction)
    .map((prediction) => {
      const marketOption = accaOptions?.markets?.find((option) => {
        const value = filters[option](prediction) ?? 0;
        return isValidValue(option, value);
      });

      return {
        home: prediction.homeTeam,
        away: prediction.awayTeam,
        prediction:
          marketOption === "1X2" ? outcomes[prediction["1x2"]] : marketOption,
      };
    });
  const accaGames = filteredPredictions?.slice(0, accaOptions?.games);

  function onSubmit(data: TBuilderValues) {
    const days: Record<
      string,
      "yesterday" | "today" | "tomorrow" | "last week" | "next two days"
    > = {
      "Next 4 hours": "today",
      "Next 12 hours": "today",
      "Next 24 hours": "tomorrow",
      "Next 48 hours": "next two days",
    };
    setAccaOptions(data);
    setFullDate(getDate(days[data.timeframe]));
  }

  useEffect(() => {
    const updateAccaUse = async () => {
      try {
        const response = await mutateAsync({ accaUsed: true });
        if (response?.success) {
          toast.success("Your acca has been built successfully");
        }
      } catch (error) {
        console.error("Error building acca:", error);
      }
    };
    if (accaGames?.length === accaOptions?.games) {
      updateAccaUse();
    }
  }, [accaGames.length, accaOptions?.games, mutateAsync]);

  return (
    <div className="w-full px-4 relative text-blue-one dark:text-white flex flex-col items-center">
      <div className="grid lg:grid-cols-3 gap-20 w-full">
        {isLoading ? (
          <Spinner />
        ) : (
          <XdaysMultiple
            maxAccuracy={60}
            maxOdds={3}
            investment={300}
            noOfGames={3}
            partnerLink="https://refpa7921972.top/L?tag=d_2927467m_1573c_&site=2927467&ad=1573"
            bookie={bookie}
          />
        )}

        <form
          className="flex flex-col w-full items-center justify-center my-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="w-full lg:max-w-xs flex flex-col gap-4">
            <fieldset className="flex flex-col gap-2 w-full">
              <label htmlFor="games" className="text-center">
                {t("NO_OF_GAMES")}
              </label>
              <select
                id="games"
                className={cn(
                  "w-full px-4 py-3 rounded bg-white text-lg text-gray-one focus:outline-none shadaow border-gray-one border",
                  {
                    "border-red-500": errors.games,
                  }
                )}
                {...register("games")}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <option key={index} value={index + 3}>
                    {index + 3}
                  </option>
                ))}
              </select>
              {errors.games && (
                <p className="text-red-500 text-xs">{errors.games.message}</p>
              )}
            </fieldset>
            <fieldset className="flex flex-col gap-2 w-full">
              <label className="text-center">{t("WHAT_MARKETS")}</label>
              {[
                "1X2",
                "Both Teams to Score",
                "Over 2.5 Goals",
                "Over 1.5 Goals",
              ].map((m) => (
                <label
                  key={m}
                  htmlFor={m}
                  className="flex items-center gap-2 text-sm cursor-pointer select-none"
                >
                  <input
                    {...register("markets")}
                    type="checkbox"
                    id={m}
                    hidden
                    className="peer"
                    value={m}
                  />
                  <div
                    className={cn(
                      "w-5 h-5 rounded bg-white border border-cyan peer-checked:bg-[#2A2E45] flex items-center justify-center text-white",
                      {
                        "border-red-500": errors.markets,
                      }
                    )}
                  >
                    <FaCheck className="text-xs" />
                  </div>
                  <span>{m}</span>
                </label>
              ))}
              {errors.markets && (
                <p className="italic text-xs text-red-500">
                  {errors.markets.message}
                </p>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2 w-full">
              <label htmlFor="timeframe" className="text-center">
                {t("SELECT_TIMEFRAME")}
              </label>
              <select
                id="timeframe"
                className={cn(
                  "w-full px-4 py-3 rounded bg-white text-lg text-gray-one focus:outline-none shadaow border-gray-one border",
                  {
                    "border border-red-500": errors.timeframe,
                  }
                )}
                {...register("timeframe")}
              >
                {[
                  "Next 4 hours",
                  "Next 12 hours",
                  "Next 24 hours",
                  "Next 48 hours",
                ].map((t) => (
                  <option value={t} key={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.timeframe && (
                <p className="text-red-500 text-xs">
                  {errors.timeframe.message}
                </p>
              )}
            </fieldset>
            {user && (
              <Button
                disabled={!canUseAcca}
                className="bg-cyan text-white disabled:bg-gray-one disabled:cursor-not-allowed flex items-center justify-center py-3"
              >
                {t("BUILD_ACCA")}
              </Button>
            )}
          </fieldset>
        </form>
        {isLoading ? (
          <Spinner />
        ) : (
          <XdaysMultiple
            maxAccuracy={60}
            maxOdds={4}
            investment={500}
            noOfGames={3}
            partnerLink="https://combodef.com/L?tag=d_3380999m_38497c_&site=3380999&ad=38497"
            bookie={bookie}
          />
        )}
      </div>

      {!user ? (
        <Link
          href="/auth/login"
          className="bg-cyan px-4 py-2 rounded text-white mt-4 cursor-pointer"
        >
          {t("LOGIN_TO_BUILD")}
        </Link>
      ) : (
        !canUseAcca && (
          <>
            <p className="text-red-400 mt-4 max-w-lg text-center">
              {t("MAX_SLIPS")}
            </p>
            <Link
              href={"/dashboard/buy-plan"}
              className="bg-cyan px-4 py-2 rounded text-white mt-4 cursor-pointer"
            >
              {t("UPGRADE_BUTTON")}
            </Link>
          </>
        )
      )}

      {accaOptions?.markets?.length && (
        <>
          {accaGames?.length > 0 ? (
            <div className="flex flex-col gap-2 my-20 items-start">
              {accaGames.length < (accaOptions?.games ?? 0) && (
                <p className="text-red-400 mb-10 leading-4">
                  {t("INCOMPLETE_GAMES", {
                    noOfGames: accaGames?.length,
                  })}
                </p>
              )}

              <p className="bg-cyan rounded-[0_999px_999px_0] px-4 py-2 text-white">
                {t("YOUR_ACCA")}
              </p>

              {accaGames?.map((game, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center shadow justify-center w-full py-3 gap-3 border-gray-two odd:border-b dark:bg-blue-one dark:border-0"
                >
                  <p className="text-gray-one">
                    {game.home} VS {game.away}
                  </p>
                  <p className="font-bold">{game.prediction}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-400 mb-10">{t("NO_MATCHES")}</p>
          )}
        </>
      )}
    </div>
  );
}
