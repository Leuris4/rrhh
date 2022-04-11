import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/navbar';
import Home from './pages/home';
import modificarEmpleado from './pages/user_general/modificarEmpleado';




function App(){

    return <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<modificarEmpleado />}/>
              <Route path="inicio" element={<Home/>} /> 
            </Routes>
          </BrowserRouter>;
  
}

export default App;
