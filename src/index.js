import {obtenerTareas,crearTarea, eliminarTarea,actualizacion} from './api.js';
const ejercutar = async()=>{
    console.log("Obtener las tareas");
    const tareas = await  obtenerTareas();
    console.log(tareas);
    //Creando una nueva tarea
    console.log("Crear una nueva tarea");
    const nueva = await crearTarea('Aprender Programacion', true);
    console.log(nueva);
    //eliminar una tarea
    console.log("Eliminar Tarea");
    const eliminar = await eliminarTarea(1);
    console.log(eliminar);

    //actualizar una tarea
    console.log('Actualizar Tarea');
    const actual = await actualizacion(3,{title: 'Hola Edith', completed: true});
    console.log(actual);
};

ejercutar();