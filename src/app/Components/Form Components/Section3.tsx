"use clent";

import { useState } from "react";
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
  const [sakljucarGornjeF, setSakljucarGornjeF] = useState(false);
  const [zamenik1GornjeF, setZamenik1GornjeF] = useState(false);
  const [zamenik2GornjeF, setZamenik2GornjeF] = useState(false);

  const [sakljucarDonjeF, setSakljucarDonjeF] = useState(false);
  const [zamenik1DonjeF, setZamenik1DonjeF] = useState(false);
  const [zamenik2DonjeF, setZamenik2DonjeF] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const [sakljucarGornjeE, setSakljucarGornjeE] = useState(false);
  const [zamenik1GornjeE, setZamenik1GornjeE] = useState(false);
  const [zamenik2GornjeE, setZamenik2GornjeE] = useState(false);

  const [sakljucarDonjeE, setSakljucarDonjeE] = useState(false);
  const [zamenik1DonjeE, setZamenik1DonjeE] = useState(false);
  const [zamenik2DonjeE, setZamenik2DonjeE] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="flex flex-col justify-between">
      {sakljucarFilijala && (
        <Filijala
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
          //////////////////////////////////////////////////////////

          sakljucarGornjeF={sakljucarGornjeF}
          setSakljucarGornjeF={setSakljucarGornjeF}
          /////////
          zamenik1GornjeF={zamenik1GornjeF}
          setZamenik1GornjeF={setZamenik1GornjeF}
          /////////
          zamenik2GornjeF={zamenik2GornjeF}
          setZamenik2GornjeF={setZamenik2GornjeF}
          //////////////////////////////////////////////////////////

          sakljucarDonjeF={sakljucarDonjeF}
          setSakljucarDonjeF={setSakljucarDonjeF}
          /////////
          zamenik1DonjeF={zamenik1DonjeF}
          setZamenik1DonjeF={setZamenik1DonjeF}
          /////////
          zamenik2DonjeF={zamenik2DonjeF}
          setZamenik2DonjeF={setZamenik2DonjeF}
        />
      )}

      {sakljucarEkspozitura && (
        <Ekspozitura
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
          //////////////////////////////////////////////////////////

          sakljucarGornjeE={sakljucarGornjeE}
          setSakljucarGornjeE={setSakljucarGornjeE}
          /////////
          zamenik1GornjeE={zamenik1GornjeE}
          setZamenik1GornjeE={setZamenik1GornjeE}
          /////////
          zamenik2GornjeE={zamenik2GornjeE}
          setZamenik2GornjeE={setZamenik2GornjeE}
          //////////////////////////////////////////////////////////

          sakljucarDonjeE={sakljucarDonjeE}
          setSakljucarDonjeE={setSakljucarDonjeE}
          /////////
          zamenik1DonjeE={zamenik1DonjeE}
          setZamenik1DonjeE={setZamenik1DonjeE}
          /////////
          zamenik2DonjeE={zamenik2DonjeE}
          setZamenik2DonjeE={setZamenik2DonjeE}
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
