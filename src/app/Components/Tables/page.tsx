"use client";

import { useEffect, useState } from "react";
import { Employee } from "../Classes/Employee";
import { thisMonth, thisYear } from "../Static Data/Dates";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Table5 from "./Table5";
import Table6 from "./Table6";
import Table7 from "./Table7";
import Table8 from "./Table8";
import TableNav from "./TableNav";
import Formpage from "../Form Components/Formpage";
import Table9 from "./Table9";

interface Data {
  [key: string]: {
    employees: Employee[];
  };
}

export default function page() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state
  const [activeTable, setActiveTable] = useState<string | null>(null);

  const [form, setForm] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from your API route
    const fetchData = async () => {
      try {
        const response = await fetch("/api/server"); // The route defined in route.ts
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: Data = await response.json(); // Type the result as `Data`

        console.log(`data is (${thisMonth}, ${thisYear})`, result);

        // After data is set, retrieve the employees for the current month
        const currentMonthKey = `0${thisMonth}.${thisYear}`;
        const currentMonthData = result[currentMonthKey]?.employees || [];
        setEmployees(currentMonthData); // Set employees for the current month
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Set error message if error is caught
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false); // Set loading state to false after fetch completes
      }
    };

    fetchData(); // Call fetchData function
  }, [thisMonth, thisYear]); // Run the effect when `thisMonth` or `thisYear` changes

  const renderTable = () => {
    switch (activeTable) {
      case "Table1":
        return <Table1 employees={employees} />;
      case "Table2":
        return <Table2 employees={employees} />;
      case "Table3":
        return <Table3 />;
      case "Table4":
        return <Table4 />;
      case "Table5":
        return <Table5 />;
      case "Table6":
        return <Table6 />;
      case "Table7":
        return <Table7 />;
      case "Table8":
        return <Table8 />;
      case "Table9":
        return <Table9 />;
      default:
        return <Table1 employees={employees} />;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-full h-full px-4 flex flex-col">
      <TableNav activeTable={activeTable} setActiveTable={setActiveTable} />
      <div className="py-2 rounded">{renderTable()}</div>
      <button
        className="bg-indigo-400 text-white rounded-md text-2xl p-2 self-end"
        onClick={() => {
          setForm(true);
        }}
      >
        Dodaj novog clana
      </button>

      {form && <Formpage setEmployees={setEmployees} />}
    </div>
  );
}
