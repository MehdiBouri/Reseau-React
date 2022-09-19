import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
