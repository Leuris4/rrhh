import React from "react";
import '../user_admin/resources/css/permisos.css'

class Permisos extends React.Component{
    render(){
        return <div className="container">
        <h1>Listado de usuarios</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Fecha de solicitud</th>
                            <th>Fecha de inicio</th>
                            <th>Fecha de fin</th>
                            <th>Tipo de permiso</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>15/04/2022</td>
                            <td>18/04/2022</td>
                            <td>31/04/2022</td>
                            <td>Vacaciones</td>
                            <td>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-success btn-sm" type="button">Autorizar</button>
                                    <button className="btn btn-danger btn-sm" type="button">Rechazar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>15/04/2022</td>
                            <td>18/04/2022</td>
                            <td>31/04/2022</td>
                            <td>Vacaciones</td>
                            <td>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-success btn-sm" type="button">Autorizar</button>
                                    <button className="btn btn-danger btn-sm" type="button">Rechazar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>15/04/2022</td>
                            <td>18/04/2022</td>
                            <td>31/04/2022</td>
                            <td>Vacaciones</td>
                            <td>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-success btn-sm" type="button">Autorizar</button>
                                    <button className="btn btn-danger btn-sm" type="button">Rechazar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    }
}

export default Permisos;