"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type NepredvidjeniProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  nepredvidjeniGornjeF: boolean;
  setNepredvidjeniGornjeF: React.Dispatch<React.SetStateAction<boolean>>;

  nepredvidjeniDonjeF: boolean;
  setNepredvidjeniDonjeF: React.Dispatch<React.SetStateAction<boolean>>;

  nepredvidjeniGornjeE: boolean;
  setNepredvidjeniGornjeE: React.Dispatch<React.SetStateAction<boolean>>;

  nepredvidjeniDonjeE: boolean;
  setNepredvidjeniDonjeE: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nepredvidjeni({
  pripravnost,
  kadrovskiBroj,
  setGroups,
  nepredvidjeniGornjeF,
  setNepredvidjeniGornjeF,
  nepredvidjeniDonjeF,
  setNepredvidjeniDonjeF,
  nepredvidjeniGornjeE,
  setNepredvidjeniGornjeE,
  nepredvidjeniDonjeE,
  setNepredvidjeniDonjeE,
}: NepredvidjeniProps) {
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    setNepredvidjeniGornjeF(false);
    setNepredvidjeniDonjeF(false);

    setNepredvidjeniGornjeE(false);
    setNepredvidjeniDonjeE(false);

    switch (selectedOption) {
      case "nepredvidjeniFilijalaGornje":
        setNepredvidjeniGornjeF((prev) => !prev);
        break;
      case "nepredvidjeniFilijalaDonje":
        setNepredvidjeniDonjeF((prev) => !prev);
        break;
      case "nepredvidjeniEkspozituraGornje":
        setNepredvidjeniGornjeE((prev) => !prev);
        break;
      case "nepredvidjeniEkspozituraDonje":
        setNepredvidjeniDonjeE((prev) => !prev);
        break;
      default:
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   setGroups((prevGroups) => {
  //     const updatedGroups = { ...prevGroups };

  //     // Assign new values (only update the relevant one)
  //     updatedGroups.filijala.sakljucariGornje.nepredvidjeni =
  //       nepredvidjeniGornjeF ? kadrovskiBroj : null;
  //     updatedGroups.filijala.sakljucariDonje.nepredvidjeni = nepredvidjeniDonjeF
  //       ? kadrovskiBroj
  //       : null;
  //     updatedGroups.ekspozitura.sakljucariGornje.nepredvidjeni =
  //       nepredvidjeniGornjeE ? kadrovskiBroj : null;

  //     updatedGroups.ekspozitura.sakljucariDonje.nepredvidjeni =
  //       nepredvidjeniDonjeE ? kadrovskiBroj : null;

  //     console.log("Updated Groups:", prevGroups);

  //     return updatedGroups;
  //   });
  // }, [
  //   nepredvidjeniGornjeF,
  //   nepredvidjeniDonjeF,
  //   nepredvidjeniGornjeE,
  //   nepredvidjeniDonjeE,
  // ]);

  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`flex flex-col select-none gap-8 ${
        pripravnost
          ? "text-slate-700 enabled transition-all ease-in"
          : "text-slate-400 disabled transition-all ease-out"
      }`}
    >
      <h1 className="self-center text-3xl -tracking-tight">NEPREDVIDJENI</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Filijala :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("nepredvidjeniFilijalaGornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={nepredvidjeniGornjeF}
                  readOnly
                />
                <span>Nepredvidjeni gornje</span>
              </label>
            </li>

            <li onClick={() => handlePosition("nepredvidjeniFilijalaDonje")}>
              <label className="flex gap-4 items-center text-md border-b border-slate-400 pb-4">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={nepredvidjeniDonjeF}
                  readOnly
                />
                <span>Nepredvidjeni Donje</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Ekspozitura :</h3>
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => handlePosition("nepredvidjeniEkspozituraGornje")}
            >
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={nepredvidjeniGornjeE}
                  readOnly
                />
                <span>Nepredvidjeni gornje</span>
              </label>
            </li>

            <li onClick={() => handlePosition("nepredvidjeniEkspozituraDonje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={nepredvidjeniDonjeE}
                  readOnly
                />
                <span>Nepredvidjeni Donje</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
