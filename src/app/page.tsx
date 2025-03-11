"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [toggleForm, setToggleForm] = useState<boolean>(false);

  return (
    <div className="max-w-screen bg-red-200 flex justify-center min-h-screen items-center">
      <h1 className="text-7xl">hello</h1>
      <button
        className="bg-green-300 px-4 py-2"
        onClick={() => {
          setToggleForm(true);
        }}
      >
        Add employee
      </button>

      {toggleForm}
    </div>
  );
}
