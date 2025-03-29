// src/app/Components/Tables/TableNav.tsx

type TableNavProps = {
  activeTable: string | null;
  setActiveTable: React.Dispatch<React.SetStateAction<string | null>>;
};

const tableNames = [
  "Mor",
  "Pripravnost",
  "Prevoz",
  "Dodatno opt.",
  "Prekovremeni",
  "PP Mor",
  "PP Prevoz",
  "Omladinska Mor",
  "Zadruga Mor",
];

export default function TableNav({
  activeTable,
  setActiveTable,
}: TableNavProps) {
  const handleTableClick = (tableName: string) => {
    setActiveTable((prev) => (prev === tableName ? null : tableName));
  };

  return (
    <div className="grid grid-cols-9">
      {tableNames.map((name, i) => (
        <button
          key={i}
          onClick={() => handleTableClick(name)}
          className={`px-4 py-2 ${
            activeTable === name ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
