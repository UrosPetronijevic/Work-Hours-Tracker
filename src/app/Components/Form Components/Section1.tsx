type Section1Props = {
  ime: string;
  setIme: React.Dispatch<React.SetStateAction<string>>;
  prezime: string;
  setPrezime: React.Dispatch<React.SetStateAction<string>>;
  kadrovskiBroj: string;
  setKadrovskiBroj: React.Dispatch<React.SetStateAction<string>>;

  datumRodjenja: string;
  setDatumRodjenja: React.Dispatch<React.SetStateAction<string>>;
  radniStaz: string;
  setRadniStaz: React.Dispatch<React.SetStateAction<string>>;
};

export default function Section1({
  ime,
  setIme,
  prezime,
  setPrezime,
  kadrovskiBroj,
  setKadrovskiBroj,
  datumRodjenja,
  setDatumRodjenja,
  radniStaz,
  setRadniStaz,
}: Section1Props) {
  return (
    <div className="grid grid-rows-5 h-full">
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

      <label className="flex gap-2 flex-col">
        <span>Radni staz</span>

        <input
          placeholder="02.02.2025"
          type="text"
          className="rounded-[.3rem] py-2 border-slate-300 border px-2"
          value={datumRodjenja}
          onChange={(e) => {
            setKadrovskiBroj(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span>Datum rodjenja:</span>
        <input
          placeholder="02.02.2025"
          type="text"
          className="rounded-[.3rem] py-2 border-slate-300 border px-2"
          value={datumRodjenja}
          onChange={(e) => {
            setKadrovskiBroj(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
