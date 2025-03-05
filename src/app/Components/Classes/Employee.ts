import { daysArray, thisMonth, thisYear } from "../Static Data/Dates";
import { drzavniPraznici } from "../Static Data/PublicHolidays";
import { calculateOrthodoxEaster } from "../Static Data/OrtodoxEaster";
import { populateWeekends } from "../Static Data/Weekends";

export class Employee {
  kadrovskiBroj: string = "";
  imeZaposlenog: string = "";
  prezimeZaposlenog: string = "";

  stalniZaposleni: boolean = false;
  zaposleniNaOdredjeno: boolean = false;
  zaposleniNaNeodredjeno: boolean = false;
  zaposleniPrekoZadruge: boolean = false;

  dodatnoOpt: boolean = false;
  pripravnost: boolean = false;

  fondSati: number = 0;
  redovanRad: number = 0;

  drzavniVerskiPraznik: number = 0;

  godisnjiOdmor: number = 0;
  placenoOdsustvo: number = 0;
  bolovanje30: number = 0;
  bolovanje100: number = 0;
  bolovanjeNaTertFonda: number = 0;
  porodiljskoOdsustvo: number = 0;

  godisnjiOdmorArr: number[] = [];
  placenoOdsustvoArr: number[] = [];
  bolovanje30Arr: number[] = [];
  bolovanje100Arr: number[] = [];
  bolovanjeNaTertFondaArr: number[] = [];
  slavaArr: number[] = [];

  selectedDaysArr: number[] = [];

  weekendsArr: number[] = []; // New array for weekends
  verskiPraznikArr: number[] = [];
  drzavniPraznikArr: number[] = [];

  pripravnostSati: (number | string | null)[] = [];
  pripravnostTotal: number = 0;

  constructor() {
    // Populate the weekendsArr with weekends (Saturdays and Sundays)
    this.weekendsArr = populateWeekends();

    // Populate state holidays based on the current month
    this.populateDrzavniPraznici(thisMonth);

    // Calculate Orthodox Easter for the current year and populate verskiPraznikArr
    this.verskiPraznikArr = calculateOrthodoxEaster();
  }

  // Populate drzavniPraznikArr based on the current month
  private populateDrzavniPraznici(month: number): void {
    this.drzavniPraznikArr = drzavniPraznici[month].dani;
  }

  // Method to get kadrovskiBroj (ID)
  getId(): string {
    return this.kadrovskiBroj;
  }

  setDodatnoOpt() {
    this.dodatnoOpt = !this.dodatnoOpt;
  }

  setPripravnost() {
    this.pripravnost = !this.pripravnost;
  }

  setPripravnostSati(hours: (number | string | null)[]) {
    this.pripravnostSati = hours;
  }

  setPripravnostTotal(hours: (number | string | null)[]) {
    let arr = [...hours].filter((hour) => hour !== null);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }

    this.pripravnostTotal = sum;
  }

  setStats() {
    this.godisnjiOdmor = this.godisnjiOdmorArr.length * 8;
    this.placenoOdsustvo = this.placenoOdsustvoArr.length * 8;
    this.drzavniVerskiPraznik =
      (this.verskiPraznikArr.length + this.drzavniPraznikArr.length) * 8;
  }

  calculateWorkingHours() {
    this.fondSati = 0; // Reset total working hours
    this.redovanRad = 0; // Reset actual worked hours

    for (const day of daysArray) {
      const currentDate = new Date(thisYear, thisMonth, day);
      const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

      // Calculate possible working hours (fondSati)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !this.drzavniPraznikArr.includes(day) &&
        !this.verskiPraznikArr.includes(day)
      ) {
        this.fondSati += 8;
      }

      // Calculate actual worked hours (redovanRad)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !this.weekendsArr.includes(day) &&
        !this.drzavniPraznikArr.includes(day) &&
        !this.verskiPraznikArr.includes(day) &&
        !this.godisnjiOdmorArr.includes(day) &&
        !this.placenoOdsustvoArr.includes(day) &&
        !this.slavaArr.includes(day)
      ) {
        this.redovanRad += 8;
      }
    }
  }
}
