"use client";

import { use, useState } from "react";
import { Employee } from "../Classes/Employee";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

type FormProps = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function Form({ setEmployees }: FormProps) {
  const [employee, setEmployee] = useState<Employee>();
  //////////////////////////////////////////////////////////////////////////////////

  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [kadrovskiBroj, setKadrovskiBroj] = useState<string>("");
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

  return (
    <div className="w-[80%] bg-white h-[80%] grid grid-cols-[33%_66%] p-10 rounded-2xl gap-8 items-center">
      <Section1
        ime={ime}
        setIme={setIme}
        prezime={prezime}
        setPrezime={setPrezime}
        kadrovskiBroj={kadrovskiBroj}
        setKadrovskiBroj={setKadrovskiBroj}
        pp={pp}
        setPp={setPp}
        odredjeno={odredjeno}
        setOdredjeno={setOdredjeno}
        neodredjeno={neodredjeno}
        setNeodredjeno={setNeodredjeno}
        zadruga={zadruga}
        setZadruga={setZadruga}
      />

      <Section2
        dodatnoOpt={dodatnoOpt}
        setDodatnoOpt={setDodatnoOpt}
        pripravnost={pripravnost}
        setPripravnost={setPripravnost}
        prekovremeni={prekovremeni}
        setPrekovremeni={setPrekovremeni}
        prevoz={prevoz}
        setPrevoz={setPrevoz}
      />

      {/* <div>
        <Section3 />
        <button>Zavrsi</button>
      </div> */}
    </div>
  );
}
