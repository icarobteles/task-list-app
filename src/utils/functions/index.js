import { parseISO, isAfter, sub } from "date-fns";

export const compareDates = (dateToBeCompared) => {
  const compareDate = parseISO(dateToBeCompared);
  const currentDate = new Date();
  const timeZoneOffset = currentDate.getTimezoneOffset() / 60;
  const currentDateUTC = sub(currentDate, {
    hours: timeZoneOffset,
  });
  return isAfter(currentDateUTC, compareDate);
};
