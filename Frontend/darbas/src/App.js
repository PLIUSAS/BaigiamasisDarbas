import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import EditUsers from "./components/EditUsers/EditUsers";
import CreateUsers from "./components/CreateUsers/CreateUsers";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          <a
            href=""
            onClick={() => navigate("/Pagrindinis Grožio Salono Puslapis")}
          >
            Pagrindinis Puslapis
          </a>
          <a href="" onClick={() => navigate("/Apie Mus")}>
            Apie Mus
          </a>
          <a href="" onClick={() => navigate("/users")}>
            Užsiregistravusių Klijantų sąrašas
          </a>
          <a href="" onClick={() => navigate("/users/register")}>
            Registruoti Klijantą
          </a>
        </nav>
      </header>
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/register" element={<CreateUsers />} />
        <Route path="/users/edit/:id" element={<EditUsers />} />
      </Routes>
    </div>
  );
}

export default App;
