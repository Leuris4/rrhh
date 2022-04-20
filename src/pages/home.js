import React from "react";
import '../pages/resources/css/home.css';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={datos:[]}
        this.getData();
        this.cant = 0;
    }
    getData(){
        fetch('http://localhost:4000/api/employee')
        .then(response => response.json())
        .then(data =>{
            if(data.length === 0){
              
            }else{
             this.setState({datos: data});
             this.cant = data.length;
            }
        });
    }

    render(){

        return <div className="container">
            <h3>Cantidad de empleados: <span>{this.cant}</span></h3>
            <div className="container">
                
        <h1>Listado de empleados</h1>
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
                    {this.state.datos.map((employee,index)=>
                        {
                            if(employee.status)
                                return <tr key={index}>
                                <td>{employee.cedula}</td>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.department}</td>
                                <td>{employee.position}</td>
                            </tr> 
                        }
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
export default Home;