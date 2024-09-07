import { FaCalendar } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

interface DateWidgetProps {
  fullDate: string;
  handlDateChange: (newValue: dayjs.Dayjs) => void;
  handleShowDate: () => void;
  showDate: boolean;
  alignRight?: boolean;
}
export default function DateWidget({
  fullDate,
  handlDateChange,
  handleShowDate,
  showDate,
  alignRight = false,
}: DateWidgetProps) {
  return (
    <>
      <Button
        className="self-start bg-transparent gap-2 text-xs text-gray-one py-0 hover:text-white"
        onClick={handleShowDate}
      >
        <FaCalendar />
        {fullDate}
      </Button>
      <div className="relative">
        {showDate && (
          <div
            className={cn(
              "absolute bg-white top-[calc(100%+16px)] left-0 rounded-lg text-blue-three shadow",
              {
                "right-0 left-auto": alignRight,
              }
            )}
          >
            <DateCalendar
              value={dayjs(fullDate)}
              onChange={(newValue) => handlDateChange(newValue)}
            />
          </div>
        )}
      </div>
    </>
  );
}
