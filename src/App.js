import React from 'react';
import './App.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Contratacion from './pages/user_general/contratacion';
import SolicitudPermisos from './pages/user_general/solicitudpermisos';
import CrearUsuario from './pages/user_superadmin/crearUsuario';
import ListadoUsuario from './pages/user_superadmin/listadoUsuario';
import ListadoEmpleado from './pages/listadoEmpleado';
import Permisos from './pages/user_admin/permisos';
import Logout from './pages/logout';






function App(props){
  

    return <BrowserRouter>
            <Navbar islogged = {props.islogged} />

            <Routes>
              <Route path="inicio" element={<Home/>} /> 
              <Route path="/contratacion" element={<Contratacion/>} /> 
              <Route path="/solicitudPermisos" element={<SolicitudPermisos/>} /> 
              <Route path="/crearUsuario" element={<CrearUsuario/>} /> 
              <Route path="/usuarios" element={<ListadoUsuario/>} /> 
              <Route path="/empleados" element={<ListadoEmpleado/>} /> 
              <Route path="/permisos" element={<Permisos/>} /> 
              <Route path="/logout" element={<Logout/>} /> 
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>;
  
}

export default App;
