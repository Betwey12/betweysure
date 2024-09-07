"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface StandingsProps {
  leagueStandings?: TLeagueResponse["data"]["standings"]["response"];
  isLoading: boolean;
  league?: string;
}

export default function Standings({
  leagueStandings,
  isLoading,
  league,
}: StandingsProps) {
  const t = useTranslations("STANDINGS");
  const standings = leagueStandings?.[0]?.league?.standings || [];
  const [to, setTo] = useState(6);
  const season = leagueStandings?.[0]?.league?.season ?? "";

  return isLoading ? (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin" />
    </div>
  ) : standings?.length > 0 ? (
    <>
      <p className="mb-6">
        {t("DESCRIPTION", {
          league: league,
          year: season,
          yearPlusOne: +season + 1,
        })}
      </p>

      {standings.map((standingGroup, i) => {
        const alphabetIndex = i + 65;
        const alphabet = String.fromCharCode(alphabetIndex);
        return (
          <div className="flex flex-col" key={i}>
            {(leagueStandings?.length ?? 1) > 0 && (
              <h1 className="text-center py-4">Group {alphabet}</h1>
            )}
            <table
              width="100%"
              className="standings table text-sm"
              id="standings"
              align="right"
              cellPadding="2"
              cellSpacing="0"
            >
              <thead>
                <tr className="">
                  <td colSpan={2}>OVERALL TABLE</td>
                  {["PTS", "GP", "W", "D", "L", "GF", "GA", "+/-"].map((d) => (
                    <td className="text-center align-middle py-2" key={d}>
                      <div className="flex items-center justify-center">
                        <span className="rounded-full shadow border-gray-two border bg-white text-blue-two w-[32px] h-[32px] flex items-center justify-center">
                          {d}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>

              <tbody>
                {standingGroup?.slice(0, to).map((standing) => (
                  <tr
                    className="border-b border-b-gray-two odd:bg-blue-one dark:odd:bg-gray-two/20"
                    key={standing?.team?.id}
                  >
                    <td className="py-4 text-center">
                      <span className="">{standing?.rank}</span>
                    </td>
                    <td className="standing-second-td">
                      <div className="flex items-center gap-2">
                        <Image
                          width={30}
                          height={30}
                          src={standing?.team?.logo}
                          alt="logo"
                          className="w-6 h-6 rounded-full"
                        />
                        <p className="hidden lg:block">
                          {standing?.team?.name}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">
                      <b>{standing?.points}</b>
                    </td>
                    <td className="text-center">{standing?.all?.played}</td>
                    <td className="text-center">{standing?.all?.win}</td>
                    <td className="text-center">{standing?.all?.draw}</td>
                    <td className="text-center">{standing?.all?.lose}</td>
                    <td className="text-center">{standing?.all?.goals?.for}</td>
                    <td className="text-center">
                      {standing?.all?.goals?.against}
                    </td>
                    <td className="text-center">{standing?.goalsDiff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {to < standingGroup?.length && (
              <div className="flex items-center justify-center gap-4 my-6">
                <button
                  className="bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all"
                  onClick={() => setTo(standingGroup?.length)}
                >
                  Full Table
                </button>
                <Link
                  href={`/popular/${league}/form`}
                  className="bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all"
                >
                  Form Table
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </>
  ) : (
    <div className="flex items-center justify-center">
      <p>{t("NO_STANDINGS")} </p>
    </div>
  );
}
