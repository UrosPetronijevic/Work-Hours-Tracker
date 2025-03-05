import { datumPocetka, datumZavrsetka } from "./Dates";

export const populateWeekends = () => {
  const currentDate = new Date(datumPocetka);

  const weekendsArr = [];

  while (currentDate <= datumZavrsetka) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Add the day (date) to weekendsArr if it's a Saturday or Sunday
      weekendsArr.push(currentDate.getDate());
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return weekendsArr;
};
