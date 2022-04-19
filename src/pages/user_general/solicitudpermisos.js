import React from "react";
import '../user_general/resources/css/solicitudpermisos.css';


class solicitudPermisos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            request_date: new Date()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getData() {
        
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return <div className="container">
                <h1>Solicitud de permisos</h1>
                <form className="row g-3">
                    <div className="col-12">
                        <label className="form-label">Cédula</label>
                        <input name="cedula" type="text" className="form-control" id="cedula" placeholder="000-0000000-0"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Inicio del permiso</label>
                        <input name="start_date" type="date" className="form-control" id="fecha_inicio" placeholder="Fecha de inicio"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Fin del permiso</label>
                        <input name="end_date" type="date" className="form-control" id="fecha_fin" placeholder="Fecha de fin"/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Tipo de permiso</label>
                        <select name="pass_type_id" id="tipoPermiso" className="form-select">
                        <option selected>---</option>
                        <option>Permiso especial</option>
                        <option>Vacaciones</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
    }
}

export default solicitudPermisos;