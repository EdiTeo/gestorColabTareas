//!renderizado de listas 

import { useState } from "react";

//? Para manipular datos usaremos filter() and map()
export function Tabla(){
    const people = [
        {id: "u1", name:'Creola Katherine Johnson: matemática'},
        {id: "u2", name:'Mario José Molina-Pasquel Henríquez: químico'},
        {id: "u3", name: 'Mohammad Abdus Salam: físico'},
        {id: "u4", name: 'Percy Lavon Julian: químico'},
        {id: "u5", name:'Subrahmanyan Chandrasekhar: astrofísico'},
      ];
      const caja = people.filter((personas)=> 
        personas.id === 'u5'
    );
    return(
        <>
           {people.map((personas)=><li key={personas.id}>{personas.name}</li>)
            }
             {caja.map((person)=> <li key={person.id}>{person.name}</li> )}
        </>
    );
}
//My profile
export function Profile(){
    const [usuario, setUsuario] = useState({name: 'Edith', edad: 23});
    return(
        <div>
            <p>Nombre: {usuario.name}</p>
            <p>Edad: {usuario.edad}</p>
            <button onClick={()=>setUsuario({
                ...usuario, edad: usuario.edad + 1
            })}>Aumentar Edad</button>
            <button onMouseOver={()=>setUsuario({...usuario, edad: usuario.edad - 1})}>
                Bajar Edad
            </button>
        </div>
    );

}