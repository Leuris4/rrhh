import React from "react";
import '../user_superadmin/resources/css/listadoUsuarios.css'

class listadoUsuario extends React.Component{
    render(){
        return <div className="container">
        <h1>Listado de usuarios</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Última vez</th>
                     
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>SuperAdmin</td>
                            <td>15/04/2022 5:24 p.m.</td>
                           
                        </tr>
                       
                    </tbody>
                </table>
            </div>
    }
}

export default listadoUsuario;