import React from "react";
import '../pages/resources/css/listadoEmpleado.css';

class listadoEmpleado extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={datos:[]}
        this.getData();
        this.desvincular = this.desvincular.bind(this);

    }
    getData(){
        fetch('http://localhost:4000/api/employee')
        .then(response => response.json())
        .then(data =>{
            if(data.length === 0){
              
            }else{
             this.setState({datos: data});
             console.log(data);
            }
        });
    }

    desvincular = (event) =>{
        console.log("Desvincular a: ", event.target.value);
    }

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
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.datos.map((employee,index)=>
                        {
                            if(employee.status)
                                return <tr key={index}>
                                <td>{employee.cedula}</td>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.department}</td>
                                <td>{employee.position}</td>
                                <td><button type="button" value={employee.cedula} id="desvincular" onClick={this.desvincular} className="btn btn-danger">Desvincular</button></td>
                            </tr> 
                        }
                       )}
                        
                    </tbody>
                </table>
            </div>
    }
}
export default listadoEmpleado;