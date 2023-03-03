function Filtro4(props) {
    return <div className="mt-4 mb-4">
        <h1 className="form-label mt-2">Bienvenido Antony </h1>
        <label className="form-label">Categoría</label>
        <select className="form-select"
            onChange={ function(evt) { 
                props.onFiltrar(evt.target.value)
            }}>
            <option value={-1}>Todas</option>
            {
                props.categorias.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
        </select>
    </div>
}

export default Filtro4