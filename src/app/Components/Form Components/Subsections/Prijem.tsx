"use client";

import { useEffect, useState } from "react";
import { Groups } from "../../Classes/Groups";

type PrijemProps = {
  pripravnost: boolean;
  kadrovskiBroj: string;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;

  predsednikKomisijeP: boolean;
  setPredsednikKomisijeP: React.Dispatch<React.SetStateAction<boolean>>;

  zamenikPredsednikaP: boolean;
  setZamenikPredsednikaP: React.Dispatch<React.SetStateAction<boolean>>;

  clanKomisije2P: boolean;
  setClanKomisije2P: React.Dispatch<React.SetStateAction<boolean>>;

  zamenikClana2P: boolean;
  setZamenikClana2P: React.Dispatch<React.SetStateAction<boolean>>;

  clanKomisije3P: boolean;
  setClanKomisije3P: React.Dispatch<React.SetStateAction<boolean>>;

  zamenikClana3P: boolean;
  setZamenikClana3P: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Prijem({
  pripravnost,
  setGroups,
  kadrovskiBroj,
  predsednikKomisijeP,
  setPredsednikKomisijeP,
  zamenikPredsednikaP,
  setZamenikPredsednikaP,
  clanKomisije2P,
  setClanKomisije2P,
  zamenikClana2P,
  setZamenikClana2P,
  clanKomisije3P,
  setClanKomisije3P,
  zamenikClana3P,
  setZamenikClana3P,
}: PrijemProps) {
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    setPredsednikKomisijeP(false);
    setZamenikPredsednikaP(false);
    setClanKomisije2P(false);
    setZamenikClana2P(false);
    setClanKomisije3P(false);
    setZamenikClana3P(false);

    switch (selectedOption) {
      case "predsednikKomisije":
        setPredsednikKomisijeP((prev) => !prev);
        break;
      case "zamenikPredsednika":
        setZamenikPredsednikaP((prev) => !prev);
        break;
      case "clanKomisije2":
        setClanKomisije2P((prev) => !prev);
        break;
      case "zamenikClana2":
        setZamenikClana2P((prev) => !prev);
        break;
      case "clanKomisije3":
        setClanKomisije3P((prev) => !prev);
        break;
      case "zamenikClana3":
        setZamenikClana3P((prev) => !prev);
        break;
      default:
        break;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setGroups((prevGroups) => {
      const updatedGroups = { ...prevGroups };

      updatedGroups.prijem.predsednik = predsednikKomisijeP
        ? kadrovskiBroj
        : null;
      updatedGroups.prijem.zamenikPredsednika = zamenikPredsednikaP
        ? kadrovskiBroj
        : null;
      updatedGroups.prijem.clanKomisije2 = clanKomisije2P
        ? kadrovskiBroj
        : null;
      updatedGroups.prijem.zamenikClana2 = zamenikClana2P
        ? kadrovskiBroj
        : null;
      updatedGroups.prijem.clanKomisije3 = clanKomisije3P
        ? kadrovskiBroj
        : null;
      updatedGroups.prijem.zamenikClana3 = zamenikClana3P
        ? kadrovskiBroj
        : null;

      console.log("Updated Groups After:", updatedGroups);

      return updatedGroups;
    });
  }, [
    predsednikKomisijeP,
    zamenikPredsednikaP,
    clanKomisije2P,
    zamenikClana2P,
    clanKomisije3P,
    zamenikClana3P,
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
      <h1 className="self-center text-3xl -tracking-tight">PRIJEM</h1>

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
                  checked={predsednikKomisijeP}
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
                  checked={zamenikPredsednikaP}
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
                  checked={clanKomisije2P}
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
                  checked={zamenikClana2P}
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
                  checked={clanKomisije3P}
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
                  checked={zamenikClana3P}
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
