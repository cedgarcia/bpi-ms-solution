/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useMemo } from "react";
import {
  getEmployees,
  getCountries,
  getAccountTypes,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/api";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState<any>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    contact_number: "",
    country: "",
    account_type: "",
    img: null,
  });

  // New states for search & filter
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  const load = async () => {
    setEmployees((await getEmployees()).data);
    setCountries((await getCountries()).data);
    setTypes((await getAccountTypes()).data);
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async () => {
    if (form.emp_id) {
      await updateEmployee(form.emp_id, form);
    } else {
      await createEmployee(form);
    }
    setModal(false);
    load();
  };

  const onEdit = (emp: any) => {
    setForm(emp);
    setModal(true);
  };

  const onDelete = async (id: number) => {
    if (confirm("Delete this employee?")) {
      await deleteEmployee(id);
      load();
    }
  };

  const filteredEmployees = useMemo(() => {
    return employees
      .filter(
        (emp) =>
          emp.firstname.toLowerCase().includes(search.toLowerCase()) ||
          emp.lastname.toLowerCase().includes(search.toLowerCase()) ||
          emp.username.toLowerCase().includes(search.toLowerCase()) ||
          emp.email.toLowerCase().includes(search.toLowerCase()) ||
          emp.country.toLowerCase().includes(search.toLowerCase()) ||
          emp.account_type.toString().includes(search),
      )
      .slice(0, entries);
  }, [employees, search, entries]);

  return (
    <div className="mx-auto mt-10 max-w-6xl px-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Employee Records</h1>
        <button
          className="rounded bg-blue-600 px-5 py-2 text-2xl text-white"
          onClick={() => {
            setForm({
              username: "",
              firstname: "",
              lastname: "",
              email: "",
              contact_number: "",
              country: "",
              account_type: 0,
            });
            setModal(true);
          }}
        >
          Add Employee
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div>
          Show{" "}
          <select
            className="rounded border p-1"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            {[5, 10, 20, 50].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>{" "}
          entries
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="rounded border p-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <EmployeeTable
        data={filteredEmployees}
        onEdit={onEdit}
        onDelete={onDelete}
        countries={countries}
        types={types}
      />
      {modal && (
        <EmployeeForm
          form={form}
          setForm={setForm}
          countries={countries}
          types={types}
          submit={submit}
          close={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default EmployeesPage;
