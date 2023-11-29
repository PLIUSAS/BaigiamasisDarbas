import React, { useEffect, useState } from "react";
import Users from "../Users/Users";
import axios from "axios";
import style from "./UsersList.module.css";

const endpoint = "http://localhost:3001/users";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className={style.container}>
      <h1>Klijantų Sąrašas</h1>
      <table>
        <thead>
          <th>Vardas</th>
          <th>Pavardė</th>
          <th>El.Paštas</th>
          <th>Registracijos data:</th>
          <th>Atnaujinti</th>
          <th>Istrinti</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return <Users setUsers={setUsers} user={user} key={user.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
