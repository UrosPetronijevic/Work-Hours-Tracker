"use client";

import { useState } from "react";
import Section3 from "./Section3";
import { Groups } from "../Classes/Groups";
import { Employee } from "../Classes/Employee";

type Section2Props = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  dodatnoOpt: boolean;
  setDodatnoOpt: React.Dispatch<React.SetStateAction<boolean>>;
  pripravnost: boolean;
  setPripravnost: React.Dispatch<React.SetStateAction<boolean>>;
  prekovremeni: boolean;
  setPrekovremeni: React.Dispatch<React.SetStateAction<boolean>>;
  prevoz: boolean;
  setPrevoz: React.Dispatch<React.SetStateAction<boolean>>;

  ime: string;
  prezime: string;
  kadrovskiBroj: string;
  datumRodjenja: string;
  radniStaz: string;

  proceed: boolean;

  pp: boolean;
  setPp: React.Dispatch<React.SetStateAction<boolean>>;
  odredjeno: boolean;
  setOdredjeno: React.Dispatch<React.SetStateAction<boolean>>;
  neodredjeno: boolean;
  setNeodredjeno: React.Dispatch<React.SetStateAction<boolean>>;
  zadruga: boolean;
  setZadruga: React.Dispatch<React.SetStateAction<boolean>>;

  setForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Section2({
  setGroups,
  setEmployees,
  dodatnoOpt,
  setDodatnoOpt,
  pripravnost,
  setPripravnost,
  prekovremeni,
  setPrekovremeni,
  prevoz,
  setPrevoz,
  ime,
  prezime,
  kadrovskiBroj,
  datumRodjenja,
  radniStaz,
  proceed,
  pp,
  setPp,
  odredjeno,
  setOdredjeno,
  neodredjeno,
  setNeodredjeno,
  zadruga,
  setZadruga,
  setForm,
}: Section2Props) {
  ////////////////////////////////////////////////////////////////////////////////////////////

  const [sakljucarFilijala, setSakljucarFilijala] = useState(true);
  const [sakljucarEkspozitura, setSakljucarEkspozitura] = useState(false);
  const [komisijaZaPrijem, setKomisijaZaPrijem] = useState(false);
  const [komisijaZaNbs, setKomisijaZaNbs] = useState(false);
  const [nepredvidjeni, setNepredvidjeni] = useState(false);
  const [vozac, setVozac] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////////////////

  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value; // Extract the selected value

    // Reset all states to false
    setSakljucarFilijala(false);
    setSakljucarEkspozitura(false);
    setKomisijaZaPrijem(false);
    setKomisijaZaNbs(false);
    setNepredvidjeni(false);
    setVozac(false);

    // Set the selected option to true
    switch (selectedOption) {
      case "option1":
        setSakljucarFilijala(true);
        break;
      case "option2":
        setSakljucarEkspozitura(true);
        break;
      case "option3":
        setKomisijaZaPrijem(true);
        break;
      case "option4":
        setKomisijaZaNbs(true);
        break;
      case "option5":
        setNepredvidjeni(true);
        break;
      case "option6":
        setVozac(true);
        break;
      default:
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`grid grid-cols-2 w-full h-full gap-8 ${
        proceed ? "cursor-pointer" : "pointer-events-none"
      }`}
    >
      <div className="flex flex-col justify-between gap-4 px-4 py-8 h-full border-l border-r border-t border-gray-200 shadow-lg rounded-[.7rem] select-none">
        {/* Pripravnost */}
        <div className="flex justify-center w-full">
          <div className="p-2 bg-white rounded border border-gray-300 flex items-center w-[80%] cursor-pointer">
            <div
              className="w-full flex"
              onClick={() => setPripravnost(!pripravnost)}
            >
              <div className="flex items-center justify-center w-[40%]">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={pripravnost}
                    onChange={() => setPripravnost(!pripravnost)} // Ensure the checkbox still works if clicked directly
                    className="w-5 h-5 rounded-md cursor-pointer"
                  />
                </label>
              </div>
              <div className="flex items-center justify-start w-[60%]">
                <span
                  className={`${
                    proceed ? "text-gray-700" : "text-slate-400"
                  } text-sm font-medium`}
                >
                  Pripravnost
                </span>
              </div>
            </div>

            <select
              className={`border border-gray-500 rounded text-sm text-gray-700 cursor-pointer w-[8%] ${
                pripravnost === false ? "border-gray-300" : ""
              }`}
              onChange={handleOptionSelect}
              disabled={pripravnost === false} // Disable the select if `pripravnost` is false
            >
              <option value="option1">Sakljucar filijala</option>
              <option value="option2">Sakljucar ekspozitura</option>
              <option value="option3">Komisija za prijem</option>
              <option value="option4">Komisija za nbs</option>
              <option value="option5">Nepredvidjeni</option>
              <option value="option6">Vozac</option>
            </select>
          </div>
        </div>

        {/* Prevoz */}
        <div className="flex justify-center w-full">
          <div
            className="p-2 bg-white rounded border border-gray-300 flex items-center w-[80%] cursor-pointer"
            onClick={() => setPrevoz(!prevoz)} // Toggle checkbox on click
          >
            <div className="flex items-center justify-center w-[40%]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={prevoz}
                  onChange={() => setPrevoz(!prevoz)} // Ensure the checkbox still works if clicked directly
                  className="w-5 h-5 rounded-md cursor-pointer"
                />
              </label>
            </div>
            <div className="flex items-center justify-start w-[60%]">
              <span
                className={`${
                  proceed ? "text-gray-700" : "text-slate-400"
                } text-sm font-medium`}
              >
                Prevoz
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 bg-blue-100 p-2 rounded">
          {/* Left Column */}
          <div className="flex flex-col w-full justify-center gap-4 p-2">
            {/* Neodređeno */}
            <div className="p-2 bg-white rounded">
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Neodređeno
                </span>
                <input
                  type="checkbox"
                  checked={neodredjeno}
                  onChange={() => setNeodredjeno(!neodredjeno)}
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>
            {/* Određeno */}
            <div className="p-2 bg-white rounded">
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Određeno
                </span>
                <input
                  type="checkbox"
                  checked={odredjeno}
                  onChange={() => setOdredjeno(!odredjeno)}
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full justify-center gap-4 p-2">
            {/* Stalni */}
            <div className="p-2 bg-white rounded">
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">PP</span>
                <input
                  type="checkbox"
                  checked={pp}
                  onChange={() => setPp(!pp)}
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>

            {/* Zadruga */}
            <div className="p-2 bg-white rounded">
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Zadruga
                </span>
                <input
                  type="checkbox"
                  checked={zadruga}
                  onChange={() => setZadruga(!zadruga)}
                  className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <Section3
        sakljucarFilijala={sakljucarFilijala}
        sakljucarEkspozitura={sakljucarEkspozitura}
        komisijaZaPrijem={komisijaZaPrijem}
        komisijaZaNbs={komisijaZaNbs}
        nepredvidjeni={nepredvidjeni}
        vozac={vozac}
        setGroups={setGroups}
        setEmployees={setEmployees}
        ///////
        ime={ime}
        prezime={prezime}
        kadrovskiBroj={kadrovskiBroj}
        datumRodjenja={datumRodjenja}
        radniStaz={radniStaz}
        ///////
        pripravnost={pripravnost}
        prevoz={prevoz}
        ///////
        pp={pp}
        odredjeno={odredjeno}
        neodredjeno={neodredjeno}
        zadruga={zadruga}
        setForm={setForm}
      />
    </div>
  );
}
