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
      return alert("Prašome užpildyti Varda/Pavarde/El Pasta ir Data");
    }
    if (name.length < 6 || name.length > 32) {
      return alert("Vardas turi būti tarp 6 ir 32 raidžių ilgumo");
    }
    if (surname.length < 6 || surname.length > 32) {
      return alert("Pavardė turi būti tarp 6 ir 32 raidžių ilgumo");
    }
    if (email.length < 6 || email.length > 50) {
      return alert("El Pastas turi būti tarp 6 ir 32 raidžių ilgumo");
    }
    if (!email.includes("@")) {
      return alert("El.Pastas turi turėti, bent '@' simbolį");
    }
    try {
      const { data } = await axios.put(`${endpoint}/${id}`, {
        name: name,
        surname: surname,
        email: email,
        expirationDate: expirationDate,
      });
      console.log(data);
      navigate("/Klijantų/Sarašas");
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
          maxLength={32}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Pavardė</label> <br />
        <input
          type="text"
          required
          minLength={6}
          maxLength={32}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <label htmlFor="">El.Pastas</label> <br />
        <input
          type="text"
          required
          minLength={6}
          maxLength={50}
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
