import { Link } from "react-router-dom"
import './Menu.css'

function Menu(){

    return <div style={{backgroundColor: "black"}}>
        <ul>
            <li><Link to={"/pantalla3"} className="nav-link active">Pagina Principal</Link></li>
            <li><Link to={"/sorpresa"} className="nav-link active" >Reseña</Link></li>
            <li><Link to={"/pantalla6"} className="nav-link active" >Carrito</Link></li>
            <li><Link to={"/pantalla16"} className="nav-link active">Ver Pedido</Link></li>
            <li><Link to={"/"} className="nav-link active" >Cerrar Sesion</Link></li>
        </ul>
    </div>
  }
  export default Menu