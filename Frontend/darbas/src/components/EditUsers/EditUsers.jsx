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
      const { data } = await axios.put(`${endpoint}/${id}`, {
        name: name,
        surname: surname,
        email: email,
        expirationDate: expirationDate,
      });
      console.log(data);
      navigate("/users");
      return alert("Klientas sėkmingai atnaujintas");
    } catch (error) {
      return alert(error.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Vardas</label> <br />
        <input
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
          type="text"
          required
          minLength={6}
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
