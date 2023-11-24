import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./EditUsers.module.css";

const endpoint = "http://localhost:3001/users";

export default function EditUsers() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      setName(data.name);
      setSurname(data.surname);
      setEmail(data.email);
      const originalDate = new Date(data.expirationDate);
      const formattedDate = originalDate.toISOString().slice(0, 16);
      setExpirationDate(formattedDate);
    });
  }, [id]);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${endpoint}/${id}`, {
        name,
        surname,
        email,
        expirationDate,
      })
      .then(() => {
        alert("Klientas sėkmingai atnaujintas");
        navigate("/users");
      })
      .catch((error) => alert(error));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Vardas</label> <br />
        <input
          type="text"
          required
          minLength={1}
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Pavardė</label> <br />
        <input
          type="text"
          required
          minLength={1}
          maxLength={100}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <label htmlFor="">El.Pastas</label> <br />
        <input
          type="text"
          required
          minLength={1}
          maxLength={100}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Data</label> <br />
        <input
          type="datetime-local"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <br />
        <button type="submit">Atnaujinti Klijantą</button>
      </form>
    </div>
  );
}
