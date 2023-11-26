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
  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !surname || !email || !expirationDate) {
      return alert("Fill in all the fields (name, surname, email, data)");
    }
    if (name.length < 6 || name.length > 50) {
      return alert("Name must be between 6 and 50 characters");
    }
    if (surname.length < 6 || surname.length > 50) {
      return alert("Surname must be between 6 and 50 characters");
    }
    if (email.length < 6 || email.length > 100) {
      return alert("Email must be between 6 and 100 characters");
    }
    if (!email.includes("@")) {
      return alert("Please provide valid email with @");
    }
    try {
      const { data } = await axios.post(endpoint, {
        name: name,
        surname: surname,
        email: email,
        expirationDate: expirationDate,
      });
      console.log(data);
      setName("");
      setSurname("");
      setEmail("");
      setExpirationDate("");
      navigate("/users");
      return alert("Klientas sėkmingai registruotas");
    } catch (error) {
      return alert(error.message);
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
          minLength={6}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Pavardė</label> <br />
        <input
          placeholder="Pavardė"
          type="text"
          required
          minLength={6}
          maxLength={50}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <label htmlFor="">El.Pastas</label> <br />
        <input
          placeholder="Abcd@gmail.com"
          type="email"
          required
          minLength={6}
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
