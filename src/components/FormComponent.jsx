import React, { useState, useCallback, useMemo } from "react";

function FormComponent() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [count, setCount] = useState(0);

  const handleChange = useCallback((e) => {
    console.log("useCallback");
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const countCharacters = useMemo(() => {
    console.log("useMemo");
    const sum =
      form.firstname.length + form.lastname.length + form.email.length;
    return sum;
  }, [form]);

  return (
    <div>
      Form with Multiple Fields
      <form>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          placeholder="firtname"
        />
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          placeholder="lastname"
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email"
        />
      </form>
      <p>Total Characters: {countCharacters}</p>
      <button onClick={() => setCount(count + 1)}>Plus One</button>
      <p>{count}</p>
    </div>
  );
}
export default FormComponent;
