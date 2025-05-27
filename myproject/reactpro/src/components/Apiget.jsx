import { useEffect, useState } from "react";
import axios from "axios";
export default function Apiget() {
  const [userData, setdata] = useState([]);
  function handleSubmit(e) {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setdata(response.data);
    });
  }
  /*
  async function getUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      //setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  */
  /*
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        //always executed
    });
  }, []);
  */
  return (
    <div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {userData.map((data) => {
          return <div key={data.id}>{data.name}</div>;
        })}
      </div>
    </div>
  );
}
