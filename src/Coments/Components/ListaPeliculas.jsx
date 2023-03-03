import Base from "./Base"

function ListaPeliculas(props){
    const listaRows = []
    props.peliculas.forEach(function(pelicula, index){

        listaRows.push(
            <div className="col-md-6">
                <Base key={pelicula.id} pelicula = { pelicula }/>
            </div>
        )
    })

    return <div>
        <section>
        { listaRows }
        </section> 
    </div>

}

export default ListaPeliculas