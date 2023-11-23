import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import EditUsers from "./components/EditUsers/EditUsers";
import CreateUsers from "./components/CreateUsers/CreateUsers";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/users")}>
        Užsiregistravusių Klijantų sąrašas
      </button>
      <button onClick={() => navigate("/users/register")}>
        Registruoti Klijantą
      </button>
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/register" element={<CreateUsers />} />
        <Route path="/users/edit/:id" element={<EditUsers />} />
      </Routes>
    </div>
  );
}

export default App;
