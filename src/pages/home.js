import React from "react";
import '../pages/resources/css/home.css';

class Home extends React.Component{
    render(){
        return <div className="container">
            <h3>Cantidad de empleados: <span>1</span></h3>
            <div className="container">
        <h1>Listado de usuarios</h1>
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
                            <td>Soporte técnico</td>
                        </tr>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>Tecnología</td>
                            <td>Soporte técnico</td>
                        </tr>
                        <tr>
                            <td>402-1260156-7</td>
                            <td>Leuris Joel</td>
                            <td>Morel Nuñez</td>
                            <td>Tecnología</td>
                            <td>Soporte técnico</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}
export default Home;