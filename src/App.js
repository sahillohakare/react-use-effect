import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
    }
    getData();
    document.title = `(${state}) employees`;
  }, [state]);

  return (
    <div className="App">
      <button onClick={() => setState(state + 2)}>Click Me {state}</button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}
