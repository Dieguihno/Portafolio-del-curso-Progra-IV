import React from 'react'
import './BarraBusqueda.css'

function BarraBusqueda ({valorBusqueda, funcionBuscar}){
    const buscar = (event)=>{
        funcionBuscar(event.target.value)
    }

    return (
        <input 
            className="BarraBusqueda"
            placeholder="Buscar..."
            onChange={buscar}
            value={valorBusqueda}
            />
    )
}

export {BarraBusqueda}