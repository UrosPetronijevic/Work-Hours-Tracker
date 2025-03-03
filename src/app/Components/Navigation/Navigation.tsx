import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Components/Tables/Table1">Table 1</Link>
      </li>

      <li>
        <Link href="/Components/Tables/Table2">Table 2</Link>
      </li>

      <li>
        <Link href="/Components/Tables/Table3">Table 3</Link>
      </li>

      <li>
        <Link href="/Components/Tables/Table4">Table 4</Link>
      </li>
    </ul>
  );
}
