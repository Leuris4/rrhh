import React from 'react';
import '../components/resources/navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {islogged:false};
        this.islogged = this.islogged.bind(this)
    }

    islogged = () =>{
        let data =  document.cookie.split(";");
        if(data.length ===1){

        }else{
            let id =  data[0].split("=");
            if(id[1].length !== 0 ){
                this.setState({islogged: true});
            }
        }  
    }

    render() {
       if(!this.state.islogged){
            return null
       }
            return <div className="navMenu">
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/contratacion">Contratación</Link></li>
                <li><Link to="/empleados">Listado de empleados</Link></li> {/*desvinculacion y pago de nomina impresion */}
                <li><Link to="/permisos">Permisos</Link></li>
                <li className="right"><Link to="/logout"><i className='fa fa-power-off'></i></Link></li>
            </ul>
            </div>;
              
    }
    componentDidMount(){
        setInterval(() => {
           this.islogged();
          }, 100);
    }
}

export default Navbar;