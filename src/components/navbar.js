import React from 'react';
import '../components/resources/navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends React.Component{

    setMenu = () =>{
        if(this.props.rol ==="superadmin"){
            return <> 
                <li><Link to="/inicio_sa">Inicio</Link></li>
                <li><Link to="/crearUsuario">Crear Usuarios</Link></li>
                <li><Link to="/usuarios">Listado de Usuarios</Link></li></>
        }else if(this.props.rol ==="admin"){
            return <>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/empleados">Listado de empleados</Link></li> 
                <li><Link to="/permisos">Permisos</Link></li>
            </>
        }else if(this.props.rol ==="usergeneral"){
            return <> 
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/empleados">Listado de empleados</Link></li> 
            <li><Link to="/solicitudPermisos">Solicitud Permisos</Link></li>
            <li><Link to="/contratacion">Contratación</Link></li></>
        }
    }
    render() {
       if(!this.props.islogged){
            return null
       }
            return (<div className="navMenu">
            <ul>
                {this.setMenu()}
                <li className="right"><Link to="/logout"><i className='fa fa-power-off'></i></Link></li>
            </ul>
            </div>);
              
    }
}

export default Navbar;