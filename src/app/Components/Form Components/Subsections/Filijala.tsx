"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type FilijalaProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  sakljucarGornjeF: boolean;
  setSakljucarGornjeF: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik1GornjeF: boolean;
  setZamenik1GornjeF: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik2GornjeF: boolean;
  setZamenik2GornjeF: React.Dispatch<React.SetStateAction<boolean>>;

  sakljucarDonjeF: boolean;
  setSakljucarDonjeF: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik1DonjeF: boolean;
  setZamenik1DonjeF: React.Dispatch<React.SetStateAction<boolean>>;

  zamenik2DonjeF: boolean;
  setZamenik2DonjeF: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Filijala({
  pripravnost,
  kadrovskiBroj,
  setGroups,

  sakljucarGornjeF,
  setSakljucarGornjeF,

  zamenik1GornjeF,
  setZamenik1GornjeF,

  zamenik2GornjeF,
  setZamenik2GornjeF,

  sakljucarDonjeF,
  setSakljucarDonjeF,

  zamenik1DonjeF,
  setZamenik1DonjeF,

  zamenik2DonjeF,
  setZamenik2DonjeF,
}: FilijalaProps) {
  //////////////////////////////////////////////////////////////////////////////////

  // 🔹 Function to update local state only
  const handlePosition = (selectedOption: string) => {
    setSakljucarGornjeF(false);
    setZamenik1GornjeF(false);
    setZamenik2GornjeF(false);
    setSakljucarDonjeF(false);
    setZamenik1DonjeF(false);
    setZamenik2DonjeF(false);

    switch (selectedOption) {
      case "sakljucarGornje":
        setSakljucarGornjeF((prev) => !prev);
        break;
      case "zamenik1Gornje":
        setZamenik1GornjeF((prev) => !prev);
        break;
      case "zamenik2Gornje":
        setZamenik2GornjeF((prev) => !prev);
        break;
      case "sakljucarDonje":
        setSakljucarDonjeF((prev) => !prev);
        break;
      case "zamenik1Donje":
        setZamenik1DonjeF((prev) => !prev);
        break;
      case "zamenik2Donje":
        setZamenik2DonjeF((prev) => !prev);
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
      updatedGroups.filijala.sakljucariGornje.sakljucar = sakljucarGornjeF
        ? kadrovskiBroj
        : null;
      updatedGroups.filijala.sakljucariGornje.zamenik1 = zamenik1GornjeF
        ? kadrovskiBroj
        : null;
      updatedGroups.filijala.sakljucariGornje.zamenik2 = zamenik2GornjeF
        ? kadrovskiBroj
        : null;

      updatedGroups.filijala.sakljucariDonje.sakljucar = sakljucarDonjeF
        ? kadrovskiBroj
        : null;
      updatedGroups.filijala.sakljucariDonje.zamenik1 = zamenik1DonjeF
        ? kadrovskiBroj
        : null;
      updatedGroups.filijala.sakljucariDonje.zamenik2 = zamenik2DonjeF
        ? kadrovskiBroj
        : null;

      return updatedGroups;
    });
  }, [
    sakljucarGornjeF,
    zamenik1GornjeF,
    zamenik2GornjeF,
    sakljucarDonjeF,
    zamenik1DonjeF,
    zamenik2DonjeF,
  ]);
  //////////////////////////////////////////////////////////////////////////////////

  console.log();

  const handleAsign = () => {};

  return (
    <div
      className={`flex flex-col select-none gap-8 ${
        pripravnost
          ? "text-slate-700 enabled transition-all ease-in"
          : "text-slate-400 disabled transition-all ease-out"
      }`}
    >
      <h1 className="self-center text-3xl -tracking-tight">FILIJALA</h1>

      <div className="h-full grid grid-rows-2 gap-4">
        {/* Gornja Brava */}
        <div className="flex flex-col gap-4 border-b border-slate-400">
          <h3 className="text-lg">Gornja Brava :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("sakljucarGornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={sakljucarGornjeF}
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
                  className="w-5 h-5"
                  checked={zamenik1GornjeF}
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
                  className="w-5 h-5"
                  checked={zamenik2GornjeF}
                  readOnly
                />
                <span>Drugi zamenik</span>
              </label>
            </li>
          </ul>
        </div>

        {/* Donja Brava */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Donja Brava :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("sakljucarDonje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={sakljucarDonjeF}
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
                  className="w-5 h-5"
                  checked={zamenik1DonjeF}
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
                  className="w-5 h-5"
                  checked={zamenik2DonjeF}
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
