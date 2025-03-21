"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type EkspozituraProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  sakljucarGornjeE: boolean;
  setSakljucarGornjeE: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik1GornjeE: boolean;
  setZamenik1GornjeE: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik2GornjeE: boolean;
  setZamenik2GornjeE: React.Dispatch<React.SetStateAction<boolean>>;

  sakljucarDonjeE: boolean;
  setSakljucarDonjeE: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik1DonjeE: boolean;
  setZamenik1DonjeE: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik2DonjeE: boolean;
  setZamenik2DonjeE: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Ekspozitura({
  pripravnost,
  kadrovskiBroj,
  setGroups,

  sakljucarGornjeE,
  setSakljucarGornjeE,

  zamenik1GornjeE,
  setZamenik1GornjeE,

  zamenik2GornjeE,
  setZamenik2GornjeE,

  sakljucarDonjeE,
  setSakljucarDonjeE,

  zamenik1DonjeE,
  setZamenik1DonjeE,

  zamenik2DonjeE,
  setZamenik2DonjeE,
}: EkspozituraProps) {
  //////////////////////////////////////////////////////////////////////////////////

  // 🔹 Function to update local state only
  const handlePosition = (selectedOption: string) => {
    switch (selectedOption) {
      case "sakljucarGornje":
        setSakljucarGornjeE((prev) => !prev);
        break;
      case "zamenik1Gornje":
        setZamenik1GornjeE((prev) => !prev);
        break;
      case "zamenik2Gornje":
        setZamenik2GornjeE((prev) => !prev);
        break;
      case "sakljucarDonje":
        setSakljucarDonjeE((prev) => !prev);
        break;
      case "zamenik1Donje":
        setZamenik1DonjeE((prev) => !prev);
        break;
      case "zamenik2Donje":
        setZamenik2DonjeE((prev) => !prev);
        break;
      default:
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  // 🔹 Sync local state to `setGroups` safely after updates
  useEffect(() => {
    setGroups((prevGroups) => {
      const updatedGroups = { ...prevGroups };

      console.log("Updated Groups:", prevGroups);

      // Assign new values (only update the relevant one)
      updatedGroups.ekspozitura.sakljucariGornje.sakljucar = sakljucarGornjeE
        ? kadrovskiBroj
        : null;
      updatedGroups.ekspozitura.sakljucariGornje.zamenik1 = zamenik1GornjeE
        ? kadrovskiBroj
        : null;
      updatedGroups.ekspozitura.sakljucariGornje.zamenik2 = zamenik2GornjeE
        ? kadrovskiBroj
        : null;

      updatedGroups.ekspozitura.sakljucariDonje.sakljucar = sakljucarDonjeE
        ? kadrovskiBroj
        : null;
      updatedGroups.ekspozitura.sakljucariDonje.zamenik1 = zamenik1DonjeE
        ? kadrovskiBroj
        : null;
      updatedGroups.ekspozitura.sakljucariDonje.zamenik2 = zamenik2DonjeE
        ? kadrovskiBroj
        : null;

      return updatedGroups;
    });
  }, [
    sakljucarGornjeE,
    zamenik1GornjeE,
    zamenik2GornjeE,
    sakljucarDonjeE,
    zamenik1DonjeE,
    zamenik2DonjeE,
  ]);
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`flex flex-col select-none gap-8 ${
        pripravnost
          ? "text-slate-700 enabled transition-all ease-in"
          : "text-slate-400 disabled transition-all ease-out"
      }`}
    >
      <h1 className="self-center text-3xl -tracking-tight">EKSPOZITURA</h1>

      <div className="h-full grid grid-rows-2 gap-4">
        <div className="flex flex-col gap-4 border-b border-slate-400">
          <h3 className="text-lg">Gornja Brava :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("sakljucarGornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={sakljucarGornjeE}
                  readOnly
                />
                <span>Sakljucar</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik1Gornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={zamenik1GornjeE}
                  readOnly
                />
                <span>Prvi zamenik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik2Gornje")}>
              <label className="flex gap-4 items-center text-md mb-8">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={zamenik2GornjeE}
                  readOnly
                />
                <span>Drugi zamenik</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="text-lg">Donja Brava :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("sakljucarDonje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={sakljucarDonjeE}
                  readOnly
                />
                <span>Sakljucar</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik1Donje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={zamenik1DonjeE}
                  readOnly
                />
                <span>Prvi zamenik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik2Donje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                  checked={zamenik2DonjeE}
                  readOnly
                />
                <span>Drugi zamenik</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
