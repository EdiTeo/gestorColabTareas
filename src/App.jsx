

import Food from "./Food";//
import Card from "./Card";
import Props from "./Props";//no olvides importar 
import {Children} from "./Children";//hay dos formas de exportar esta
import { Fragment } from "react";
import {Baile} from './Children'
import { Tabla,Profile } from "./Rederizado";
import Menubar from "./componentes/MenuBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contenido } from "./componentes/Contenido";
import {Home} from "./componentes/Home";
import {Api} from "./componentes/Api";
import {Ejemplos} from "./componentes/Ejemplos";
import { Footer } from "./Footer";
import './index.css'
function App() {
   return(
      <Fragment key=''>
         {/**<Food/>
         <Card/>
         <Props name="Ana" age={20} isProp={true}/>
         <Props />
         <button className="square">X</button>
         <Children>
            <h1>Recuperacion de Datos con Scraping</h1>
            <p>Realizamos la inyección de datos</p>
         </Children>
         <Baile name="Edith "/>
         <h1>AQUÍ ESTA NUESTRA LISTA DE RENDERIZACION</h1>
         <Tabla />
         <Profile/> */}
         <Router>
         <div className="d-flex flex-column min-vh-100">
            <Menubar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/contenido" element={<Contenido/>}/>
               <Route path="/api" element={<Api/>}/>
               <Route path="/ejemplos" element={<Ejemplos/>}/>
               
            </Routes>
            <br /><br /> <br />
            <Footer/>
            </div>
         </Router>
      </Fragment>
     
  );
}

export default App;














