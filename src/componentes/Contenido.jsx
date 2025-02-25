import '../index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore, doc, deleteDoc, updateDoc, getDoc, getDocs } from 'firebase/firestore'; // Corregido
import { useState } from 'react';
//configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHMWKYqN68Uu3sNwUMW8I5pG9-t_QF3mw",
    authDomain: "cirelect-2021.firebaseapp.com",
    databaseURL: "https://cirelect-2021-default-rtdb.firebaseio.com",
    projectId: "cirelect-2021",
    storageBucket: "cirelect-2021.firebasestorage.app",
    messagingSenderId: "785896457649",
    appId: "1:785896457649:web:1b3f8def9a890699d92990",
    measurementId: "G-C5LYR0SJZH"
  };
   //inicializar firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

/**
 * DATOS POR DEFECTO DE UNA TAREA
 *  descripción "255" (cadena)
    estado false (booleano)
    fechaFin 14 de febrero de 2025, 12:34:28 a.m. UTC-4 (marca de tiempo)
    fechaInicio 1 de febrero de 2025, 10:34:12 p.m. UTC-4 (marca de tiempo)
    titulo "100"
 * 
 */
//metodo para crear Tareas
export async function createTarea(tarea){
    try{
        const docRef = await addDoc(collection(db, 'tareas'),{
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            estado: tarea.estado,
            fechaFin: tarea.fechaFin,
            fechaInicio: tarea.fechaInicio, 
        });
        console.log('Tarea creada con la ID: ', docRef.id);
        return {id: docRef.id, ...tarea};
    }catch(error){
        console.error(`Error al crear la tarea: ${error}`);
    }
    
}
//metodo para eliminar tareas
export async function deleteTarea(id){
    try{
        const borrarDoc =  doc(db, 'tareas', id);
        await deleteDoc(borrarDoc);
        console.log("La tarea fue eliminada con éxito");
    }catch(error){
        console.error(`Error al eliminar la tarea ${error}`);
    }
}   
 
//metodo para actualizar tareas
export async function updateTarea(id, tarea){
    try{
        const actualizar = doc(db, 'tareas', id);
        await updateDoc(actualizar,{
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            estado: tarea.estado,
            fechaFin: tarea.fechaFin,
            fechaInicio: tarea.fechaInicio, 
        });
        console.log("La tarea fue actualizada con éxito");
    }catch(error){
        console.error(`Error al actualizar la tarea ${error}`);
    }
}   
//metodo para obtener tareas

//metodo para obtener una tarea


export function  Contenido(){
    const [tareas, setTareas] = useState([]);
    //funcionalidad para crear una tarea
    const handleSubmit  = async (e) => {
        e.preventDefault();
        const titulo = e.target.titulo.value;
        const descripcion = e.target.descripcion.value;
        const fechaInicio = e.target.fechaInicio.value;
        const fechaFin = e.target.fechaFin.value;
        const nuevaTarea = {
            titulo,
            descripcion,
            estado: false,
            fechaInicio,
            fechaFin,
        };
        const mostrarTarea = await createTarea(nuevaTarea);
            if(mostrarTarea){
                setTareas([...tareas, mostrarTarea]);
            }
        
    };
    //mostrar el formulario para crear una tarea
     
    return(
        <>
            <div className="text-sm-start">
                <form onSubmit={handleSubmit}>
                    <h2>Crear tarea</h2>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Escribe el titulo de la tarea"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <input type="text" className="form-control" id="descripcion" placeholder="Escribe la descripción de la tarea"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaInicio">Fecha de inicio</label>
                        <input type="date" className="form-control" id="fechaInicio"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaFin">Fecha de fin</label>
                        <input type="date" className="form-control" id="fechaFin"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear tarea</button>
                </form>
            </div>
            <div className='lista-tareas'>
                <h2>Lista de tareas</h2>
                <ul>
                    {tareas.map((tarea) => (
                        <div>
                            <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <h3>{tarea.titulo}</h3>
                                <p>{tarea.descripcion}</p>
                                <p>{tarea.fechaInicio}</p>
                                <p>{tarea.fechaFin}</p>
                                <button className="btn btn-danger">Eliminar</button>
                                <button className="btn btn-warning">Editar</button>
                                <span>Estado: {tarea.estado ? '✅ Completado' : '⏳ Pendiente'}</span>
                            </li>   
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );

}

 