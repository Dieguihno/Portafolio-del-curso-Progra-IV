import React from 'react';
import {Encabezado} from '../Encabezado'
import {BarraBusqueda} from '../BarraBusqueda'
import {ListaTareas} from '../ListaTareas'
import {Tarea} from '../Tarea'
import {BotonCrear} from '../BotonCrear'
import {AppContext} from '../context'
import {modal} from '../Modal'
import{formulario} from '../Formulario'

function UI(){
    const {btc,
      error,
      tareasBuscadas,
      completar,
      borrar,
      openModal,
      setOpenModal}=React.useContext(AppContext)
    return (
        <React.Fragment>
          <Encabezado/>
          <BarraBusqueda/>   
           
              <ListaTareas>
                {<p> valor de 1 bitcoin: {btc}</p>}
                {<p>{error}</p>}
                {tareasBuscadas.map(tarea=>(
                  <Tarea 
                    texto={tarea.texto}
                    completada={tarea.completada}
                    onComplete = {()=>completar(tarea.texto)}
                    onDelete = {()=>borrar(tarea.texto)}
                  />
                ))}
                {<p>Autor: </p>}
              </ListaTareas>  
              {!!openModal && (
                <modal>
                  <formulario></formulario>
                </modal>
              )}     
              <BotonCrear
                  setOpenModal={setOpenModal}
              />                  
        </React.Fragment>
      )
}

export {UI}