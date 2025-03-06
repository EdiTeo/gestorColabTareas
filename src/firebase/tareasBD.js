 import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, collection,getFirestore} from 'firebase/storage'

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
     
    }catch(error){
        console.error(error);
    }
    
}
//metodo para eliminar tareas
export async function deleteTarea(id){
     
    try{
        
        console.log("La tarea fue eliminada con éxito");
    }catch(error){
        console.error(error);
    }
}   
 
//metodo para actualizar tareas
//metodo para obtener tareas
//metodo para obtener una tarea