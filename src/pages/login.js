import React from 'react';
import '../pages/resources/css/login.css'



class Login extends React.Component{
    render() {
        return <section className="w3l-login">
                    <div className="overlay">
                        <div className="wrapper">
                            <div className="logo">
                                <a className="brand-logo" href="index.html">Gestión RRHH</a>
                            </div>
                            <div className="form-section">
                                <h3>Iniciar Sesión</h3>
                           
                                <form action="#" method="post" className="signin-form">
                                    <div className="form-input">
                                        <input type="text" name="Username" placeholder="Nombre de usuario" required autoFocus />
                                    </div>
                                    <div className="form-input">
                                        <input type="password" name="password" placeholder="Contraseña" required/>
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary theme-button mt-4">Iniciar Sesión</button>
                                    <div className="new-signup">
                                        <a  className="signuplink">Olvidaste tu contraseña?</a>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </section>;
    }
}

export default Login;