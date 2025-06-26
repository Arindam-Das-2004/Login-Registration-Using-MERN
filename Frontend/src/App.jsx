import Signup from './assets/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // ✅ add Navigate
import Login from './assets/Login';
import Home from './assets/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Default route to redirect "/" to "/register" */}
        <Route path="/" element={<Navigate to="/register" />} />
        
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
