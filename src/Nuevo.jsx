import "./estilo.css"
function Nuevo(props)
{
    return(
        <div className="padre">
            <h1>{props.tit}</h1>
            <h2>Hola{props.nom}</h2>
        </div>
    );

}
export default Nuevo;