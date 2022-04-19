import React from 'react';
import '../components/resources/navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    render() {
       if(!this.props.islogged){
            return null
       }
            return <div className="navMenu">
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/contratacion">Contratación</Link></li>
                <li><Link to="/empleados">Listado de empleados</Link></li> {/*desvinculacion y pago de nomina impresion */}
                <li><Link to="/permisos">Permisos</Link></li>
                <li className="right"><Link to="/logout"><i className='fa fa-power-off'></i></Link></li>
            </ul>
            </div>;
              
    }
}

export default Navbar;