type Section2Props = {
  dodatnoOpt: boolean;
  setDodatnoOpt: React.Dispatch<React.SetStateAction<boolean>>;
  pripravnost: boolean;
  setPripravnost: React.Dispatch<React.SetStateAction<boolean>>;
  prekovremeni: boolean;
  setPrekovremeni: React.Dispatch<React.SetStateAction<boolean>>;
  prevoz: boolean;
  setPrevoz: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Section2({
  dodatnoOpt,
  setDodatnoOpt,
  pripravnost,
  setPripravnost,
  prekovremeni,
  setPrekovremeni,
  prevoz,
  setPrevoz,
}: Section2Props) {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 h-full justify-between border-l border-r border-t border-gray-200 shadow-lg rounded-[.7rem] select-none">
      {/* Dodatno Opt */}
      <div className="flex justify-center w-full">
        <div
          className="p-2 bg-white rounded border border-gray-300 flex items-center w-[70%] cursor-pointer"
          onClick={() => setDodatnoOpt(!dodatnoOpt)} // Toggle checkbox on click
        >
          <div className="flex items-center justify-center w-[40%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={dodatnoOpt}
                onChange={() => setDodatnoOpt(!dodatnoOpt)} // Ensure the checkbox still works if clicked directly
                className="w-5 h-5 rounded-md cursor-pointer"
              />
            </label>
          </div>
          <div className="flex items-center justify-start w-[60%]">
            <span className="text-sm font-medium text-gray-700">
              Dodatno Opt
            </span>
          </div>
        </div>
      </div>

      {/* Pripravnost */}
      <div className="flex justify-center w-full">
        <div
          className="p-2 bg-white rounded border border-gray-300 flex items-center w-[70%] cursor-pointer"
          onClick={() => setPripravnost(!pripravnost)} // Toggle checkbox on click
        >
          <div className="flex items-center justify-center w-[40%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={pripravnost}
                onChange={() => setPripravnost(!pripravnost)} // Ensure the checkbox still works if clicked directly
                className="w-5 h-5 rounded-md cursor-pointer"
              />
            </label>
          </div>
          <div className="flex items-center justify-start w-[60%]">
            <span className="text-sm font-medium text-gray-700">
              Pripravnost
            </span>
          </div>
        </div>
      </div>

      {/* Prekovremeni */}
      <div className="flex justify-center w-full">
        <div
          className="p-2 bg-white rounded border border-gray-300 flex items-center w-[70%] cursor-pointer"
          onClick={() => setPrekovremeni(!prekovremeni)} // Toggle checkbox on click
        >
          <div className="flex items-center justify-center w-[40%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={prekovremeni}
                onChange={() => setPrekovremeni(!prekovremeni)} // Ensure the checkbox still works if clicked directly
                className="w-5 h-5 rounded-md cursor-pointer"
              />
            </label>
          </div>
          <div className="flex items-center justify-start w-[60%]">
            <span className="text-sm font-medium text-gray-700">
              Prekovremeni
            </span>
          </div>
        </div>
      </div>

      {/* Prevoz */}
      <div className="flex justify-center w-full">
        <div
          className="p-2 bg-white rounded border border-gray-300 flex items-center w-[70%] cursor-pointer"
          onClick={() => setPrevoz(!prevoz)} // Toggle checkbox on click
        >
          <div className="flex items-center justify-center w-[40%]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={prevoz}
                onChange={() => setPrevoz(!prevoz)} // Ensure the checkbox still works if clicked directly
                className="w-5 h-5 rounded-md cursor-pointer"
              />
            </label>
          </div>
          <div className="flex items-center justify-start w-[60%]">
            <span className="text-sm font-medium text-gray-700">Prevoz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
