import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
