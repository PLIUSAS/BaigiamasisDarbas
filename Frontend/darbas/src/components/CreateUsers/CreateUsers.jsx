import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./CreateUsers.module.css";

const endpoint = "http://localhost:3001/users";

export default function CreateUsers() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(endpoint, {
        name,
        surname,
        email,
        expirationDate,
      })
      .then(() => {
        alert("Klientas sėkmingai registruotas");
        navigate("/users");
      })
      .catch((error) => alert(error));
    if (!name || !surname || !email || !expirationDate) {
      alert("Užpildykite visus laukus");
    }
    if (name.length > 100 || surname.length > 100 || email.length > 100) {
      alert("Vardas arba Pavardė arba El.pastas yra per ilgas !!");
    }
    if (name.length <= 1 || surname.length <= 1 || email.length <= 1) {
      alert("Vardas ir Pavardė, bei El.pastas yra privalomas !!");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Vardas</label> <br />
        <input
          placeholder="Vardas"
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
          placeholder="Pavardė"
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
          placeholder="Abcd@gmail.com"
          type="email"
          required
          minLength={1}
          maxLength={100}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Data</label> <br />
        <input
          min="2023-11-01T08:00:"
          max="2030-12-30T21:00"
          placeholder="YYYY-MM-DD HH:MM"
          type="datetime-local"
          required
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <br />
        <button type="submit">Registruoti Klijantą</button>
      </form>
    </div>
  );
}
