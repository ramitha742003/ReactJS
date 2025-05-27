import { useState } from "react";
import axios from "axios";
export default function Apipost() {
  const data = { fname: "", lastName: "" };
  const [inputData, setInputdata] = useState(data);
  function handleData(e) {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  }
  function handleUpdate(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  }
  function handleDelete(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <label>First name:</label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      ></input>
      <br />
      <br />
      <label>Last name:</label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleData}
      ></input>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
