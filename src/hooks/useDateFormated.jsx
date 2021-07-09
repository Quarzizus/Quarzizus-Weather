import { useEffect, useState } from "react";

const useDateFormated = () => {
  const [date, setDate] = useState({});
  const week = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  const months = {
    1: "January",
    2: "Febrary",
    3: "May",
    4: "April",
    5: "March",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  useEffect(() => {
    const dateJs = new Date();
    const dayWeek = week[dateJs.getDay()];
    const month = months[dateJs.getMonth()];
    const dayMonth = dateJs.getDate();
    setDate({
      dayWeek,
      month,
      dayMonth,
    });
  }, []);

  return date;
};

export default useDateFormated;
