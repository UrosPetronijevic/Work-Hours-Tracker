"use client";

import { useEffect, useState } from "react";
import { Employee } from "../../Classes/Employee";
import { thisMonth, thisYear } from "../../Static Data/Dates"; // Make sure thisMonth and thisYear are correctly imported

interface Data {
  [key: string]: {
    employees: Employee[];
  };
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state
  const [employees, setEmployees] = useState<Employee[]>([]); // Initialize employees as an empty array

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-slate-500 text-white w-full p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Employee Data</h1>

      <div>
        <div>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <div key={index}>
                <p>
                  {employee.imeZaposlenog} {employee.prezimeZaposlenog}
                </p>
                <p>{employee.kadrovskiBroj}</p>
              </div>
            ))
          ) : (
            <p>No employees for this month</p>
          )}
        </div>
      </div>
    </div>
  );
}
