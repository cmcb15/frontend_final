import './Main16.css'

function Main16(){

    return <div>

        <div className="d-flex justify-content-center">
            <h1>Registar entrega de pedido</h1>
        </div>

        <div className="container pt-4 d-flex justify-content-center">
            <form className="">
                <div className="col-12">
                    <label for="inputAddress" className="form-label d-flex justify-content-center"><h4><strong>Codigo de verificación</strong></h4></label>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>

                <div className="container pt-4"></div>
                <div className="card text-center" id="n16">
                    <div className="card-body">
                        <h5 className="card-title"><strong>Hamburguesa Royal</strong></h5>
                        <br />
                        <p className="card-text"><strong>Nombre: </strong>Lorem, ipsum.</p>
                        <p className="card-text"><strong>Direccion: </strong>Lorem, ipsum dolor</p>
                        <p className="card-text"><strong>Numero de telefono: </strong>Lorem, ipsum</p>
                        <p className="card-text"><strong>Codigo de verificación: </strong>Lorem, ipsum dolor</p>
                        <br />
                        <a href="/pantalla9" className="btn btn-primary">Registrar entrega</a>
                        
                    </div>
                </div>
            </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>

    </div>

}

export default Main16