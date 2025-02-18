import './index.css';
import React,{useState, useRef} from 'react';
//crearemos una lista de comidad
const lista = ["pique","salqui","pizza","gumet"];
function Food(){
    const [mensaje, setMensaje]   =useState("Hola, desde una funcion");
    const inputRef = useRef(null);
    const hacerClic = () => {
      inputRef.current.focus();
    }
    return (
          <div className="food-card">
            <h1>Comida Vegana</h1>
            <h3 className='food-text'>{mensaje}</h3>
            <button className="food-boton" onClick={
                () => setMensaje("Good!!!") }>
            cambiar</button>

            <ul>
                {lista.map((comida, index)=> {
                  return <li key={index}>{comida}</li> /**se agrega un return explicito un inplicito seria agregar
                   un parentecis() entre el li borrando los corchetes*/
                })
                }
              </ul>
                <input ref={inputRef} type='text'/>
                <button onClick={hacerClic}>
                  Subir
                </button>
          </div>
          
          

    
    );

}export default Food;