import { useState } from "react";
import { getDate } from "../lib/utils";
import dayjs from "dayjs";

export default function useChangeDate(filter: TPeriod) {
  const [fullDate, setFullDate] = useState(getDate(filter));
  const [showDate, setShowDate] = useState(false);

  const handlDateChange = (newValue: dayjs.Dayjs) => {
    const newDate = newValue.format("YYYY-MM-DD");
    setFullDate(newDate);
    setShowDate(false);
  };

  return {
    fullDate,
    showDate,
    setShowDate,
    setFullDate,
    handlDateChange,
  };
}
