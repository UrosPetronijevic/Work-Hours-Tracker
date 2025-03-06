import { thisMonth } from "./Dates";
import { verskiPraznikArr } from "./OrtodoxEaster";

export const drzavniPraznici = [
  { mesec: "Januar", dani: [1, 2, 7] },
  { mesec: "Februar", dani: [15, 16, 17] },
  { mesec: "Mart", dani: [] },
  { mesec: "April", dani: [] },
  { mesec: "Maj", dani: [1, 2] },
  { mesec: "Jun", dani: [] },
  { mesec: "Jul", dani: [] },
  { mesec: "Avgust", dani: [] },
  { mesec: "Spetembar", dani: [] },
  { mesec: "Oktobar", dani: [] },
  { mesec: "Novembar", dani: [11] },
  { mesec: "Decembar", dani: [] },
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Populate drzavniPraznikArr based on the current month
export const populateDrzavniPraznici = (month: number) => {
  return drzavniPraznici[month].dani;
};

export const drzavniPraznikArr = populateDrzavniPraznici(thisMonth);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const drzavniVerskiPraznik =
  (verskiPraznikArr.length + drzavniPraznikArr.length) * 8;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
