import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
