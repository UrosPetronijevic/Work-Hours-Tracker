type Section1Props = {
  ime: string;
  setIme: React.Dispatch<React.SetStateAction<string>>;
  prezime: string;
  setPrezime: React.Dispatch<React.SetStateAction<string>>;
  kadrovskiBroj: string;
  setKadrovskiBroj: React.Dispatch<React.SetStateAction<string>>;
  pp: boolean;
  setPp: React.Dispatch<React.SetStateAction<boolean>>;
  odredjeno: boolean;
  setOdredjeno: React.Dispatch<React.SetStateAction<boolean>>;
  neodredjeno: boolean;
  setNeodredjeno: React.Dispatch<React.SetStateAction<boolean>>;
  zadruga: boolean;
  setZadruga: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Section1({
  ime,
  setIme,
  prezime,
  setPrezime,
  kadrovskiBroj,
  setKadrovskiBroj,
  pp,
  setPp,
  odredjeno,
  setOdredjeno,
  neodredjeno,
  setNeodredjeno,
  zadruga,
  setZadruga,
}: Section1Props) {
  return (
    <div className="grid grid-rows-4 h-full">
      <label className="flex gap-2 flex-col">
        <span>Ime:</span>
        <input
          placeholder="Petar"
          type="text"
          className="rounded-[.3rem] py-2 border-slate-300 border px-2"
          value={ime}
          onChange={(e) => {
            setIme(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span>Prezime:</span>
        <input
          placeholder="Petrovic"
          type="text"
          className="rounded-[.3rem] py-2 border-slate-300 border px-2"
          value={prezime}
          onChange={(e) => {
            setPrezime(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span>Kadrovski br:</span>
        <input
          placeholder="123"
          type="text"
          className="rounded-[.3rem] py-2 border-slate-300 border px-2"
          value={kadrovskiBroj}
          onChange={(e) => {
            setKadrovskiBroj(e.target.value);
          }}
        />
      </label>

      <div className="flex gap-4 bg-blue-100 p-2 rounded">
        {/* Left Column */}
        <div className="flex flex-col w-full justify-center gap-4 p-2">
          {/* Neodređeno */}
          <div className="p-2 bg-white rounded">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Neodređeno
              </span>
              <input
                type="checkbox"
                checked={neodredjeno}
                onChange={() => setNeodredjeno(!neodredjeno)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
              />
            </label>
          </div>
          {/* Određeno */}
          <div className="p-2 bg-white rounded">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Određeno
              </span>
              <input
                type="checkbox"
                checked={odredjeno}
                onChange={() => setOdredjeno(!odredjeno)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full justify-center gap-4 p-2">
          {/* Stalni */}
          <div className="p-2 bg-white rounded">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">PP</span>
              <input
                type="checkbox"
                checked={pp}
                onChange={() => setPp(!pp)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
              />
            </label>
          </div>

          {/* Zadruga */}
          <div className="p-2 bg-white rounded">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Zadruga</span>
              <input
                type="checkbox"
                checked={zadruga}
                onChange={() => setZadruga(!zadruga)}
                className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
