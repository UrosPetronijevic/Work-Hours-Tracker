"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type VozaciProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  glavniVozac: boolean;
  setGlavniVozac: React.Dispatch<React.SetStateAction<boolean>>;

  zamenikVozaca: boolean;
  setZamenikVozaca: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Vozaci({
  pripravnost,
  kadrovskiBroj,
  setGroups,
  glavniVozac,
  setGlavniVozac,
  zamenikVozaca,
  setZamenikVozaca,
}: VozaciProps) {
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    setGlavniVozac(false);
    setZamenikVozaca(false);

    switch (selectedOption) {
      case "Vozac":
        setGlavniVozac((prev) => !prev);
        break;
      case "zamenikPredsednika":
        setZamenikVozaca((prev) => !prev);
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setGroups((prevGroups) => {
      const updatedGroups = { ...prevGroups };

      updatedGroups.vozaci.vozac = glavniVozac ? kadrovskiBroj : null;
      updatedGroups.vozaci.zamenaVozaca = zamenikVozaca ? kadrovskiBroj : null;

      console.log("Updated Groups After:", updatedGroups);

      return updatedGroups;
    });
  }, [glavniVozac, zamenikVozaca]);

  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`flex flex-col select-none gap-8 ${
        pripravnost
          ? "text-slate-700 enabled transition-all ease-in"
          : "text-slate-400 disabled transition-all ease-out"
      }`}
    >
      <h1 className="self-center text-3xl -tracking-tight">VOZACI</h1>

      <div>
        <div className="flex flex-col gap-4 justify-center">
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("Vozac")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={glavniVozac}
                  readOnly
                />
                <span>Vozac</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikPredsednika")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={zamenikVozaca}
                  readOnly
                />
                <span>Zamenik vozaca</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
