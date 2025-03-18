"use client";

import { useState } from "react";

type NepredvidjeniProps = {
  pripravnost: boolean;
};

export default function Nepredvidjeni({ pripravnost }: NepredvidjeniProps) {
  const [nepredvidjeniGornjeFilijala, setNepredvidjeniGornjeFilijala] =
    useState<boolean>(false);
  const [nepredvidjeniDonjeFilijala, setNepredvidjeniDonjeFilijala] =
    useState<boolean>(false);

  const [nepredvidjeniGornjeEkspozitura, setNepredvidjeniGornjeEkspozitura] =
    useState<boolean>(false);
  const [nepredvidjeniDonjeEkspozitura, setNepredvidjeniDonjeEkspozitura] =
    useState<boolean>(false);
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    setNepredvidjeniGornjeFilijala(false);
    setNepredvidjeniDonjeFilijala(false);

    setNepredvidjeniGornjeEkspozitura(false);
    setNepredvidjeniDonjeEkspozitura(false);

    switch (selectedOption) {
      case "nepredvidjeniFilijalaGornje":
        setNepredvidjeniGornjeFilijala(true);
        break;
      case "nepredvidjeniFilijalaDonje":
        setNepredvidjeniDonjeFilijala(true);
        break;
      case "nepredvidjeniEkspozituraGornje":
        setNepredvidjeniGornjeEkspozitura(true);
        break;
      case "nepredvidjeniEkspozituraDonje":
        setNepredvidjeniDonjeEkspozitura(true);
        break;
      default:
        break;
    }
  };

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
          <h3 className="text-lg">Filijala</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("nepredvidjeniFilijalaGornje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
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
                />
                <span>Nepredvidjeni Donje</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Ekspozitura</h3>
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => handlePosition("nepredvidjeniEkspozituraGornje")}
            >
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
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
