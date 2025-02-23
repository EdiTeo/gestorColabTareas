import React from "react";
import {uploadFiles} from "../firebase/init";
export function  Ejemplos(){
    // const [contador, setContador] = React.useState(0);
    // function tocar(){
    //     setContador(contador+1);
    // }
    //ver todos los archivos creados
    return( 
        <>
        <div className="text-sm-start">
                <h3>Sección para subir carpetas</h3>
                
                 {/**<button type="button" onClick={tocar}>Contador {contador}</button> */}
                 {/** */}
                    <label for="formFile" class="form-label">En esta seccion puede subir archivos solo .pdf </label>
                    <input class="form-control" accept=".pdf" type="file" id="formFile" onChange={e => uploadFiles(e.target.files[0])}/>
                    
        </div>
        </>
    );

}