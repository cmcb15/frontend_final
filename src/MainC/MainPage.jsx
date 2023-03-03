import { useEffect,useState } from "react"
import Lista from "./Components/Lista"
import Filtro from "./Components/Filtro"
import './MainPage.css'

function MainPage(){

    const [listaPeliculas, setListaPeliculas]= useState([])
    const [listaCategorias, setListaCategorias]= useState([])

    const ObtenerCategoriasAsynAwait = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/categorias/listar")
            const data = await response.json()
            
            setListaCategorias(data.categorias)
        }catch(error){
            console.error("Error")
        }
    }
    const filtrarPelicula = async function(categoriaId){
        try{
            const response = await fetch(
                `http://localhost:8000/endpoints/restaurantes/listar?categorias=${ categoriaId }`
            )
            const data = await response.json()
            console.log(categoriaId)
            if (data.error === ""){
                setListaPeliculas(data.restaurantes)
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
        <Lista 
            peliculas = { listaPeliculas }/>
    </div>

}

export default MainPage