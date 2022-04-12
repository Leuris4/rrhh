import React from "react";
import '../user_superadmin/resources/css/crearUsuario.css'

class crearUsuario extends React.Component{
    render(){
        return <div className="container">
                <h1>Crear usuario</h1>
                <form class="row g-3">
                    <div class="col-12">
                        <label for="cedula" class="form-label">Cédula del empleado</label>
                        <input type="text" class="form-control" id="cedula" placeholder="000-0000000-0"/>
                    </div>
                    <div class="col-md-6">
                        <label for="nombreUsuario" class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" id="nombreUsuario" placeholder="Nombre de usuario"/>
                    </div>
                    <div class="col-md-4">
                        <label for="rol" class="form-label">Rol del usuario</label>
                        <select id="rol" class="form-select">
                        <option selected>---</option>
                        <option>Admin</option>
                        <option>Usuario general</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
    }
}

export default crearUsuario;