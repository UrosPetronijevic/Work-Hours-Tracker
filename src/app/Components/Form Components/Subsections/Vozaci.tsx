"use client";

import { useState } from "react";

type VozaciProps = {
  pripravnost: boolean;
};

export default function Vozaci({ pripravnost }: VozaciProps) {
  const [vozac, setVozac] = useState<boolean>(false);
  const [zamenikPredsednika, setZamenikPredsednika] = useState<boolean>(false);

  const handlePosition = (selectedOption: string) => {
    setVozac(false);
    setZamenikPredsednika(false);

    switch (selectedOption) {
      case "Vozac":
        setVozac(!vozac);
        break;
      case "zamenikPredsednika":
        setZamenikPredsednika(!zamenikPredsednika);
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
      <h1 className="self-center text-3xl -tracking-tight">VOZACI</h1>

      <div>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-lg">Komisija :</h3>
          <ul className="flex flex-col gap-4">
            <li onClick={() => handlePosition("Vozac")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className="w-5 h-5"
                  checked={vozac}
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
                  checked={zamenikPredsednika}
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
