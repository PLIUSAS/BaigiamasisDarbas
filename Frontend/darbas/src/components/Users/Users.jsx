import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./Users.module.css";

const endpoint = "http://localhost:3001/users";

export default function Users({ user, setUsers }) {
  const navigate = useNavigate();

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`${endpoint}/${user._id}`)
      .then(() => setUsers((prev) => prev.filter((e) => e._id !== user._id)))
      .catch((error) => alert(error));
    navigate("/Klijantų/Sarašas");
    return alert("Klientas sėkmingai ištrintas");
  }
  function handleUpdate() {
    navigate(`/Klijantų/Redagavimas/${user._id}`);
  }
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>
        {new Date(user.expirationDate).toLocaleDateString()}
        {" - "}
        {new Date(user.expirationDate).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
      <td>
        <button onClick={handleDelete}>Istrinti</button>
      </td>
    </tr>
  );
}
