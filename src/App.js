import './css/app.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/inscription' element={<Register />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/*' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
