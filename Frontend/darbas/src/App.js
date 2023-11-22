import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/users")}>
        Užsiregistravusių Vartotojų sąrašas
      </button>
      <button onClick={() => navigate("/users/register")}>
        Registruoti vartotoja
      </button>
      <Routes>
        <Route path="/users" />
        <Route path="/users/register" />
      </Routes>
    </div>
  );
}

export default App;
