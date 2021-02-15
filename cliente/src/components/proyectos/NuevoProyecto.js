

const NuevoProjecto = () => {
    return ( 
        <>
            <button
            type="button"
            className="btn btn-block btn-primario"
            >Nuevo Proyecto </button>
            
            <form 
                className="formulario-nuevo-proyecto"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="proyecto"
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                    />

            </form>
        </>
     );
}
 
export default NuevoProjecto;