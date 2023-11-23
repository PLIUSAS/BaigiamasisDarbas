import React, { useEffect, useState } from "react";
import Users from "../Users/Users";
import axios from "axios";

const endpoint = "http://localhost:3001/users";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setUsers(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>Klijanto Vardas</th>
          <th>Klijanto Pavarde</th>
          <th>Klijanti el. paštas</th>
          <th>Registracijos data</th>
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
