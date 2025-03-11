import { Employee } from "../Classes/Employee";
import { daysArray } from "../Static Data/Dates";

type Table2Props = {
  employees: Employee[];
};

export default function Table2({ employees }: Table2Props) {
  return (
    <div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="w-[147px] px-4 py-2 border">Ime i prezime</th>
            <th className="w-[147px] px-4 py-2 border">SAP br</th>
            {daysArray.map((day, index) => (
              <th key={index} className="w-[3%] py-2 border">
                {day}
              </th>
            ))}
            <th className="w-[91px] px-4 py-2 border">Ukupno c.</th>
          </tr>
        </thead>

        <tbody className="text-slate-500">
          {employees.map(
            (employee, employeeIndex) =>
              employee.pripravnost === true && (
                <tr key={`employee-${employeeIndex}`}>
                  <td className="w-[147px] px-4 py-2 border border-slate-500 text-blue-500">
                    {employee.imeZaposlenog} {employee.prezimeZaposlenog}
                  </td>
                  <td className="w-[147px] px-4 py-2 border border-slate-500 text-blue-500">
                    {employee.kadrovskiBroj}
                  </td>

                  {employee.pripravnostSatiArr.map((hour, hourIndex) => (
                    <td
                      key={`employee-${employeeIndex}-hours-${hourIndex}`}
                      className={`py-2 border border-slate-500 ${
                        hour === 16 ? "text-green-500" : ""
                      }`}
                    >
                      {hour}
                    </td>
                  ))}

                  <td className="w-[91px] px-4 py-2 border  border-slate-500 text-blue-500">
                    {employee.pripravnostTotal}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
