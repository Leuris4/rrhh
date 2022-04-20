import React from "react";
import '../user_superadmin/resources/css/listadoUsuarios.css'

class listadoUsuario extends React.Component{

    constructor(props){
        super(props);
        this.state ={data:[]};
        this.getUsers();
        this.users = [];
    }


    getUsers(){
        fetch('http://localhost:4000/api/user')
        .then(response => response.json())
        .then(data =>{
            if(data.length === 0){

            }else{
                data.map((datos) =>{
                    fetch('http://localhost:4000/api/employee/dt/' + datos.employee_id)
                    .then(response => response.json())
                    .then(dt =>{
                        if(dt.length === 0){

                        }else{
                            let lastseen = "";
                            if(datos.last_seen == null)
                            {
                                lastseen = "Nunca";
                            }else
                            {
                                lastseen = datos.last_seen.split("T")
                                lastseen = lastseen[0];
                            }
                            let t = {
                                cedula: dt.cedula,
                                name: dt.name,
                                lastname: dt.lastname,
                                rol: datos.rol,
                                last_seen: lastseen
                            };
                            this.set_state(t);
                            
                        }
                    });
                })
            }
        });
    }

    set_state(user) 
    {
        this.users.push(user);
        this.setState({data: this.users});
    }

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
                        {this.state.data.map((user,index)=>
                            {
                                return <tr key={index}>
                                    <td>{user.cedula}</td>
                                    <td>{user.name}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.rol}</td>
                                    <td>{user.last_seen}</td>
                                </tr> 
                            }
                        )}
                    </tbody>
                </table>
            </div>
    }
}

export default listadoUsuario;