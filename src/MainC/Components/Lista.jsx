import Card from "./Card";

function Lista(props){

    const listaRows = []
    let listaCols = []

    props.peliculas.forEach(function(pelicula, index){
        if (index % 2 === 0){
            listaCols.push(
                <div className="col-md-6">
                    <Card key={pelicula.id} pelicula = { pelicula }/>
                </div>
            )
        }else{
            listaCols.push(
                <div className="col-md-4">
                    <Card key={pelicula.id} pelicula = { pelicula }/>
                </div>
            )
            listaRows.push(
                <div className="row">
                    { listaCols }
                    
                </div>
            )
            listaCols = []
        }
    })
    if (props.peliculas.length % 2 !== 0){
        listaCols = []
        listaCols.push(
            <div className="col-md-6">
                <Card key={props.peliculas[props.peliculas.length -1].id} 
                pelicula = { props.peliculas[props.peliculas.length -1] }/>
            </div>
        )
        listaRows.push(
            <div className="row">
                { listaCols }
            </div>
        )
    }
    return <div className="container">
        <section className="c1">
        { listaRows }
        </section> 
    </div>

}

export default Lista