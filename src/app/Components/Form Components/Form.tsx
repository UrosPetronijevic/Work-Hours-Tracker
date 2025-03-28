"use client";

import { use, useEffect, useState } from "react";
import { Employee } from "../Classes/Employee";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Groups } from "../Classes/Groups";

type FormProps = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setEmployees, setGroups, setForm }: FormProps) {
  //////////////////////////////////////////////////////////////////////////////////

  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [kadrovskiBroj, setKadrovskiBroj] = useState<string>("");
  const [datumRodjenja, setDatumRodjenja] = useState<string>("");
  const [radniStaz, setRadniStaz] = useState<string>("");
  //////////////////////////////////////////////////////////////////////////////////

  const [odredjeno, setOdredjeno] = useState<boolean>(false);
  const [neodredjeno, setNeodredjeno] = useState<boolean>(false);
  const [zadruga, setZadruga] = useState<boolean>(false);
  const [pp, setPp] = useState<boolean>(false);

  //////////////////////////////////////////////////////////////////////////////////

  const [dodatnoOpt, setDodatnoOpt] = useState<boolean>(false);
  const [pripravnost, setPripravnost] = useState<boolean>(false);
  const [prekovremeni, setPrekovremeni] = useState<boolean>(false);
  const [prevoz, setPrevoz] = useState<boolean>(false);

  //////////////////////////////////////////////////////////////////////////////////

  const [proceed, setProceed] = useState<boolean>(false);

  useEffect(() => {
    setProceed(ime !== "" && prezime !== "" && kadrovskiBroj !== "");
  }, [ime, prezime, kadrovskiBroj]);

  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="w-[80%] bg-white h-[80%] grid grid-cols-[33%_66%] p-10 rounded-2xl gap-8 items-center">
      <Section1
        ime={ime}
        setIme={setIme}
        prezime={prezime}
        setPrezime={setPrezime}
        kadrovskiBroj={kadrovskiBroj}
        setKadrovskiBroj={setKadrovskiBroj}
        datumRodjenja={datumRodjenja}
        setDatumRodjenja={setDatumRodjenja}
        radniStaz={radniStaz}
        setRadniStaz={setRadniStaz}
      />

      <Section2
        setGroups={setGroups}
        setEmployees={setEmployees}
        ///////////
        dodatnoOpt={dodatnoOpt}
        setDodatnoOpt={setDodatnoOpt}
        pripravnost={pripravnost}
        setPripravnost={setPripravnost}
        prekovremeni={prekovremeni}
        setPrekovremeni={setPrekovremeni}
        prevoz={prevoz}
        setPrevoz={setPrevoz}
        proceed={proceed}
        pp={pp}
        setPp={setPp}
        odredjeno={odredjeno}
        setOdredjeno={setOdredjeno}
        neodredjeno={neodredjeno}
        setNeodredjeno={setNeodredjeno}
        zadruga={zadruga}
        setZadruga={setZadruga}
        //////

        ime={ime}
        prezime={prezime}
        kadrovskiBroj={kadrovskiBroj}
        datumRodjenja={datumRodjenja}
        radniStaz={radniStaz}
        setForm={setForm}
      />
    </div>
  );
}
