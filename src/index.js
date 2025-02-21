import { error } from 'node:console';
//otra manera de importar ::: const fs = require('node:fs');
import fs from 'node:fs/promises';

import {obtenerTareas,crearTarea, eliminarTarea,actualizacion, suma} from './api.js';
import path from 'node:path';
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
    console.log(globalThis)// =>> Es una variable global en toda la aplicacion
    
    console.log(suma(3,4));
};

ejercutar();
//? realizaremos un tipo ls ver todos los archivos que hay en ella
// para poder leer desde directorio
const folder = process.argv[2] ?? '.';

async function LS(folder){
    let files;
    try{
        files = await fs.readdir(folder);//leer el directorio
    }catch{
        console.error(`No se pudo leer el directorio por: ${folder}`);
        process.exit(1); //terminar el proceso
    }
    const filesPromises = files.map(async file => {//recorrer los archivos
        const filePath = path.join(folder, file);
        let status;
        try{
            status = await fs.stat(filePath) //status - informacion del archivo

        }catch(error){
            console.log(`Existe un error en: ${error}`);
           // process.exit(1);
        }
        const isDirectorio = status.isDirectory()
        const symboyl = isDirectorio ? 'd' : 'a';//d - directorio, a - archivo
        const zise = status.size;
        const fileModified = status.mtime.toLocaleString();
        return `${symboyl} ${file.padEnd(30)} ${zise.toString().padStart(10)} ${fileModified}`;
    })
    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}
LS(folder);