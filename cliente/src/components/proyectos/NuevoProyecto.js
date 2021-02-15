import {useState} from 'react'

const NuevoProjecto = () => {
    
    
// State para el proyecto
const [proyecto, guardarProyecto] = useState({
    nombre: ''
});

// Extraer nombre de proyecto
const {nombre} = proyecto;

// Lee los contenidos del input
const onChangeProyecto = e =>{
    //tomamos una copia del proyecto
    guardarProyecto({
       ...proyecto,
       //le asignamos el nuevo valor
       [e.target.name]: e.target.value

    })

}

// Cuando el usuario envia un proyecto
const onSubmitProyecto = e =>{

    e.preventDefault();

    // Validar el proyecto


    // agregar al state

    // Reiniciar el form
}
    return ( 
        <>
            <button
            type="button"
            className="btn btn-block btn-primario"
            >Nuevo Proyecto </button>
            
            <form 
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
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