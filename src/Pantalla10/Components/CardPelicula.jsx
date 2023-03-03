function CardPelicula(props){

    return <div className="card" id="n2">
        <img src={ props.pelicula.url } className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
    



}

export default CardPelicula