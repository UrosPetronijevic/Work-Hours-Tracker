import { Employee } from "../Classes/Employee";
import { Groups } from "../Classes/Groups";
import Form from "./Form";

type FormpageProps = {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setGroups: React.Dispatch<React.SetStateAction<Groups>>;
};

export default function Formpage({ setEmployees, setGroups }: FormpageProps) {
  return (
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center p-4 backdrop-blur-sm gap-4">
      <Form setEmployees={setEmployees} setGroups={setGroups} />
    </div>
  );
}
