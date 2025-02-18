
export function Children({children }){ //ESTO ES POR NOMBRE
    console.log(Children);
    return(
        <div className="children-caja">
            {children }
        </div>
    );
};//export default Children; //manejo de import POR NOMBRE(export function) Y POR DEFECTO(export default function)
//ayer dijismo que hay dos forma de importar por DEFECTO y POR NOMBRE
//!renderizado de listas 
export function Baile(props){
    return (
        <h1>Salpicamos un paso a la derecha para mover los pies {props.name}</h1>
    );
};