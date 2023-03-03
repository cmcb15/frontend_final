import { useState } from "react";
import { Link } from "react-router-dom"

function LoginFormR(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("Usuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div className="mb-4">
            <label className="form-label">Usuario</label>
            <input class="form-control" name="text"
                value={usuario}
                onChange={function(evt) {setUsuario(evt.target.value)}}/>
        </div>
        <div className="mb-4">
            <label className="form-label">Password:</label>
            <input className="form-control" type="password"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
        </div>
        <div className="d-grid">
            <button className="btn btn-primary" type="button"
                onClick={ butOnClick }>
                Iniciar Sesion
            </button>
        </div>
        <div className="my-3">
            <Link to={"/"}>No eres usuario restaurante?</Link>
        </div>
    </form>
}


export default LoginFormR