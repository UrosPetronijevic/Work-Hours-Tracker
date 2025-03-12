import { Employee } from "../Classes/Employee";
import Form from "./Form";

type FormpageProps = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function Formpage({ setEmployees }: FormpageProps) {
  return (
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center p-4 backdrop-blur-sm gap-4">
      <Form setEmployees={setEmployees} />
    </div>
  );
}
