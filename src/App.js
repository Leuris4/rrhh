import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/navbar';
import Home from './pages/home';
import Contratacion from './pages/user_general/contratacion';
import ModificarEmpleado from './pages/user_general/modificarEmpleado';
import SolicitudPermisos from './pages/user_general/solicitudpermisos';
import CrearUsuario from './pages/user_superadmin/crearUsuario';




function App(){

    return <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<modificarEmpleado />}/>
              <Route path="inicio" element={<Home/>} /> 
              <Route path="/contratacion" element={<Contratacion/>} /> 
              <Route path="/modificarEmpleado" element={<ModificarEmpleado/>} /> 
              <Route path="/solicitudPermisos" element={<SolicitudPermisos/>} /> 
              <Route path="/crearUsuario" element={<CrearUsuario/>} /> 
            </Routes>
          </BrowserRouter>;
  
}

export default App;
