import { useState } from "react";
export default function Form2() {
  const [firstname, setFirstName] = useState({ firstName: "" });
  const [lastname, setLastName] = useState({ lastName: "" });
  const [phone, setPhone] = useState({ phone: "" });
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [conpassword, setConPassword] = useState({ conPassword: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(phone);
    console.log(email);
    console.log(password);
    console.log(conpassword);
  }
  return (
    <div>
      <form>
        Firstname:
        <input
          onChange={(e) =>
            setFirstName({ ...firstname, firstName: e.target.value })
          }
          type="text"
          value={firstname.firstName}
        />
        <br />
        <br />
        Lastname:
        <input
          onChange={(e) =>
            setLastName({ ...lastname, lastName: e.target.value })
          }
          type="text"
          value={lastname.lastName}
        />
        <br />
        <br />
        Phone:
        <input
          onChange={(e) => setPhone({ ...phone, phone: e.target.value })}
          type="phone"
          value={phone.phone}
        />
        <br />
        <br />
        Email:
        <input
          onChange={(e) => setEmail({ ...email, email: e.target.value })}
          type="email"
          value={email.email}
        />
        <br />
        <br />
        Password:
        <input
          onChange={(e) =>
            setPassword({ ...password, password: e.target.value })
          }
          type="password"
          value={password.password}
        />
        <br />
        <br />
        Conpassword:
        <input
          onChange={(e) =>
            setConPassword({ ...conpassword, conPassword: e.target.value })
          }
          type="password"
          value={conpassword.conPassword}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
}
