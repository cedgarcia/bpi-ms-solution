/* eslint-disable @typescript-eslint/no-explicit-any */
const EmployeeForm = ({
  form,
  setForm,
  countries,
  types,
  submit,
  close,
}: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">
          {form.emp_id ? "Edit Employee" : "Add Employee"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="space-y-3"
        >
          <input
            className="w-full rounded border p-2"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            className="w-full rounded border p-2"
            placeholder="First Name"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <input
            className="w-full rounded border p-2"
            placeholder="Last Name"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          <input
            className="w-full rounded border p-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full rounded border p-2"
            placeholder="Contact Number"
            value={form.contact_number}
            onChange={(e) =>
              setForm({ ...form, contact_number: e.target.value })
            }
          />

          <select
            className="w-full rounded border p-2"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          >
            <option value="">Select Country</option>
            {countries.map((c: any) => (
              <option key={c.country_code} value={c.country_code}>
                {c.country_name}
              </option>
            ))}
          </select>

          <select
            className="w-full rounded border p-2"
            value={form.account_type}
            onChange={(e) =>
              setForm({ ...form, account_type: +e.target.value })
            }
          >
            <option value="">Select Type</option>
            {types.map((t: any) => (
              <option key={t.type_id} value={t.type_id}>
                {t.type_name}
              </option>
            ))}
          </select>

          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onloadend = () => {
                setForm({ ...form, img: reader.result });
              };
              reader.readAsDataURL(file);
            }}
            className="w-full rounded border p-2"
          ></input> */}

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={close}
              className="rounded bg-gray-300 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
