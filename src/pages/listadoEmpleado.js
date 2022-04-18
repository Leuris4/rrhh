import React from "react";
import {Link} from 'react-router-dom'
import '../pages/resources/css/listadoEmpleado.css';

class listadoEmpleado extends React.Component{
    render(){
        return <div className="container">
            <div className="head">
                <h1>Listado de empleados</h1>
                <div id="btns">
                    <button type="button" id="pagar" className="btn btn-success">Pagar</button>
                    <button type="button" id="imprimir-nomina" className="btn btn-secondary">Imprimir nómina</button>
                </div>
            </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Departamento</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>Tecnología</td>
                            <td>
                                <div className="input-group mb-3">
                                    <p>Soporte técnico</p>
                                    <div className="btn-group">
                                        <button id="drpdown-toggle" className="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                        <ul className="dropdown-menu">
                                        <li><Link to="/modificarEmpleado" className="dropdown-item">Editar</Link></li>
                                        <li><Link to="" className="dropdown-item">Desvincular</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
    }
}
export default listadoEmpleado;