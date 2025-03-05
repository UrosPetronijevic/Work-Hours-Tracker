import { datumPocetka, datumZavrsetka } from "./Dates";

export const calculateOrthodoxEaster = (
  year: number = new Date().getFullYear()
): number[] => {
  const a = year % 19;
  const b = year % 7;
  const c = year % 4;

  const d = (19 * a + 15) % 30;
  const e = (2 * c + 4 * b - d + 34) % 7;

  const month = Math.floor((d + e + 114) / 31); // Month of Orthodox Easter
  const day = ((d + e + 114) % 31) + 1; // Day of the month

  const julianDate = new Date(year, month - 1, day); // Convert to Julian calendar
  const julianOffset = 13; // Offset to convert to Gregorian calendar

  const easterDate = new Date(julianDate);
  easterDate.setDate(julianDate.getDate() + julianOffset);

  // Check if Easter is in the current month
  if (easterDate.getMonth() + 1 === datumPocetka.getMonth() + 1) {
    // Array for Easter and surrounding days
    const days = [
      new Date(easterDate).setDate(easterDate.getDate() - 2), // Two days before
      new Date(easterDate).setDate(easterDate.getDate() - 1), // One day before
      easterDate.getTime(), // Easter day
      new Date(easterDate).setDate(easterDate.getDate() + 1), // One day after
    ];

    // Filter to only include days in the current month
    return days
      .map((timestamp) => new Date(timestamp).getDate())
      .filter((day) => day >= 1 && day <= datumZavrsetka.getDate());
  }

  return []; // Return an empty array if Easter is not in the current month
};
