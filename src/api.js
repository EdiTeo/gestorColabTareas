
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const obtenerTareas = async() =>{
    try{
        const caja = await fetch(API_URL);
        //if (!caja.ok) throw new Error(`Error HTTP: ${caja.status}`);
        const resultado = await caja.json();
        return resultado;
    }catch(error){
        console.error(`${error}`);
        return[];
    }
}
//para crear una nueva tareas
export const crearTarea = async(titulo,completado) =>{
    try{
        const respuesta = await fetch(API_URL,{
            method: 'POST',
            body: JSON.stringify({title: titulo, completed: completado}),
            headers:{"Content-Type": "application/json"}
        });
        const nuevaTarea = await respuesta.json();
        return nuevaTarea
    }catch(error){
        console.error(`Error al crear la tarea por: ${error}`);
    }
}
//eliminar
export const eliminarTarea = async(id)=>{
    try{
        await fetch(`${API_URL}/${id}`,{
            method:'DELETE'
        });
        console.log(`Tarea ${id} eliminada exitosamente!!!`);
    }catch(error){
        console.error(`No se pudo eliminar la Tarea por: ${error}`);
    }
}
///acutalizacion de datos 
export const actualizacion = async (id, nuevoDato)=>{
    try{
        const respuesta = await fetch(`${API_URL}/${id}`,{
                method:'PUT',
                body: JSON.stringify(nuevoDato),
                headers: {'Content-Type': 'application/json'}
        });
        const tareaAcualizada = await respuesta.json()
        return tareaAcualizada

    }catch(error){
        console.error(`Tenemos un error al actualizar datos: ${error}`);
    }
}
export const suma = (a,b) => (a + b);
 