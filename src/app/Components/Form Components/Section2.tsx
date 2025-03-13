"use client";

import { useState } from "react";
import Section3 from "./Section3";

type Section2Props = {
  dodatnoOpt: boolean;
  setDodatnoOpt: React.Dispatch<React.SetStateAction<boolean>>;
  pripravnost: boolean;
  setPripravnost: React.Dispatch<React.SetStateAction<boolean>>;
  prekovremeni: boolean;
  setPrekovremeni: React.Dispatch<React.SetStateAction<boolean>>;
  prevoz: boolean;
  setPrevoz: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Section2({
  dodatnoOpt,
  setDodatnoOpt,
  pripravnost,
  setPripravnost,
  prekovremeni,
  setPrekovremeni,
  prevoz,
  setPrevoz,
}: Section2Props) {
  const [sakljucarFilijala, setSakljucarFilijala] = useState(true);
  const [sakljucarEkspozitura, setSakljucarEkspozitura] = useState(false);
  const [komisijaZaPrijem, setKomisijaZaPrijem] = useState(false);
  const [komisijaZaNbs, setKomisijaZaNbs] = useState(false);
  const [nepredvidjeni, setNepredvidjeni] = useState(false);
  const [vozac, setVozac] = useState(false);

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
    <div className="grid grid-cols-2 w-full h-full gap-8">
      <div className="flex flex-col gap-4 px-4 py-8 h-full justify-between border-l border-r border-t border-gray-200 shadow-lg rounded-[.7rem] select-none">
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
                <span className="text-sm font-medium text-gray-700">
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

        {/* Dodatno Opt */}
        <div className="flex justify-center w-full">
          <div
            className="p-2 bg-white rounded border border-gray-300 flex items-center w-[80%] cursor-pointer"
            onClick={() => setDodatnoOpt(!dodatnoOpt)} // Toggle checkbox on click
          >
            <div className="flex items-center justify-center w-[40%]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dodatnoOpt}
                  onChange={() => setDodatnoOpt(!dodatnoOpt)} // Ensure the checkbox still works if clicked directly
                  className="w-5 h-5 rounded-md cursor-pointer"
                />
              </label>
            </div>
            <div className="flex items-center justify-start w-[60%]">
              <span className="text-sm font-medium text-gray-700">
                Dodatno Opt.
              </span>
            </div>
          </div>
        </div>

        {/* Prekovremeni */}
        <div className="flex justify-center w-full">
          <div
            className="p-2 bg-white rounded border border-gray-300 flex items-center w-[80%] cursor-pointer"
            onClick={() => setPrekovremeni(!prekovremeni)} // Toggle checkbox on click
          >
            <div className="flex items-center justify-center w-[40%]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={prekovremeni}
                  onChange={() => setPrekovremeni(!prekovremeni)} // Ensure the checkbox still works if clicked directly
                  className="w-5 h-5 rounded-md cursor-pointer"
                />
              </label>
            </div>
            <div className="flex items-center justify-start w-[60%]">
              <span className="text-sm font-medium text-gray-700">
                Prekovremeni
              </span>
            </div>
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
              <span className="text-sm font-medium text-gray-700">Prevoz</span>
            </div>
          </div>
        </div>
      </div>

      <Section3
        pripravnost={pripravnost}
        sakljucarFilijala={sakljucarFilijala}
        sakljucarEkspozitura={sakljucarEkspozitura}
        komisijaZaPrijem={komisijaZaPrijem}
        komisijaZaNbs={komisijaZaNbs}
        nepredvidjeni={nepredvidjeni}
        vozac={vozac}
      />
    </div>
  );
}
