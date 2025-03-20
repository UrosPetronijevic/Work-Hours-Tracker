import { Groups } from "../Classes/Groups";
import Ekspozitura from "./Subsections/Ekspozitura";
import Filijala from "./Subsections/Filijala";
import Nbs from "./Subsections/Nbs";
import Nepredvidjeni from "./Subsections/Nepredvidjeni";
import Prijem from "./Subsections/Prijem";
import Vozaci from "./Subsections/Vozaci";

type Section3Props = {
  pripravnost: boolean;
  sakljucarFilijala: boolean;
  sakljucarEkspozitura: boolean;
  komisijaZaPrijem: boolean;
  komisijaZaNbs: boolean;
  nepredvidjeni: boolean;
  vozac: boolean;
  kadrovskiBroj: string;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;
};

export default function Section3({
  pripravnost,
  sakljucarFilijala,
  sakljucarEkspozitura,
  komisijaZaPrijem,
  komisijaZaNbs,
  nepredvidjeni,
  vozac,
  setGroups,
  kadrovskiBroj,
}: Section3Props) {
  return (
    <div className="flex flex-col justify-between">
      {sakljucarFilijala && (
        <Filijala
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      {sakljucarEkspozitura && (
        <Ekspozitura
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      {komisijaZaPrijem && (
        <Prijem
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      {komisijaZaNbs && (
        <Nbs
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      {nepredvidjeni && (
        <Nepredvidjeni
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      {vozac && (
        <Vozaci
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
        />
      )}

      <button className="bg-[#F99417] self-center p-2 w-[70%] rounded-md">
        Zavrsi
      </button>
    </div>
  );
}
