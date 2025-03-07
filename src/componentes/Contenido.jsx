import '../index.css'
import { initializeApp, getApps, getApp} from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore'; // Corregido
import { useState, useEffect } from 'react';
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
   const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
   //const analytics = getAnalytics(app);
    const db = getFirestore(app);

/**
 * DATOS POR DEFECTO DE UNA TAREA
 *  descripción "255" (cadena)
    estado false (booleano)
    fechaFin 14 de febrero de 2025, 12:34:28a.m. UTC-4 (marca de tiempo)
    fechaInicio 1 de febrero de 2025, 10:34:12p.m. UTC-4 (marca de tiempo)
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

export function Contenido(){
    const [tareas, setTareas] = useState([]);
    const [modal, setModal] = useState({isOpen: false, mensaje: ""});//un espacio especificamente para el modal

    useEffect(() => {
        const fetchTareas = async () => {
            const querySnapshot = await getDocs(collection(db, 'tareas'));//
            const tareasData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTareas(tareasData);
        };
        fetchTareas();
    }, []);


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
    const handleEliminar = async (id) => {
        try{
            await deleteTarea(id);
            setTareas(tareas.filter(tarea => tarea.id != id));//Actualizar el estado local
            console.log("Eliminado exitosamente");
            setModal({isOpen: true, mensaje:"La tarea fue eliminada exitosamente!!!"});
        }catch(e){
            console.error(`El error es: ${e}`);
            setModal({isOpen: true, mensaje:"Hubo un error al eliminar la tarea"});
        }
    }
    //metodo para cerrar el modal:: button=> CERRAR
    const cerrarModal=() =>{
        setModal({...modal, isOpen:false});
    };


    const handleCheck = async (id)=>{
        const tareaActualizada = tareas.map(tarea => 
            tarea.id === id?{...tarea, estado: !tarea.estado}: tarea
        );
        setTareas(tareaActualizada);
    }
    //mostrar el formulario para crear una tarea
     
    return(
        <>
            <div className="text-sm-start"> 
                <form onSubmit={handleSubmit} >
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Crear tarea
                </button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Añadir nueva Tarea</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                        <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="titulo">Titulo <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" id="titulo" placeholder="Escribe el titulo de la tarea"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descripcion">Descripción</label>
                                    <input type="text" className="form-control" id="descripcion" placeholder="Escribe la descripción de la tarea"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaInicio">Fecha de inicio <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" className="form-control" id="fechaInicio"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fechaFin">Fecha de fin <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" className="form-control" id="fechaFin"/>
                                </div>
                        </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Crear tarea</button>
                            </div>
                            </div>
                        </div>
                    </div>  
                </form>
            </div>
            <div className='text-sm-start'>
                <h2>Lista de tareas</h2>
                <div className="list-group" style={{ width: 'auto' }}>
                        {tareas.map((tarea) => (
                                    <label key={tarea.id} className="list-group-item list-group-item-action list-group-item-light d-flex gap-3">
                                        <input 
                                                className="form-check-input flex-shrink-0" 
                                                type="checkbox" value={tarea.id} 
                                                checked={tarea.estado} 
                                                onChange={() => handleCheck(tarea.id)}
                                                style={{fontSize:'1.375em'}}
                                        />
                                        <span className='pt-1 form-checked-content'>
                                            <strong>{tarea.titulo}</strong>
                                            <small className='d-block text-muted'>
                                                <p>{tarea.descripcion}</p>
                                                <i className="bi bi-calendar-event me-1" style={{fontSize: '1.375em'}}></i>

                                                Inicio: {tarea.fechaInicio} - Fin: {tarea.fechaFin}
                                            </small>
                                        </span>
                                        <div className="ms-auto d-flex flex-column gap-2">
                                            <button 
                                                type='button' 
                                                className="btn btn-danger btn-sm" 
                                                onClick={() => handleEliminar(tarea.id)}
                                            >
                                                Eliminar
                                            </button>
                                            <button 
                                                type='button' 
                                                className="btn btn-warning btn-sm"
                                            > Editar
                                            </button>
                                        </div>
                                        {/*<span>Estado: {tarea.estado ? '✅ Completado' : '⏳ Pendiente'}</span>*/}
                                    </label>     
                        ))} 
                        {modal.isOpen && (
                            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <h5>{modal.mensaje}</h5>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" onClick={cerrarModal}>
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        )}
                </div>
            </div>
        </>
    );

}

 