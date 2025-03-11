import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

// GET: Fetch data from the database
export async function GET() {
  try {
    const jsonData = await readDatabase();
    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}

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
