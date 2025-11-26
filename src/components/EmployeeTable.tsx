/* eslint-disable @typescript-eslint/no-explicit-any */
const EmployeeTable = ({
  data,
  onEdit,
  onDelete,
  countries,
  types,
}: {
  data: any[];
  onEdit: (emp: any) => void;
  onDelete: (id: number) => void;
  countries: any[];
  types: any[];
}) => {
  const getCountryName = (code: string) => {
    const country = countries.find((c) => c.country_code === code);
    return country ? country.country_name : code;
  };
  const getTypeName = (id: number) => {
    const type = types.find((t) => t.type_id === id);
    return type ? type.type_name : id;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full rounded-lg border border-gray-300">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border p-3 py-5">Name</th>
            <th className="border p-3 py-5">Username</th>
            <th className="border p-3 py-5">Country</th>
            <th className="border p-3 py-5">Email</th>
            <th className="border p-3 py-5">Account Type</th>
            <th className="border p-3 py-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice()
            .reverse()
            .map((emp) => (
              <tr key={emp.emp_id}>
                <td className="border p-2">
                  {emp.firstname} {emp.lastname}
                </td>
                <td className="border p-2">{emp.username}</td>
                <td className="border p-2">{getCountryName(emp.country)}</td>
                <td className="border p-2">{emp.email}</td>
                <td className="border p-2">{getTypeName(emp.account_type)}</td>
                <td className="flex border p-2">
                  <button
                    onClick={() => onEdit(emp)}
                    className="mr-2 flex items-center justify-center rounded bg-yellow-500 px-3 py-1 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => onDelete(emp.emp_id)}
                    className="flex items-center justify-center rounded bg-red-600 px-3 py-1 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-4 w-4 fill-white"
                    >
                      <path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
