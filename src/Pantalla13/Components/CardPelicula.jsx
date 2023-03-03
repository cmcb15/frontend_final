function CardPelicula(props){
    
    return <div class="plato-carta bg-light">
    <div class="img-plato-carta">
        <img src={props.pelicula.plato.url} alt=""/>
    </div>
    <div class="descripcion">
        <h4>{ props.pelicula.nombre }</h4>
        <p>Plato: {props.pelicula.plato.nombre}</p>
        <p>Numero de telefono: 979123043</p>
        <p>Codigo de verificación: {props.pelicula.codigo}</p>
    </div>
    <div class="precio">
        <span>S/.25</span>
    </div>
</div>
}

export default CardPelicula