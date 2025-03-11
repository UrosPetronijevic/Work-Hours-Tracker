// src/app/Components/Tables/TableNav.tsx

type TableNavProps = {
  activeTable: string | null;
  setActiveTable: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function TableNav({
  activeTable,
  setActiveTable,
}: TableNavProps) {
  const handleTableClick = (tableName: string) => {
    setActiveTable((prev) => (prev === tableName ? null : tableName));
  };

  return (
    <div className="grid grid-cols-8">
      {Array.from({ length: 8 }, (_, i) => (
        <button
          key={i}
          onClick={() => handleTableClick(`Table${i + 1}`)}
          className={`px-4 py-2  ${
            activeTable === `Table${i + 1}`
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Table {i + 1}
        </button>
      ))}
    </div>
  );
}
