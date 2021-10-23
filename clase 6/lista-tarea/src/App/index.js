import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Encabezado} from '../Encabezado'
import {BarraBusqueda} from '../BarraBusqueda'
import {ListaTareas} from '../ListaTareas'
import {Tarea} from '../Tarea'


function App() {
 const tareasDefault = [
   {texto: "tarea 1", completada: false},
   {texto: "tarea 2", completada: false},
   {texto: "tarea 3", completada: false}
 ]

 const tareasCompletadas = tareasDefault.filter(tarea => tarea.completada).length
 const totalTareas = tareasDefault.length

 const miListaTareas = 'MI_LISTA'
 const almacenamientoLocal = localStorage.getItem(miListaTareas)
 let tareasGuardadas

 if (!almacenamientoLocal) {
   const tareasSerializadas = JSON.stringify(tareasDefault)
   localStorage.setItem(miListaTareas, tareasSerializadas)
   tareasGuardadas = tareasDefault   
 } else {
   tareasGuardadas = JSON.parse(almacenamientoLocal)
 }

 //hooks para interactuar con el DOM
 const [tareas, setTareas] = React.useState(tareasDefault)
 const [valorBuscado, buscarTarea] = React.useState('')


 //busqueda
 let tareasBuscadas = []
 if(valorBuscado.length<=0){
   tareasBuscadas = tareas
 } else {
   tareasBuscadas = tareas.filter (
     tarea => {
       const textoTarea = tarea.texto.toLocaleLowerCase()
       const textoBuscado = valorBuscado.toLocaleLowerCase()
       return textoTarea.includes(textoBuscado)
     }
   )
 }
 //guardar
 const guardar = (tareas)=>{
   if (tareas.length<=0) {
     localStorage.removeItem(miListaTareas)     
   } else {
     const nuevasTareas =JSON.stringify(tareas)
     localStorage.setItem(miListaTareas, nuevasTareas)
   }
 }

 //completar
 const completar = (texto) => {
   const indice = tareas.findIndex(tarea => tarea.texto == texto)
   const nuevaLista = [...tareas]
   nuevaLista[indice].completada = !nuevaLista[indice].completada
   guardar(nuevaLista)
   setTareas(nuevaLista)
 }

 //borrar
 const borrar = (texto)=>{
   const indice = tareas.findIndex(tarea => tarea.texto == texto)
   const nuevaLista = [...tareas]
   nuevaLista.splice(indice, 1)
   guardar(nuevaLista)
   setTareas (nuevaLista)
 }

 return (
   <React.Fragment>
     <Encabezado 
     completadas = {tareasCompletadas}
     total = {totalTareas}     
     />

    <BarraBusqueda 
    valorBusqueda = {valorBuscado}
    funcionBuscar = {buscarTarea}
    />

    <ListaTareas>
      {tareasBuscadas.map(tarea=>(
        <Tarea
          texto = {tarea.texto}
          completada = {tarea.completada}
          onComplete={()=>completar(tarea.texto)}
          onDelete={()=>borrar(tarea.texto)}
          />
      ))}
    </ListaTareas>
   </React.Fragment>
 )
}

export default App;
