"use client";

import { useState } from "react";
import SakljucarstvoNav from "./SakljucarstvoNav";

export default function Page() {
  const [activeSakljucar, setActiveSakljucar] = useState<string | null>(null);
  return (
    <div className="min-h-[85vh] max-w-full px-4 flex flex-col">
      <SakljucarstvoNav
        setActiveSakljucar={setActiveSakljucar}
        activeSakljucar={activeSakljucar}
      />
    </div>
  );
}
