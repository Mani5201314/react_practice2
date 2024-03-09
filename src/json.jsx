import React from "react";
import "./json.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Json = () => {
  let [state, setState] = useState([]);
  let [row, setRow] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then(x => {
      setState(Object.keys(x.data[0]));
      setRow(x.data);
    });
  });

  // fetch("http://localhost:5000/users")
  //   .then(res => res.json())
  //   .then(data => {
  //     setState(Object.keys(data[0]));
  //     setRow(data);
  //   });

  return (
    <div>
      <table border={"2px"}>
        <thead>
          <tr>
            {state.map(x => {
              return <th>{x}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {row.map(row => {
            return (
              <>
                <tr>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Json;
