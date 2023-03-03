import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import './Comments.css'

function Comments(){

    const [listaPeliculas, setListaPeliculas]= useState([])


    const filtrarPelicula = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/comentarios/listar")
            const data = await response.json()
            setListaPeliculas(data.comentarios)

        }catch(error){
            console.error("Error")
        }
    }


    useEffect(function(){

        if (0 == 1){
        }else{
    
            filtrarPelicula()
        }
    },[])
    
    return <div>  
        
        <div className="text-center">
          <h1>Comentarios</h1>
        </div>
        <section style={{background_color: "#f7f6f6;"}}>
            <div className="container my-3 py-3 text-dark">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10 col-xl-8">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="card ns">
                                <div className="card-body p-2 d-flex align-items-center">
                                    <h6 className="text-primary fw-bold small mb-2 me-1">Comments "ON"</h6>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                        <label className="form-check-label" for="flexSwitchCheckChecked"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ListaPeliculas 
                            peliculas = { listaPeliculas }/>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Comments