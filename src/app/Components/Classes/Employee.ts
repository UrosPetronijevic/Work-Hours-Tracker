import { daysArray, thisMonth, thisYear } from "../Static Data/Dates";
import { drzavniPraznikArr } from "../Static Data/PublicHolidays";
import { weekendsArr } from "../Static Data/Weekends";
import { verskiPraznikArr } from "../Static Data/OrtodoxEaster";

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
  prekovremeni: boolean = false;
  prevoz: boolean = false;

  fondSati: number = 0;
  redovanRad: number = 0;

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

  pripravnostSati: (number | string | null)[] = [];
  pripravnostTotal: number = 0;

  constructor(
    ime: string,
    prezime: string,
    kadrovskiBroj: string,
    dodatnoOpt: boolean,
    pripravnost: boolean,
    prekovremeni: boolean,
    prevoz: boolean,
    stalni: boolean,
    odredjeno: boolean,
    neodredjeno: boolean,
    zadruga: boolean
  ) {
    this.imeZaposlenog = ime;
    this.prezimeZaposlenog = prezime;
    this.kadrovskiBroj = kadrovskiBroj;

    this.dodatnoOpt = dodatnoOpt;
    this.pripravnost = pripravnost;
    this.prekovremeni = prekovremeni;
    this.prevoz = prevoz;

    this.setStats();
  }

  // Method to get kadrovskiBroj (ID)
  getId(): string {
    return this.kadrovskiBroj;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /// UPOZORENJE NAPRAVITI STATE PA ZAMENITI VALUE TA BI SE TRIGEROVAO REFRESH / a ne ovako kao sto je sad
  setDodatnoOpt() {
    this.dodatnoOpt = !this.dodatnoOpt;
  }

  setPripravnost() {
    this.pripravnost = !this.pripravnost;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Godisnji odmor, placeno odsustvo,drzavni verski praznici
  setStats() {
    this.godisnjiOdmor = this.godisnjiOdmorArr.length * 8;
    this.placenoOdsustvo = this.placenoOdsustvoArr.length * 8;
    this.bolovanje30 = this.bolovanje30Arr.length * 8;
    this.bolovanje100 = this.bolovanje100Arr.length * 8;
    this.bolovanjeNaTertFonda = this.bolovanjeNaTertFondaArr.length * 8;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        !drzavniPraznikArr.includes(day) &&
        !verskiPraznikArr.includes(day)
      ) {
        this.fondSati += 8;
      }

      // Calculate actual worked hours (redovanRad)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !weekendsArr.includes(day) &&
        !drzavniPraznikArr.includes(day) &&
        !verskiPraznikArr.includes(day) &&
        !this.godisnjiOdmorArr.includes(day) &&
        !this.placenoOdsustvoArr.includes(day) &&
        !this.slavaArr.includes(day)
      ) {
        this.redovanRad += 8;
      }
    }
  }
}
