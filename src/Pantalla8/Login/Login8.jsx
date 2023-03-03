import { useNavigate } from "react-router-dom"
import LoginForm8 from "./Componentes/LoginForm8" 

function LoginPage8() {

    const navigate = useNavigate()


    const loginHttp = async function(usuario, password){
        const response = await fetch ("http://localhost:8000/endpoints/login8",
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        usuario:usuario,password:password
                    }
                )
            }
        )
        const data = await response.json()

            return data.error
    } 
    const onLoginOk = async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario,password)
        if (error === ""){
            //login correcto 🙂
            const dataUsuario ={
                username : usuario,
                passoword: password
            }
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/main", {
                state : {
                    username : usuario
                }
            })

        }else{
            console.error(error)
        }
    }
    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm8
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage8