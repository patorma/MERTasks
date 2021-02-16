import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    // se le pasan datos de prueba
    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio web'}
    ]
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto 
                   proyecto={proyecto}
                />

            ))}
        </ul>
     );
}
 
export default ListadoProyectos;