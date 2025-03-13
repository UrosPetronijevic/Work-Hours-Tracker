import Ekspozitura from "./Subsections/Ekspozitura";
import Filijala from "./Subsections/Filijala";
import Nbs from "./Subsections/Nbs";
import Prijem from "./Subsections/Prijem";

type Section3Props = {
  pripravnost: boolean;
  sakljucarFilijala: boolean;
  sakljucarEkspozitura: boolean;
  komisijaZaPrijem: boolean;
  komisijaZaNbs: boolean;
  nepredvidjeni: boolean;
  vozac: boolean;
};
export default function Section3({
  pripravnost,
  sakljucarFilijala,
  sakljucarEkspozitura,
  komisijaZaPrijem,
  komisijaZaNbs,
  nepredvidjeni,
  vozac,
}: Section3Props) {
  return (
    <div className="flex flex-col justify-between">
      {sakljucarFilijala && <Filijala pripravnost={pripravnost} />}

      {sakljucarEkspozitura && <Ekspozitura pripravnost={pripravnost} />}

      {komisijaZaPrijem && <Prijem pripravnost={pripravnost} />}

      {komisijaZaNbs && <Nbs pripravnost={pripravnost} />}

      {nepredvidjeni && (
        <div
          className={`flex flex-col select-none ${
            pripravnost ? "text-slate-700 enabled" : "text-slate-400 disabled"
          }`}
        >
          <h1 className="self-center text-3xl">nepredvidjeni</h1>
        </div>
      )}

      {vozac && (
        <div
          className={`flex flex-col select-none ${
            pripravnost ? "text-slate-700 enabled" : "text-slate-400 disabled"
          }`}
        >
          <h1 className="self-center text-3xl">vozac</h1>
        </div>
      )}

      <button className="bg-[#F99417] self-center p-2 w-[70%] rounded-md">
        Zavrsi
      </button>
    </div>
  );
}
