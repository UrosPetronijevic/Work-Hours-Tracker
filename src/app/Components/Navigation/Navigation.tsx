import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex w-full justify-between bg-amber-300 p-4 text-center">
      <li className="hover:underline text-blue-900 p-2">
        <Link href="/">Home</Link>
      </li>

      <li className="hover:underline text-blue-900 p-2">
        <Link href="/Components/Tables">Tabele</Link>
      </li>

      <li className="hover:underline text-blue-900 p-2">
        <Link href="/Components">Grafikoni</Link>
      </li>

      <li className="hover:underline text-blue-900 p-2">
        <Link href="/Components">Pomoc</Link>
      </li>
    </ul>
  );
}
