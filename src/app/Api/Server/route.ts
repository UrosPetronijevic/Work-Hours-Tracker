import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { thisMonth, thisYear } from "@/app/Components/Static Data/Dates";

// Define the path to your database.json file
const databasePath = path.join(
  process.cwd(),
  "src/app/api/server/database.json"
);

// Helper function to read the database file
async function readDatabase() {
  try {
    const data = await fs.readFile(databasePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database:", error);
    throw new Error("Failed to read database");
  }
}

// Helper function to write to the database file
async function writeDatabase(data: any) {
  try {
    await fs.writeFile(databasePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing to database:", error);
    throw new Error("Failed to write to database");
  }
}

// // GET: Fetch data from the database
// export async function GET() {
//   try {
//     const jsonData = await readDatabase();
//     return NextResponse.json(jsonData);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to get current month key
const getCurrentMonthKey = () => {
  return `${thisMonth.toString().padStart(2, "0")}.${thisYear}`; // Format: "04.2025"
};

// Function to get the previous month key
const getPreviousMonthKey = () => {
  let month = thisMonth - 1;
  let year = thisYear;

  if (month === 0) {
    month = 12; // December of the previous year
    year -= 1;
  }

  return `${month.toString().padStart(2, "0")}.${year}`;
};

export async function GET() {
  try {
    const database = await readDatabase();
    const currentMonthKey = getCurrentMonthKey();
    const previousMonthKey = getPreviousMonthKey();

    // If the month doesn't exist, copy data from the last month
    if (!database[currentMonthKey]) {
      if (database[previousMonthKey]) {
        // Copy employees and reset specific arrays
        const previousEmployees = database[previousMonthKey].employees.map(
          (employee: any) => ({
            ...employee,
            godisnjiOdmorArr: [],
            placenoOdsustvoArr: [],
            bolovanje30Arr: [],
            bolovanje100Arr: [],
            bolovanjeNaTertFondaArr: [],
            slavaArr: [],
            selectedDaysArr: [],
          })
        );

        // Copy groups as is
        const previousGroups = database[previousMonthKey].groups;

        // Create new entry with copied employees and groups
        database[currentMonthKey] = {
          employees: previousEmployees,
          groups: previousGroups,
        };
      } else {
        // If no previous month exists, create an empty dataset
        database[currentMonthKey] = {
          employees: [],
          groups: {
            filijala: {
              sakljucariGornje: {
                sakljucar: null,
                zamenik1: null,
                zamenik2: null,
                nepredvidjeni: null,
              },
              sakljucariDonje: {
                sakljucar: null,
                zamenik1: null,
                zamenik2: null,
                nepredvidjeni: null,
              },
            },
            ekspozitura: {
              sakljucariGornje: {
                sakljucar: null,
                zamenik1: null,
                zamenik2: null,
                nepredvidjeni: null,
              },
              sakljucariDonje: {
                sakljucar: null,
                zamenik1: null,
                zamenik2: null,
                nepredvidjeni: null,
              },
            },
            nbs: {
              predsednik: null,
              zamenikPredsednika: null,
              clanKomisije2: null,
              zamenikClana2: null,
              clanKomisije3: null,
              zamenikClana3: null,
            },
            prijem: {
              predsednik: null,
              zamenikPredsednika: null,
              clanKomisije2: null,
              zamenikClana2: null,
              clanKomisije3: null,
              zamenikClana3: null,
            },
            vozaci: { vozac: null, zamenaVozaca: null },
          },
        };
      }

      // Save the updated database
      writeDatabase(database);
    }

    return NextResponse.json(database[currentMonthKey]);
  } catch (error) {
    console.error("Error processing GET request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POST: Add a new employee to the database
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { month, employee } = body;

    if (!month || !employee || !employee.kadrovskiBroj) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const db = await readDatabase();

    if (!db[month]) {
      db[month] = { employees: [] };
    }

    const employeeExists = db[month].employees.some(
      (emp: any) => emp.kadrovskiBroj === employee.kadrovskiBroj
    );

    if (employeeExists) {
      return NextResponse.json(
        { error: "Employee already exists" },
        { status: 400 }
      );
    }

    db[month].employees.push(employee);

    await writeDatabase(db);

    return NextResponse.json(
      { message: "Employee added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add employee" },
      { status: 500 }
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
