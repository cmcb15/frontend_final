import '../Comments.css'

function Base(props){
    return <div>
      <strong><p class="mb-0">Comentario {props.pelicula.id}</p></strong>
      <div className="card mb-3" id="ns2">
          <div className="card-body">
            <div className="d-flex flex-start">
              <img className="img rounded-circle shadow-1-strong me-3"
                src="/Img/Avatar.png" alt="avatar" style={{width: "100px" ,height: "100px"}}/>
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="text-primary fw-bold mb-0">
                    { props.pelicula.nombre }  
                    <div className="mt-3">
                        <p><span className="text-dark">{props.pelicula.resenia}</span></p>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>


}
export default Base