import React from "react";
import '../user_general/resources/css/solicitudpermisos.css';


class solicitudPermisos extends React.Component{
    render(){
        return <div className="container">
                <h1>Solicitud de permisos</h1>
                <form class="row g-3">
                    <div class="col-12">
                        <label for="cedula" class="form-label">Cédula</label>
                        <input type="text" class="form-control" id="cedula" placeholder="000-0000000-0"/>
                    </div>
                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Inicio del permiso</label>
                        <input type="text" class="form-control" id="fecha_inicio" placeholder="Fecha de inicio"/>
                    </div>
                    <div class="col-md-6">
                        <label for="apellido" class="form-label">Fin del permiso</label>
                        <input type="text" class="form-control" id="fecha_fin" placeholder="Fecha de fin"/>
                    </div>
                    <div class="col-md-4">
                        <label for="tipoPermiso" class="form-label">Tipo de permiso</label>
                        <select id="tipoPermiso" class="form-select">
                        <option selected>---</option>
                        <option>Permiso especial</option>
                        <option>Vacaciones</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
    }
}

export default solicitudPermisos;