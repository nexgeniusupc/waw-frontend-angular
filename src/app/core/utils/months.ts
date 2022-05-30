export const FullMonthMap = [
  "January",
  "February",
  "March",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MonthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const toLocaleMonth = (date: Date, full?: boolean): string => {
  const month = date.getMonth();
  if (full) {
    return FullMonthMap[month];
  }
  return MonthMap[month];
};
