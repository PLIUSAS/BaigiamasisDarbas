import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import EditUsers from "./components/EditUsers/EditUsers";
import CreateUsers from "./components/CreateUsers/CreateUsers";
import Logo from "./Logo.png";
import PagrindinisPuslapis from "./components/PagrindinisPuslapis/PagrindinisPuslapis";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <img className={style.logo} src={Logo} alt="Grožio Salonas" />
        <nav>
          <ul className={style.nav_links}>
            <li>
              <a
                href="/Pagrindinis/Puslapis"
                onClick={() => navigate("/Pagrindinis/Puslapis")}
              >
                Pagrindinis Puslapis
              </a>
            </li>
            <li>
              <a href="" onClick={() => navigate("/Klijantų/Sarašas")}>
                Klijantų sąrašas
              </a>
            </li>
          </ul>
        </nav>
        <a
          href=""
          className={style.HeaderButton}
          onClick={() => navigate("/Klijantų/Registracija")}
        >
          <button>Registruoti Klijantą</button>
        </a>
      </header>
      <Routes>
        <Route path="/Klijantų/Sarašas" element={<UsersList />} />
        <Route path="/Klijantų/Registracija" element={<CreateUsers />} />
        <Route path="/Klijantų/Redagavimas/:id" element={<EditUsers />} />
        <Route path="/Pagrindinis/Puslapis" element={<PagrindinisPuslapis />} />
      </Routes>
    </div>
  );
}

export default App;
