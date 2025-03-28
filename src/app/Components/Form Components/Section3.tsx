"use clent";

import { useState } from "react";
import { Groups } from "../Classes/Groups";
import Ekspozitura from "./Subsections/Ekspozitura";
import Filijala from "./Subsections/Filijala";
import Nbs from "./Subsections/Nbs";
import Nepredvidjeni from "./Subsections/Nepredvidjeni";
import Prijem from "./Subsections/Prijem";
import Vozaci from "./Subsections/Vozaci";
import { Employee } from "../Classes/Employee";
import { group } from "console";

type Section3Props = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  setForm: React.Dispatch<React.SetStateAction<boolean>>;

  sakljucarFilijala: boolean;
  sakljucarEkspozitura: boolean;
  komisijaZaPrijem: boolean;
  komisijaZaNbs: boolean;
  nepredvidjeni: boolean;
  vozac: boolean;

  ime: string;
  prezime: string;
  kadrovskiBroj: string;
  datumRodjenja: string;
  radniStaz: string;

  pripravnost: boolean;
  prevoz: boolean;

  pp: boolean;
  odredjeno: boolean;
  neodredjeno: boolean;
  zadruga: boolean;
};

export default function Section3({
  pripravnost,
  prevoz,
  sakljucarFilijala,
  sakljucarEkspozitura,
  komisijaZaPrijem,
  komisijaZaNbs,
  nepredvidjeni,
  vozac,
  setGroups,
  setEmployees,
  ime,
  prezime,
  kadrovskiBroj,
  datumRodjenja,
  radniStaz,
  pp,
  odredjeno,
  neodredjeno,
  zadruga,
  setForm,
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

  const [predsednikKomisijeP, setPredsednikKomisijeP] =
    useState<boolean>(false);
  const [zamenikPredsednikaP, setZamenikPredsednikaP] =
    useState<boolean>(false);

  const [clanKomisije2P, setClanKomisije2P] = useState<boolean>(false);
  const [zamenikClana2P, setZamenikClana2P] = useState<boolean>(false);

  const [clanKomisije3P, setClanKomisije3P] = useState<boolean>(false);
  const [zamenikClana3P, setZamenikClana3P] = useState<boolean>(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const [predsednikKomisijeN, setPredsednikKomisijeN] =
    useState<boolean>(false);
  const [zamenikPredsednikaN, setZamenikPredsednikaN] =
    useState<boolean>(false);

  const [clanKomisije2N, setClanKomisije2N] = useState<boolean>(false);
  const [zamenikClana2N, setZamenikClana2N] = useState<boolean>(false);

  const [clanKomisije3N, setClanKomisije3N] = useState<boolean>(false);
  const [zamenikClana3N, setZamenikClana3N] = useState<boolean>(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const [nepredvidjeniGornjeF, setNepredvidjeniGornjeF] =
    useState<boolean>(false);
  const [nepredvidjeniDonjeF, setNepredvidjeniDonjeF] =
    useState<boolean>(false);

  const [nepredvidjeniGornjeE, setNepredvidjeniGornjeE] =
    useState<boolean>(false);
  const [nepredvidjeniDonjeE, setNepredvidjeniDonjeE] =
    useState<boolean>(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const [glavniVozac, setGlavniVozac] = useState<boolean>(false);
  const [zamenikVozaca, setZamenikVozaca] = useState<boolean>(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const getUpdatedValue = (
    prevValue: string | null,
    condition: boolean,
    kadrovskiBroj: string
  ) => {
    if (condition) return kadrovskiBroj; // If true, set kadrovskiBroj
    if (prevValue === kadrovskiBroj) return null; // If false & was kadrovskiBroj, reset to null
    return prevValue; // Otherwise, keep it as it is
  };

  ////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee = new Employee(
      ime,
      prezime,
      kadrovskiBroj,
      radniStaz,
      datumRodjenja,
      odredjeno,
      neodredjeno,
      zadruga,
      pp,
      pripravnost,
      prevoz
    );

    setEmployees((prev) => [...prev, newEmployee]);

    setGroups((prev) => ({
      ...prev,

      filijala: {
        sakljucariGornje: {
          sakljucar: getUpdatedValue(
            prev.filijala.sakljucariGornje.sakljucar,
            sakljucarGornjeF,
            kadrovskiBroj
          ),
          zamenik1: getUpdatedValue(
            prev.filijala.sakljucariGornje.zamenik1,
            zamenik1GornjeF,
            kadrovskiBroj
          ),
          zamenik2: getUpdatedValue(
            prev.filijala.sakljucariGornje.zamenik2,
            zamenik2GornjeF,
            kadrovskiBroj
          ),
          nepredvidjeni: getUpdatedValue(
            prev.filijala.sakljucariGornje.nepredvidjeni,
            nepredvidjeniGornjeF,
            kadrovskiBroj
          ),
        },
        sakljucariDonje: {
          sakljucar: getUpdatedValue(
            prev.filijala.sakljucariDonje.sakljucar,
            sakljucarDonjeF,
            kadrovskiBroj
          ),
          zamenik1: getUpdatedValue(
            prev.filijala.sakljucariDonje.zamenik1,
            zamenik1DonjeF,
            kadrovskiBroj
          ),
          zamenik2: getUpdatedValue(
            prev.filijala.sakljucariDonje.zamenik2,
            zamenik2DonjeF,
            kadrovskiBroj
          ),
          nepredvidjeni: getUpdatedValue(
            prev.filijala.sakljucariDonje.nepredvidjeni,
            nepredvidjeniDonjeF,
            kadrovskiBroj
          ),
        },
      },

      ekspozitura: {
        sakljucariGornje: {
          sakljucar: getUpdatedValue(
            prev.ekspozitura.sakljucariGornje.sakljucar,
            sakljucarGornjeE,
            kadrovskiBroj
          ),
          zamenik1: getUpdatedValue(
            prev.ekspozitura.sakljucariGornje.zamenik1,
            zamenik1GornjeE,
            kadrovskiBroj
          ),
          zamenik2: getUpdatedValue(
            prev.ekspozitura.sakljucariGornje.zamenik2,
            zamenik2GornjeE,
            kadrovskiBroj
          ),
          nepredvidjeni: getUpdatedValue(
            prev.ekspozitura.sakljucariGornje.nepredvidjeni,
            nepredvidjeniGornjeE,
            kadrovskiBroj
          ),
        },
        sakljucariDonje: {
          sakljucar: getUpdatedValue(
            prev.ekspozitura.sakljucariDonje.sakljucar,
            sakljucarDonjeE,
            kadrovskiBroj
          ),
          zamenik1: getUpdatedValue(
            prev.ekspozitura.sakljucariDonje.zamenik1,
            zamenik1DonjeE,
            kadrovskiBroj
          ),
          zamenik2: getUpdatedValue(
            prev.ekspozitura.sakljucariDonje.zamenik2,
            zamenik2DonjeE,
            kadrovskiBroj
          ),
          nepredvidjeni: getUpdatedValue(
            prev.ekspozitura.sakljucariDonje.nepredvidjeni,
            nepredvidjeniDonjeE,
            kadrovskiBroj
          ),
        },
      },

      prijem: {
        predsednik: getUpdatedValue(
          prev.prijem.predsednik,
          predsednikKomisijeP,
          kadrovskiBroj
        ),
        zamenikPredsednika: getUpdatedValue(
          prev.prijem.zamenikPredsednika,
          zamenikPredsednikaP,
          kadrovskiBroj
        ),
        clanKomisije2: getUpdatedValue(
          prev.prijem.clanKomisije2,
          clanKomisije2P,
          kadrovskiBroj
        ),
        zamenikClana2: getUpdatedValue(
          prev.prijem.zamenikClana2,
          zamenikClana2P,
          kadrovskiBroj
        ),
        clanKomisije3: getUpdatedValue(
          prev.prijem.clanKomisije3,
          clanKomisije3P,
          kadrovskiBroj
        ),
        zamenikClana3: getUpdatedValue(
          prev.prijem.zamenikClana3,
          zamenikClana3P,
          kadrovskiBroj
        ),
      },

      nbs: {
        predsednik: getUpdatedValue(
          prev.nbs.predsednik,
          predsednikKomisijeN,
          kadrovskiBroj
        ),
        zamenikPredsednika: getUpdatedValue(
          prev.nbs.zamenikPredsednika,
          zamenikPredsednikaN,
          kadrovskiBroj
        ),
        clanKomisije2: getUpdatedValue(
          prev.nbs.clanKomisije2,
          clanKomisije2N,
          kadrovskiBroj
        ),
        zamenikClana2: getUpdatedValue(
          prev.nbs.zamenikClana2,
          zamenikClana2N,
          kadrovskiBroj
        ),
        clanKomisije3: getUpdatedValue(
          prev.nbs.clanKomisije3,
          clanKomisije3N,
          kadrovskiBroj
        ),
        zamenikClana3: getUpdatedValue(
          prev.nbs.zamenikClana3,
          zamenikClana3N,
          kadrovskiBroj
        ),
      },

      vozaci: {
        vozac: getUpdatedValue(prev.vozaci.vozac, glavniVozac, kadrovskiBroj),
        zamenaVozaca: getUpdatedValue(
          prev.vozaci.zamenaVozaca,
          zamenikVozaca,
          kadrovskiBroj
        ),
      },
    }));

    setForm(false);
  };

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
          //////////////////////////////////////////////////////////

          predsednikKomisijeP={predsednikKomisijeP}
          setPredsednikKomisijeP={setPredsednikKomisijeP}
          /////////

          zamenikPredsednikaP={zamenikPredsednikaP}
          setZamenikPredsednikaP={setZamenikPredsednikaP}
          /////////

          clanKomisije2P={clanKomisije2P}
          setClanKomisije2P={setClanKomisije2P}
          /////////

          zamenikClana2P={zamenikClana2P}
          setZamenikClana2P={setZamenikClana2P}
          /////////

          clanKomisije3P={clanKomisije3P}
          setClanKomisije3P={setClanKomisije3P}
          /////////

          zamenikClana3P={zamenikClana3P}
          setZamenikClana3P={setZamenikClana3P}
        />
      )}

      {komisijaZaNbs && (
        <Nbs
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
          //////////////////////////////////////////////////////////

          predsednikKomisijeN={predsednikKomisijeN}
          zamenikPredsednikaN={zamenikPredsednikaN}
          /////////

          clanKomisije2N={clanKomisije2N}
          zamenikClana2N={zamenikClana2N}
          /////////

          clanKomisije3N={clanKomisije3N}
          zamenikClana3N={zamenikClana3N}
          /////////

          setPredsednikKomisijeN={setPredsednikKomisijeN}
          setZamenikPredsednikaN={setZamenikPredsednikaN}
          /////////

          setClanKomisije2N={setClanKomisije2N}
          setZamenikClana2N={setZamenikClana2N}
          /////////

          setClanKomisije3N={setClanKomisije3N}
          setZamenikClana3N={setZamenikClana3N}
        />
      )}

      {nepredvidjeni && (
        <Nepredvidjeni
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
          //////////////////////////////////////////////////////////

          nepredvidjeniGornjeF={nepredvidjeniGornjeF}
          setNepredvidjeniGornjeF={setNepredvidjeniGornjeF}
          /////////

          nepredvidjeniDonjeF={nepredvidjeniDonjeF}
          setNepredvidjeniDonjeF={setNepredvidjeniDonjeF}
          //////////////////////////////////////////////////////////

          nepredvidjeniGornjeE={nepredvidjeniGornjeE}
          setNepredvidjeniGornjeE={setNepredvidjeniGornjeE}
          /////////

          nepredvidjeniDonjeE={nepredvidjeniDonjeE}
          setNepredvidjeniDonjeE={setNepredvidjeniDonjeE}
        />
      )}

      {vozac && (
        <Vozaci
          pripravnost={pripravnost}
          setGroups={setGroups}
          kadrovskiBroj={kadrovskiBroj}
          //////////////////////////////////////////////////////////

          glavniVozac={glavniVozac}
          setGlavniVozac={setGlavniVozac}
          /////////
          zamenikVozaca={zamenikVozaca}
          setZamenikVozaca={setZamenikVozaca}
        />
      )}

      <button
        className="bg-[#F99417] self-center p-2 w-[70%] rounded-md"
        onClick={handleSubmit}
      >
        Zavrsi
      </button>
    </div>
  );
}
