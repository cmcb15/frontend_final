function Main6(){
    return <div>
        <div className="d-flex justify-content-center">
            <h1>Carrito de Compras</h1>
        </div>

            
        <div className="container pt-4">
            <div className="d-flex justify-content-center">
                <strong><h4>Datos del Pedido</h4></strong>
            </div>
            <form className="row g-3">
                <div className="col-12">
                    <label for="inputAddress" className="form-label"><strong><h4>NOMBRE: JOSE MIGUEL </h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>NUMERO DE TELEFONO: 901 234 123</h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>DIRECCION: SANTIAGO DE SURCO 138 </h4></strong></label>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>METODO DE PAGO: TARJETA </h4></strong></label>
            </div>
            <table className="table table-warning table-hover">
                    <thead>
                        <tr>
                        <th scope="col">CANTIDAD</th>
                        <th scope="col">CATEGORIA</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">2</th>
                        <td>Plato Personal</td>
                        <td>Jalea Mixta</td>
                        <td>S/ 25.00</td>
                        <td>S/ 50.00</td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="4">TOTAL A CANCELAR</th>
                        <td >S/ 50.00</td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
            <a href="/Pantalla4" className="btn btn-primary mt-8">Volver a la lista</a>
            </div>
                <div className="d-flex justify-content-center">
                    <a href="/pantalla7" className="btn btn-primary mt-4">Confirmar pedido</a>
                </div>
                
            </form>
            <br/>
        </div>
    </div>  
}

export default Main6