import React from "react";
import '../user_general/resources/css/modificarEmpleado.css';

class modificarEmpleado extends React.Component{
    render(){
        return <div className="container">
                <h1>Modificar empleado</h1>
                <form class="row g-3">
                    <div class="col-12">
                        <label for="cedula" class="form-label">Cédula</label>
                        <div>
                            <input type="text" className="form-control" id="cedula" placeholder="000-0000000-0"/>
                            <button className="btn btn-outline-primary" type="button" id="autocompletado">Autocompletar</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input disabled type="text" class="form-control" id="nombre" placeholder="Nombres"/>
                    </div>
                    <div class="col-md-6">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input disabled type="text" class="form-control" id="apellido" placeholder="Apellidos"/>
                    </div>
                    <div class="col-6">
                        <label for="departamento" class="form-label">Departamento</label>
                        <input disabled type="text" class="form-control" id="departamento" placeholder="Departamento"/>
                    </div>
                    <div class="col-md-4">
                        <label for="cargo" class="form-label">Cargo</label>
                        <input disabled type="text" class="form-control" id="cargo" placeholder="Puesto de trabajo"/>
                    </div>
                    <div class="col-md-2">
                        <label for="Salario" class="form-label">Salario</label>
                        <input disabled type="number" class="form-control" id="Salario" placeholder="Salario"/>
                    </div>
                    <div class="col-12">
                        <button disabled type="submit" class="btn btn-primary">Modificar</button>
                    </div>
                </form>
            </div>
    }
}

export default modificarEmpleado;