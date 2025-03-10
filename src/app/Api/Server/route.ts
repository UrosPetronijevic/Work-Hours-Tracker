import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to your database.json file
const databasePath = path.join(
  process.cwd(),
  "src/app/api/server/database.json"
);

// API route to fetch data from the JSON file
export async function GET() {
  try {
    const data = fs.readFileSync(databasePath, "utf-8"); // Read the JSON file
    const jsonData = JSON.parse(data); // Parse it to JSON
    return NextResponse.json(jsonData); // Send the JSON response
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
