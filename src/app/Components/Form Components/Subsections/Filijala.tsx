"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type FilijalaProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;
};

export default function Filijala({
  pripravnost,
  setGroups,
  kadrovskiBroj,
}: FilijalaProps) {
  const [sakljucarGornje, setSakljucarGornje] = useState<string | null>(null);
  const [zamenik1Gornje, setZamenik1Gornje] = useState<string | null>(null);
  const [zamenik2Gornje, setZamenik2Gornje] = useState<string | null>(null);

  const [sakljucarDonje, setSakljucarDonje] = useState<string | null>(null);
  const [zamenik1Donje, setZamenik1Donje] = useState<string | null>(null);
  const [zamenik2Donje, setZamenik2Donje] = useState<string | null>(null);

  // 🔹 Function to update local state only
  const handlePosition = (selectedOption: string) => {
    switch (selectedOption) {
      case "sakljucarGornje":
        setSakljucarGornje(kadrovskiBroj);
        break;
      case "zamenik1Gornje":
        setZamenik1Gornje(kadrovskiBroj);
        break;
      case "zamenik2Gornje":
        setZamenik2Gornje(kadrovskiBroj);
        break;
      case "sakljucarDonje":
        setSakljucarDonje(kadrovskiBroj);
        break;
      case "zamenik1Donje":
        setZamenik1Donje(kadrovskiBroj);
        break;
      case "zamenik2Donje":
        setZamenik2Donje(kadrovskiBroj);
        break;
      default:
        break;
    }
  };

  // 🔹 Sync local state to `setGroups` safely after updates
  useEffect(() => {
    setGroups((prevGroups) => {
      const updatedGroups = { ...prevGroups };

      // Remove `kadrovskiBroj` from all positions where it was previously set
      const removeKadrovskiBroj = (obj: any) => {
        Object.keys(obj).forEach((key) => {
          if (obj[key] === kadrovskiBroj) obj[key] = null;
        });
      };

      removeKadrovskiBroj(updatedGroups.filijala.sakljucariGornje);
      removeKadrovskiBroj(updatedGroups.filijala.sakljucariDonje);

      // Assign new values (only update the relevant one)
      if (sakljucarGornje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariGornje.sakljucar = sakljucarGornje;
      if (zamenik1Gornje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariGornje.zamenik1 = zamenik1Gornje;
      if (zamenik2Gornje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariGornje.zamenik2 = zamenik2Gornje;

      if (sakljucarDonje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariDonje.sakljucar = sakljucarDonje;
      if (zamenik1Donje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariDonje.zamenik1 = zamenik1Donje;
      if (zamenik2Donje === kadrovskiBroj)
        updatedGroups.filijala.sakljucariDonje.zamenik2 = zamenik2Donje;

      return updatedGroups;
    });
  }, [
    sakljucarGornje,
    zamenik1Gornje,
    zamenik2Gornje,
    sakljucarDonje,
    zamenik1Donje,
    zamenik2Donje,
  ]);
  //////////////////////////////////////////////////////////////////////////////////

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
        <div className="flex flex-col gap-4 border-b border-slate-400">
          <h3 className="text-lg">Gornja Brava :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("sakljucarGornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
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
