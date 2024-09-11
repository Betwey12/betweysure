import dayjs from "dayjs";
import { period } from "../../assets/data/data";
import { cn } from "../../lib/utils";
import MySelect from "../ui/my-select";
import { getDate } from "../../lib/utils";
import DateWidget from "../ui/date-widget";
import { Button } from "../ui/button";

interface FootballPredictionsFilterProps {
  options: string[];
  setShowDate: React.Dispatch<React.SetStateAction<boolean>>;
  handlDateChange: (newValue: dayjs.Dayjs) => void;
  showDate: boolean;
  fullDate: string;
  periodIndex: number;
  setFullDate: React.Dispatch<React.SetStateAction<string>>;
  setPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  selectedOption: string;
  handleSelectOption: (option: string) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handlePagination: (e: any, value: number) => void;
}
export default function PredictionsFilter({
  options,
  setShowDate,
  handlDateChange,
  showDate,
  fullDate,
  periodIndex,
  setFullDate,
  setPeriodIndex,
  title,
  selectedOption,
  handleSelectOption,
  setSearchValue,
  handlePagination,
}: FootballPredictionsFilterProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex lg:flex-row lg:items-center w-full max-w-md gap-4 flex-col">
          <DateWidget
            fullDate={fullDate}
            handlDateChange={handlDateChange}
            handleShowDate={() => setShowDate((prev) => !prev)}
            showDate={showDate}
            alignRight
          />

          <MySelect
            options={options}
            bgDashboard={true}
            handleSelectOption={handleSelectOption}
            selectedOption={selectedOption}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-6">
        <input
          type="search"
          name=""
          id=""
          placeholder="🔍  Filter by leagues, country, games"
          className="py-2 px-4 rounded focus:outline-none text-gray-one w-full lg:max-w-[360px] border border-gray-one"
          onChange={(e) => {
            setSearchValue(e.target.value);
            handlePagination(undefined, 1);
          }}
        />
        <div className="flex items-center flex-wrap gap-4 lg:gap-8">
          {period.map((period, index) => (
            <Button
              key={period}
              className={cn("bg-gray-one text-white capitalize", {
                "bg-cyan": periodIndex === index,
              })}
              onClick={() => {
                handlePagination(undefined, 1);
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
    </>
  );
}
