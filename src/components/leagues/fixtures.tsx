import { cn } from "@/lib/utils";
import dayjs, { OpUnitType } from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface FixturesProps {
  fixtures?: TLeagueResponse["data"]["fixtures"]["response"];
  isLoading: boolean;
}

export default function Fixtures({ fixtures, isLoading }: FixturesProps) {
  const t = useTranslations("FIXTURES");
  const [period, setPeriod] = useState<OpUnitType>("week");
  const [showAll, setShowAll] = useState(false);
  const [to, setTo] = useState(10);

  const filteredFixtures = fixtures?.filter((fixture) =>
    showAll ? true : dayjs().isSame(fixture.fixture.date, period)
  );

  return isLoading ? (
    <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin" />
    </div>
  ) : (fixtures?.length ?? 0) > 0 ? (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        {["week", "month", "year"].map((p) => (
          <button
            className={cn(
              "bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all",
              {
                "bg-cyan": period === p && !showAll,
              }
            )}
            key={p}
            onClick={() => {
              setPeriod(p as OpUnitType);
              setShowAll(false);
            }}
          >
            {p}
          </button>
        ))}

        <button
          className={cn(
            "bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all",
            {
              "bg-cyan": showAll,
            }
          )}
          onClick={() => setShowAll(true)}
        >
          Show All
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {filteredFixtures?.slice(0, to)?.map((fixture) => {
          const date = dayjs(fixture.fixture.date).format(
            "dddd, MMMM DD, YYYY"
          );
          return (
            <div
              className="flex flex-col border-b lg:odd:border-r border-gray-one p-4"
              key={fixture.fixture.id}
            >
              <p className="text-sm text-center">{date}</p>
              <div className="grid grid-cols-3 items-center mt-2">
                <div className="flex flex-col items-center gap-1">
                  <Image
                    width={30}
                    height={30}
                    src={fixture?.teams?.home?.logo}
                    alt="logo"
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-sm">{fixture?.teams?.home?.name}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {fixture?.goals?.home !== null && (
                    <p>
                      {fixture?.goals?.home} : {fixture?.goals?.away}
                    </p>
                  )}
                  <p className="">{fixture?.fixture?.status?.short}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Image
                    width={30}
                    height={30}
                    src={fixture?.teams?.away?.logo}
                    alt="logo"
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-sm">{fixture?.teams?.away?.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {to < (filteredFixtures?.length ?? 0) && (
        <div className="flex items-center justify-center gap-4 my-6">
          <button
            onClick={() => setTo(filteredFixtures?.length ?? 0)}
            className="bg-gray-one px-4 text-sm font-thin text-center flex items-center justify-center py-1 text-white rounded capitalize hover:bg-cyan transition-all"
          >
            Show All
          </button>
        </div>
      )}
      {filteredFixtures?.length === 0 && (
        <p className="text-center">
          {t("NO_FIXTURES_FOR", {
            period,
          })}
        </p>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <p>{t("NO_FIXTURES")}</p>
    </div>
  );
}
