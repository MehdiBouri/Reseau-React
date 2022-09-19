import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";

import "./css/app.css";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/connexion' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
