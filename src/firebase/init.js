 
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid';//Generar un identificador único
// TODO: 
 
const firebaseConfig = {
  apiKey: "AIzaSyBCs6pP0fGf6I_OdTcXjkZh7LxMoHx6Wqc",
  authDomain: "spotify-lite-2bd06.firebaseapp.com",
  projectId: "spotify-lite-2bd06",
  storageBucket: "spotify-lite-2bd06.appspot.com",
  messagingSenderId: "581134679882",
  appId: "1:581134679882:web:0c2e6c62a82a93ef130bb3",
  measurementId: "G-XDY2S2CBPC"
};

 
const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app);//Inicializar el servicio de almacenamiento

export async function uploadFiles(file){//Subir archivos
    if(!file) return;
    const fileRef = ref(storage, `pdfs/${v4()}`);//Crear una referencia al archivo
    try{
        const snapshot = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef); //Obtener la URL del archivo
        console.log("Archivo subido con éxito:", url);
        return url;
    }catch(error){
        console.error(error);
    }
}
 
