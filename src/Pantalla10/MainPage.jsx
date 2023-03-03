import { useEffect, useState } from "react"
import ListaPeliculas from "./Components/ListaPeliculas"
import Filtro from "./Components/Filtro"
import './Pantalla10.css'

function MaingPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])
    const [listaCategorias, setListaCategorias]= useState([])

    const ObtenerCategoriasAsynAwait = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/categoriasp/listar")
            const data = await response.json()
            setListaCategorias(data.categorias)
        }catch(error){
            console.error("Error")
        }
    }

    const filtrarPelicula = async function(categoriaId){
        try{
            const response = await fetch(
                `http://localhost:8000/endpoints/platos/listar?categorias=${ categoriaId }`
            )
            const data = await response.json()
            if (data.error === ""){

                setListaPeliculas(data.platos)
            }else{
                console.error(data.error)
            }
        }catch(error){
            console.error("Error")
        }
    }


    useEffect(function(){

        if (0 == 1){
        }else{
            ObtenerCategoriasAsynAwait()
            filtrarPelicula(-1)
        }
    },[])
    
    return <div className="container">  
        <Filtro 
            categorias = { listaCategorias }
            onFiltrar = { filtrarPelicula }/>
        

        <section className="c1">
        <h1 id="titulo">Platos registrados</h1>
        <div>
         
        <ListaPeliculas 
            peliculas = { listaPeliculas }/>
        
        
        </div>
        <br/>
    </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </div>
}

export default MaingPage