import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex w-full justify-between bg-amber-300 p-4 text-center">
      <li className="bg-blue-700 text-white p-2">
        <Link href="/">Home</Link>
      </li>
      <li className="bg-blue-700 text-white p-2">
        <Link href="/Components/Tables/Table1">Table 1</Link>
      </li>

      <li className="bg-blue-700 text-white p-2">
        <Link href="/Components/Tables/Table2">Table 2</Link>
      </li>

      <li className="bg-blue-700 text-white p-2">
        <Link href="/Components/Tables/Table3">Table 3</Link>
      </li>

      <li className="bg-blue-700 text-white p-2">
        <Link href="/Components/Tables/Table4">Table 4</Link>
      </li>
    </ul>
  );
}
