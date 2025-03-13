"use client";

import { useState } from "react";

type FilijalaProps = {
  pripravnost: boolean;
};

export default function Filijala({ pripravnost }: FilijalaProps) {
  const [sakljucarGornje, setSakljucarGornje] = useState(false);
  const [zamenik1Gornje, setZamenik1Gornje] = useState(false);
  const [zamenik2Gornje, setZamenik2Gornje] = useState(false);

  const [sakljucarDonje, setSakljucarDonje] = useState(false);
  const [zamenik1Donje, setZamenik1Donje] = useState(false);
  const [zamenik2Donje, setZamenik2Donje] = useState(false);
  //////////////////////////////////////////////////////////////////////////////////

  const handlePosition = (selectedOption: string) => {
    setSakljucarGornje(false);
    setZamenik1Gornje(false);
    setZamenik2Gornje(false);
    setSakljucarDonje(false);
    setZamenik1Donje(false);
    setZamenik2Donje(false);

    switch (selectedOption) {
      case "sakljucarGornje":
        setSakljucarGornje(true);
        break;
      case "zamenik1Gornje":
        setZamenik1Gornje(true);
        break;
      case "zamenik2Gornje":
        setZamenik2Gornje(true);
        break;
      case "sakljucarDonje":
        setSakljucarDonje(true);
        break;
      case "zamenik1Donje":
        setZamenik1Donje(true);
        break;
      case "zamenik2Donje":
        setZamenik2Donje(true);
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
                <span>Prvi Zamenik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik2Gornje")}>
              <label className="flex gap-4 items-center text-md mb-8">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Drugi Zamenik</span>
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
                <span>Prvi Zamenik</span>
              </label>
            </li>

            <li onClick={() => handlePosition("zamenik2Donje")}>
              <label className="flex gap-4 items-center text-md">
                <input
                  type="checkbox"
                  disabled={!pripravnost}
                  className=" w-5 h-5"
                />
                <span>Drugi Zamenik</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
