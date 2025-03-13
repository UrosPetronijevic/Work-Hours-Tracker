"use client";

import { useState } from "react";

type NbsProps = {
  pripravnost: boolean;
};

export default function Nbs({ pripravnost }: NbsProps) {
  const [predsednikKomisije, setPredsednikKomisije] = useState<boolean>(false);
  const [zamenikPredsednika, setZamenikPredsednika] = useState<boolean>(false);

  const [clanKomisije2, setClanKomisije2] = useState<boolean>(false);
  const [zamenikClana2, setZamenikClana2] = useState<boolean>(false);

  const [clanKomisije3, setClanKomisije3] = useState<boolean>(false);
  const [zamenikClana3, setZamenikClana3] = useState<boolean>(false);
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    // Reset all new states to false
    setPredsednikKomisije(false);
    setZamenikPredsednika(false);
    setClanKomisije2(false);
    setZamenikClana2(false);
    setClanKomisije3(false);
    setZamenikClana3(false);

    // Set the selected option to true
    switch (selectedOption) {
      case "predsednikKomisije":
        setPredsednikKomisije(true);
        break;
      case "zamenikPredsednika":
        setZamenikPredsednika(true);
        break;
      case "clanKomisije2":
        setClanKomisije2(true);
        break;
      case "zamenikClana2":
        setZamenikClana2(true);
        break;
      case "clanKomisije3":
        setClanKomisije3(true);
        break;
      case "zamenikClana3":
        setZamenikClana3(true);
        break;
      default:
        break;
    }
  };

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
                  className=" w-5 h-5"
                />
                <span>Predsednik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikPredsednika")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Zamenik Predsednika</span>
              </label>
            </li>

            <li onClick={() => handlePosition("clanKomisije2")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Drugi clan</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikClana2")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Zamenik drugog clana</span>
              </label>
            </li>

            <li onClick={() => handlePosition("clanKomisije3")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Treci clan</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenikClana3")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
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
