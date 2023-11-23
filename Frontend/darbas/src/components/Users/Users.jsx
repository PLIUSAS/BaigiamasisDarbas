import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/users";

export default function Users({ user, setUsers }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${endpoint}/${user._id}`)
      .then(() => setUsers((prev) => prev.filter((e) => e._id !== user._id)))
      .catch((error) => alert(error));
  }
  function handleUpdate() {
    navigate(`/users/edit/${user._id}`);
  }
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.expirationDate}</td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
      <td>
        <button onClick={handleDelete}>Istrinti</button>
      </td>
    </tr>
  );
}
