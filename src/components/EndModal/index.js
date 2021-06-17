/* eslint-disable react/prop-types */
import React from 'react'
import './EndModal.css'
export default function ModalError({handlerQuit}) {
    
    return (
        <div className='modal-div'>
            <div className='card-div2'>
                <h1>¡Todo guay!</h1>
                <p>Tu cuenta se ha creado correctamente</p>
                <button onClick={handlerQuit} className='close-button'>Cerrar</button>
                <button  className='go-button'>Vamos para Nuwe</button>
            </div>
            
        </div>
    )
}
