/* eslint-disable react/prop-types */
import React from 'react'
import './ModalError.css'
export default function ModalError({message, handlerQuit}) {
    
    return (
        <div className='modal-div'>
            <div className='card-div'>
                <h1>¡Ups, algo ha ido mal!</h1>
                <p>{message}</p>
                <button onClick={handlerQuit}>Cerrar</button>
            </div>
            
        </div>
    )
}
