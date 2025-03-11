import { daysArray, thisMonth, thisYear } from "./Dates";
import { drzavniPraznikArr } from "./PublicHolidays";
import { verskiPraznikArr } from "./OrtodoxEaster";

export const calculateWorkingHours = (): number => {
  let fondSati = 0; // Reset total working hours

  for (const day of daysArray) {
    const currentDate = new Date(thisYear, thisMonth, day);
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

    // Calculate possible working hours (fondSati)
    if (
      dayOfWeek !== 0 && // Not Sunday
      dayOfWeek !== 6 && // Not Saturday
      !drzavniPraznikArr.includes(day) &&
      !verskiPraznikArr.includes(day)
    ) {
      fondSati += 8;
    }
  }
  return fondSati;
};
