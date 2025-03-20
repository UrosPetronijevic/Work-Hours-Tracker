"use client";

import { useState } from "react";
import { Groups } from "../../Classes/Groups";

type PrijemProps = {
  pripravnost: boolean;

  setGroups: React.Dispatch<React.SetStateAction<Groups>>;
};

export default function Prijem({ pripravnost, setGroups }: PrijemProps) {
  const [predsednikKomisije, setPredsednikKomisije] = useState<boolean>(false);
  const [zamenikPredsednika, setZamenikPredsednika] = useState<boolean>(false);

  const [clanKomisije2, setClanKomisije2] = useState<boolean>(false);
  const [zamenikClana2, setZamenikClana2] = useState<boolean>(false);

  const [clanKomisije3, setClanKomisije3] = useState<boolean>(false);
  const [zamenikClana3, setZamenikClana3] = useState<boolean>(false);

  const handlePosition = (selectedOption: string) => {
    setPredsednikKomisije(false);
    setZamenikPredsednika(false);
    setClanKomisije2(false);
    setZamenikClana2(false);
    setClanKomisije3(false);
    setZamenikClana3(false);

    switch (selectedOption) {
      case "predsednikKomisije":
        setPredsednikKomisije(!predsednikKomisije);
        break;
      case "zamenikPredsednika":
        setZamenikPredsednika(!zamenikPredsednika);
        break;
      case "clanKomisije2":
        setClanKomisije2(!clanKomisije2);
        break;
      case "zamenikClana2":
        setZamenikClana2(!zamenikClana2);
        break;
      case "clanKomisije3":
        setClanKomisije3(!clanKomisije3);
        break;
      case "zamenikClana3":
        setZamenikClana3(!zamenikClana3);
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
                  checked={predsednikKomisije}
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
                  checked={zamenikPredsednika}
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
                  checked={clanKomisije2}
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
                  checked={zamenikClana2}
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
                  checked={clanKomisije3}
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
                  checked={zamenikClana3}
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
