"use client";

import { useState } from "react";

type SakljucarstvoNavProps = {
  activeSakljucar: string | null;
  setActiveSakljucar: React.Dispatch<React.SetStateAction<string | null>>;
};

const sakljucarstvoNames = [
  "Filijala",
  "Ekspozitura",
  "Prijem",
  "Nbs",
  "Nepredvidjeni",
  "Vozaci",
];

export default function SakljucarstvoNav({
  setActiveSakljucar,
  activeSakljucar,
}: SakljucarstvoNavProps) {
  const handleTableClick = (tableName: string) => {
    setActiveSakljucar((prev) => (prev === tableName ? null : tableName));
  };

  return (
    <div className="grid grid-cols-6">
      {sakljucarstvoNames.map((name, i) => (
        <button
          key={i}
          onClick={() => handleTableClick(name)}
          className={`px-4 py-2 ${
            activeSakljucar === name ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
