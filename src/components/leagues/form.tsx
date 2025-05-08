import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface FormProps {
  leagueStandings?: TLeagueResponse["data"]["standings"]["response"];
  isLoading: boolean;
  league?: string;
}

export default function Form({
  leagueStandings,
  isLoading,
  league,
}: FormProps) {
  const t = useTranslations("FORM");
  const standings = leagueStandings?.[0]?.league?.standings?.flat() || [];
  const [to, setTo] = useState(6);

  return isLoading ? (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin" />
    </div>
  ) : standings?.length > 0 ? (
    <div className="flex flex-col mt-10">
      <div className="grid grid-cols-2 items-center border-b border-gray-two pb-4">
        <p>Team</p>
        <p>Games played</p>
      </div>
      {standings.slice(0, to).map((standing) => {
        return (
          <div
            key={standing?.team?.id}
            className="grid grid-cols-2 odd:bg-gray-one/20 items-center py-2 dark:odd:bg-blue-one"
          >
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src={standing?.team?.logo}
                alt="logo"
                className="w-6 h-6 rounded-full"
              />

              <p className="text-sm">{standing?.team?.name}</p>
            </div>
            <p className="flex items-center gap-1 justify-center">
              <span className="text-xs">1</span>
              {standing?.form?.split("").map((form) => (
                <span
                  key={form}
                  className={cn(
                    "w-5 h-5 flex text-sm items-center justify-center bg-green-500",
                    {
                      "bg-red-500": form?.toUpperCase() === "L",
                      "bg-yellow-500": form?.toUpperCase() === "D",
                    }
                  )}
                >
                  {form}
                </span>
              ))}
              <span className="text-xs">{standing?.form?.length}</span>
            </p>
          </div>
        );
      })}
      {to < standings?.length && (
        <div className="flex items-center justify-center gap-4 my-6">
          <button
            onClick={() => setTo(standings.length)}
            className="bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all"
          >
            Full Table
          </button>
          <Link
            href={`/popular/${league}/standings`}
            className="bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all"
          >
            Standings
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <p>{t("NO_FORM")}</p>
    </div>
  );
}
