import React,{ useState } from "react";

function Recibi({onAddTarea}){
  const [inputValue, setInputValue] = useState('');
  const handleInputChage = (event)=>{
    setInputValue(event.target.value);
  };
  const handleAddTarea = ()=>{
     if(inputValue.trim()){
      onAddTarea(inputValue);
      setInputValue('');
     }
  };
  return(
    <div className="input-group mb-3">
    <input type="text" className="form-control" 
    placeholder="Añadir una nueva tarea" 
    value={inputValue}
    onChange={handleInputChage}
    aria-label="Añadir nueva tarea" 
    aria-describedby="basic-addon2"/>
    <button type="button" 
    className="btn btn-outline-secondary" 
    onClick={handleAddTarea}>Añadir</button>
  </div>
  );
}
export default function CreaTareas(){
  const [tareas, setTareas] = useState([]);
  const AgregarTarea = (tarea) => {
    setTareas ([...tareas, tarea]);
  };
  return (
    <>
       
      <Recibi onAddTarea={AgregarTarea}/>
       <ul>
        {tareas.map((tarea, index) =>
          <li key={index}> {tarea}</li>)
        }
       </ul>
    </>

  );
}