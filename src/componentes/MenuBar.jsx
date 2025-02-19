
import logo from '../assets/logo.png'
import '../index.css'
import { Link,useLocation } from "react-router-dom";

export default function Menubar(){
    const ubicacion = useLocation();
    const estilo={
        width:'90px', 
        height:'55px',
        
    }
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:" #e3f2fd"}}>
            <div className="container-fluid">
                <Link to='/'>
                    <img style={estilo} src={logo} alt="logo" />
                </Link>  {/**Colocar el LOGO explicitamente redirecciona a la parte principal */}
                <button className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-item nav-link ${ubicacion.pathname === "/contenido" ? "active" : ""}`} to='/contenido'>Contenido</Link>
                        <Link className={`nav-item nav-link ${ubicacion.pathname == '/api'? 'active' : ''}`} to='/api'>API</Link>
                        <Link className={`nav-item nav-link ${ubicacion.pathname === "/ejemplos" ? "active" : ""}`} to='/ejemplos'>Ejemplos</Link>
                         
                    </div>
                    <form className="d-flex ms-lg-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>  
            
        </nav>
    </>);

}