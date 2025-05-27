import { useState } from "react";
export default function Form1() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    conpassword: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        Firstname:
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <br />
        Lastname:
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <br />
        <br />
        Phone:
        <input
          onChange={(e) => setName({ ...name, phone: e.target.value })}
          type="phone"
          value={name.phone}
        />
        <br />
        <br />
        Email:
        <input
          onChange={(e) => setName({ ...name, email: e.target.value })}
          type="email"
          value={name.email}
        />
        <br />
        <br />
        Password:
        <input
          onChange={(e) => setName({ ...name, password: e.target.value })}
          type="password"
          value={name.password}
        />
        <br />
        <br />
        Conpassword:
        <input
          onChange={(e) => setName({ ...name, conpassword: e.target.value })}
          type="password"
          value={name.conpassword}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
}
