import React from "react";
import '../user_general/resources/css/contratacion.css';

class Contratacion extends React.Component{
    render(){
        

        return <div className="container">
                    <h1>Formulario de contratación</h1>
                    <form className="row g-3">
                        <div className="col-12">
                            <label for="cedula" className="form-label">Cédula</label>
                            <input type="text" className="form-control" id="cedula" placeholder="000-0000000-0"/>
                        </div>
                        <div className="col-md-6">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Nombres"/>
                        </div>
                        <div className="col-md-6">
                            <label for="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="apellido" placeholder="Apellidos"/>
                        </div>
                        <div className="col-6">
                            <label for="departamento" className="form-label">Departamento</label>
                            <input type="text" className="form-control" id="departamento" placeholder="Departamento"/>
                        </div>
                        <div className="col-md-4">
                            <label for="cargo" className="form-label">Cargo</label>
                            <input type="text" className="form-control" id="cargo" placeholder="Puesto de trabajo"/>
                        </div>
                        <div className="col-md-2">
                            <label for="Salario" className="form-label">Salario</label>
                            <input type="number" className="form-control" id="Salario" placeholder="Salario"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                </div>
    }
}

export default Contratacion;