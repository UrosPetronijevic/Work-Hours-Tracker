"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

interface NbsProps {
  pripravnost: boolean;
  kadrovskiBroj: string;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  // States
  predsednikKomisijeN: boolean;
  zamenikPredsednikaN: boolean;
  clanKomisije2N: boolean;
  zamenikClana2N: boolean;
  clanKomisije3N: boolean;
  zamenikClana3N: boolean;

  // Setters
  setPredsednikKomisijeN: React.Dispatch<React.SetStateAction<boolean>>;
  setZamenikPredsednikaN: React.Dispatch<React.SetStateAction<boolean>>;
  setClanKomisije2N: React.Dispatch<React.SetStateAction<boolean>>;
  setZamenikClana2N: React.Dispatch<React.SetStateAction<boolean>>;
  setClanKomisije3N: React.Dispatch<React.SetStateAction<boolean>>;
  setZamenikClana3N: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nbs({
  pripravnost,
  setGroups,
  kadrovskiBroj,
  predsednikKomisijeN,
  zamenikPredsednikaN,
  clanKomisije2N,
  zamenikClana2N,
  clanKomisije3N,
  zamenikClana3N,
  setPredsednikKomisijeN,
  setZamenikPredsednikaN,
  setClanKomisije2N,
  setZamenikClana2N,
  setClanKomisije3N,
  setZamenikClana3N,
}: NbsProps) {
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    // Reset all states to false
    setPredsednikKomisijeN(false);
    setZamenikPredsednikaN(false);
    setClanKomisije2N(false);
    setZamenikClana2N(false);
    setClanKomisije3N(false);
    setZamenikClana3N(false);

    // Toggle the selected option
    switch (selectedOption) {
      case "predsednikKomisije":
        setPredsednikKomisijeN((prev) => !prev);
        break;
      case "zamenikPredsednika":
        setZamenikPredsednikaN((prev) => !prev);
        break;
      case "clanKomisije2":
        setClanKomisije2N((prev) => !prev);
        break;
      case "zamenikClana2":
        setZamenikClana2N((prev) => !prev);
        break;
      case "clanKomisije3":
        setClanKomisije3N((prev) => !prev);
        break;
      case "zamenikClana3":
        setZamenikClana3N((prev) => !prev);
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setGroups((prevGroups) => {
      const updatedGroups = { ...prevGroups };

      updatedGroups.nbs.predsednik = predsednikKomisijeN ? kadrovskiBroj : null;
      updatedGroups.nbs.zamenikPredsednika = zamenikPredsednikaN
        ? kadrovskiBroj
        : null;
      updatedGroups.nbs.clanKomisije2 = clanKomisije2N ? kadrovskiBroj : null;
      updatedGroups.nbs.zamenikClana2 = zamenikClana2N ? kadrovskiBroj : null;
      updatedGroups.nbs.clanKomisije3 = clanKomisije3N ? kadrovskiBroj : null;
      updatedGroups.nbs.zamenikClana3 = zamenikClana3N ? kadrovskiBroj : null;

      console.log("Updated Groups After:", updatedGroups);

      return updatedGroups;
    });
  }, [
    predsednikKomisijeN,
    zamenikPredsednikaN,
    clanKomisije2N,
    zamenikClana2N,
    clanKomisije3N,
    zamenikClana3N,
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
      <h1 className="self-center text-3xl -tracking-tight">NBS</h1>

      <div>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-lg">Komisija :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("predsednikKomisije")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={predsednikKomisijeN}
                  readOnly
                />
                <span>Predsednik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikPredsednika")}>
              <label className="flex gap-4 items-center text-md border-b border-slate-400 pb-4">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={zamenikPredsednikaN}
                  readOnly
                />
                <span>Zamenik predsednika</span>
              </label>
            </li>

            <li onClick={() => handlePosition("clanKomisije2")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={clanKomisije2N}
                  readOnly
                />
                <span>Drugi clan</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikClana2")}>
              <label className="flex gap-4 items-center text-md border-b border-slate-400 pb-4">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={zamenikClana2N}
                  readOnly
                />
                <span>Zamenik drugog clana</span>
              </label>
            </li>

            <li onClick={() => handlePosition("clanKomisije3")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={clanKomisije3N}
                  readOnly
                />
                <span>Treci clan</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikClana3")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={zamenikClana3N}
                  readOnly
                />
                <span>Zamenik treceg clana</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
