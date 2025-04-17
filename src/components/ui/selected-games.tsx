"use client";
import { useEffect, useRef, useState } from "react";
import oneXBet from "../../assets/images/1xbet.webp";
import { IoMdClose } from "react-icons/io";
import MySelect from "../ui/my-select";
import { formatCurrency } from "../../lib/utils";
import { useSlip } from "@/hooks/useSlip";
import { useOnClickOutside } from "usehooks-ts";
import { outcomes } from "@/assets/data/data";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export default function SelectedGames() {
  const { slip, setSlip } = useSlip();
  const [showBetNaija, setShowBetNaija] = useState(false);
  const [alwaysOnTop, setAlwaysOnTop] = useState(false);

  const [selectedOption, setSelectedOption] = useState(option[1]);
  const slipRef = useRef(null);
  const betPartner = "1XBET";
  const slipTimedOut = slip?.timedOut;
  const totalOdds = 12;
  const games = slip.predictions || [];
  const totalGames = games.length;

  useOnClickOutside(slipRef, () =>
    setShowBetNaija(alwaysOnTop && totalGames ? true : false),
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSlip((prevSlip) => ({
        ...prevSlip,
        timedOut: true,
      }));
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [setSlip]);

  return (
    <>
      {!slipTimedOut && (
        <Button
          className="flex h-auto fixed hover:bg-cyan bottom-0 right-4 lg:right-[15%] py-3 lg:py-4 border-cyan justify-between max-w-[90%] w-full lg:max-w-sm bg-white z-[90] border-2 dark:text-white dark:bg-blue-three"
          onClick={() => setShowBetNaija(!showBetNaija)}
        >
          <span className="flex items-center gap-2">
            <span className="border border-gray-two rounded p-1 w-8 h-8">
              {totalGames}
            </span>
            <span>BETSLIP</span>
          </span>
          {!!totalGames && (
            <span>
              {betMultiples[totalGames - 1]} @ {totalOdds}
            </span>
          )}
        </Button>
      )}
      {showBetNaija && (
        <div
          ref={slipRef}
          className="fixed bottom-0 text-white right-4 bg-[#2b2d36] lg:right-[15%] py-2 border-cyan w-full lg:max-w-sm max-w-[90%] z-[90] border-2 dark:text-white dark:bg-blue-three"
        >
          <div className="flex items-center justify-between w-full px-4 pb-2 border-b border-gray-two">
            <Image
              width={90}
              height={40}
              src={oneXBet}
              alt="1xbet"
              className="w-[90px] h-[40px]"
            />

            <div className="flex items-center gap-2">
              <Link
                href="https://refpa4293501.top/L?tag=d_2898437m_1573c_&site=2898437&ad=1573"
                className="bg-white text-blue-three rounded py-2 px-3 text-sm"
              >
                Join now
              </Link>
              <button className="" onClick={() => setShowBetNaija(false)}>
                <IoMdClose className="font-bold text-xl" />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center max-h-[300px] min-h-[300px] bg-[#343a44]">
            {games.length < 1 && (
              <div className="mt-4 p-4 max-w-sm flex flex-col items-center gap-3">
                <p className="text-yellow-sunset text-center text-base capitalize">
                  login or register to use bet slip
                </p>
                <p className="text-sm text-center">
                  Register at {betPartner} or login to your account to send your
                  betweysure bets slip to {betPartner}
                </p>
                <button className="bg-white rounded shadow text-blue-three px-4 py-2">
                  Register at {betPartner}
                </button>
              </div>
            )}
            <div className="flex flex-col w-full overflow-y-scroll">
              {games.map((prediction) => (
                <div
                  key={prediction.id}
                  className="flex w-full items-center px-4 py-2 border-y border-dotted border-gray-two justify-between"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setSlip((prevSlip) => ({
                          ...prevSlip,
                          predictions: prevSlip.predictions.filter(
                            (pred) =>
                              !(
                                pred.id === prediction.id &&
                                prediction.resultKey === pred.resultKey
                              ),
                          ),
                        }))
                      }
                      className="text-gray-one border border-gray-two text-2xl w-6 h-6 rounded flex items-center justify-center"
                    >
                      <IoMdClose />
                    </button>
                    <div className="">
                      <p>
                        {prediction?.resultKey
                          ? outcomes[prediction?.resultKey]
                          : "N/A"}
                      </p>
                      <p className="text-sm">
                        {prediction?.homeTeam} v {prediction?.awayTeam}
                      </p>
                    </div>
                  </div>
                  <p className="text-cyan">X.XX</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#2b2d36] py-3 px-4 border-b border-gray-two text-sm">
            {!!games.length && (
              <>
                <label
                  htmlFor="always"
                  className="flex items-center gap-2 select-none"
                >
                  <input
                    type="checkbox"
                    id="always"
                    checked={alwaysOnTop}
                    onChange={(e) => setAlwaysOnTop(e.target.checked)}
                  />
                  Always on top
                </label>

                <button
                  onClick={() => {
                    setAlwaysOnTop(false);
                    setSlip((prevSlip) => ({
                      ...prevSlip,
                      predictions: [],
                    }));
                  }}
                >
                  Clear Slip
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-center bg-[#2b2d36] border-b border-gray-two py-3">
            {!!totalGames && <p>{betMultiples[totalGames - 1]}</p>}
          </div>
          <div className="flex items-center justify-between px-4 bg-[#2b2d36] py-3">
            <div className="text-blue-three flex flex-col justify-center items-center gap-2 dark:text-white">
              <p className="text-white">Stake</p>
              <MySelect
                options={option}
                bgDashboard={true}
                selectedOption={selectedOption}
                handleSelectOption={(option) => setSelectedOption(option)}
                dropTop={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-white">Returns</p>
              <p className="font-medium text-2xl">
                {formatCurrency(totalOdds * totalGames)}
              </p>
            </div>
          </div>

          <Link
            target="_blank"
            href="https://refpa4293501.top/L?tag=d_2898437m_1573c_&site=2898437&ad=1573"
            className="block w-full py-3 bg-cyan text-center text-blue-three"
          >
            Back it at {betPartner}
          </Link>
          <p className="text-xs px-4 pt-2">
            Odds displayed at Betweysure are correct at time of publication.
            Your selections will be added to your bet slip at {betPartner} and
            updated with the live odds, if they have changed, when you click
            Back It At {betPartner}
          </p>
        </div>
      )}
    </>
  );
}
const option = ["₦50", "₦100", "₦200", "₦500", "₦1000"];

const betMultiples = [
  "Single",
  "Double",
  "Treble",
  "Four-Fold",
  "Five-Fold",
  "Six-Fold",
  "Seven-Fold",
  "Eight-Fold",
  "Nine-Fold",
  "Ten-Fold",
  "Eleven-Fold",
  "Twelve-Fold",
  "Thirteen-Fold",
  "Fourteen-Fold",
  "Fifteen-Fold",
  "Multiple",
];
