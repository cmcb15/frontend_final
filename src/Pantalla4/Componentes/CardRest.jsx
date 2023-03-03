
function CardRest(props) {
    return <div className="card mb-3" id="n4">
        <img src={ props.pelicula.url } 
            className="card-img-top img-fluid" 
            alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            
            <p className="card-text"><small className="text-muted ">S/ { props.pelicula.precio }</small></p>
            <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
            </select>
            <br/>
            <a href="/pantalla6" className="btn btn-outline-secondary rounded-0"> añadir al carrito</a>
        </div>
    </div>
}

export default CardRest