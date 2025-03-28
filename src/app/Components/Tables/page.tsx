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
import { Groups } from "../Classes/Groups";

interface Data {
  [key: string]: {
    employees: Employee[];
    groups: Groups;
  };
}

export default function page() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [groups, setGroups] = useState<Groups>(new Groups());

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state
  const [activeTable, setActiveTable] = useState<string | null>(null);

  const [form, setForm] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await fetch("/api/server"); // Fetch from API
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: Data = await response.json(); // Type the result as `Data`

        console.log(
          `result (${thisMonth}, ${thisYear}) when parsed JSON is`,
          result
        );

        const currentMonthKey = `0${thisMonth}.${thisYear}`;

        // Ensure `employees` is an array, otherwise show an error
        const currentMonthEmployees: Employee[] = Array.isArray(
          result.employees
        )
          ? result.employees
          : (setError("Invalid employees data, using empty list."), []);

        // Ensure `groups` is an object, otherwise show an error
        const currentMonthGroups: Groups =
          result.groups && typeof result.groups === "object"
            ? { ...new Groups(), ...result.groups }
            : (setError("Invalid groups data, using default."), new Groups());

        setEmployees(currentMonthEmployees);
        setGroups(currentMonthGroups);
      } catch (err) {
        console.error("Error fetching data:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [thisMonth, thisYear]);

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

  console.log(employees, groups);

  if (loading) return <p>Loading...</p>;

  {
    error && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
        <span>{error}</span>
        <button
          className="absolute top-0 right-0 px-3 py-1"
          onClick={() => setError(null)}
        >
          ❌
        </button>
      </div>
    );
  }

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

      {form && (
        <Formpage
          setEmployees={setEmployees}
          setGroups={setGroups}
          setForm={setForm}
        />
      )}
    </div>
  );
}
