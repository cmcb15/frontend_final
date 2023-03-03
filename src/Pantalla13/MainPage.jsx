import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import './Pantalla13.css'


function MaingPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])


    const filtrarPelicula = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/pedidos/listar")
            const data = await response.json()
            setListaPeliculas(data.pedidos)
            
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
    
    return <div className="container">  
        <div class="d-flex justify-content-center">
            <h2 className="mt-5 mb-5">Platos registrados</h2>
        </div>
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
        <div class="d-flex justify-content-center">
            <a href="/Pantalla16" className="btn btn-primary mt-4">Registrar entrega</a>
        </div>
        <br/>
    </div>
}

export default MaingPage