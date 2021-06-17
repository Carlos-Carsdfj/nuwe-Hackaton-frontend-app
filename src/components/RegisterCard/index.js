/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import {useLocation} from 'wouter'
import {FaCheckCircle} from 'react-icons/fa'
import {GiPadlock} from 'react-icons/gi'
import {USER} from '../../configuration'
// import useRegister from '../../hooks/useRegister'
import ModalError from '../ModalError'
import EndModal from '../EndModal'

import './RegisterCard.css'



export default function RegisterAdd({registerTo}) {
    
    const [path, pushLocation] = useLocation()

    
  
    
    const { register, handleSubmit, formState: { errors },watch  } = useForm()

    const watchShowCode = watch('code')
    const watchShowNumber = watch('number')
    
    const [showModal, setShowModal] = useState(false)
    const [showEndModal, setShowEndModal] = useState(false)
    const [message, setMessage] = useState('error inesperado')
    
    
    
    const title = 'Verifica tu perfil'
    
    const subtitle =  'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
    

    
    const onSubmit = data => {    
       
        handlerEndModal()
        
    }

    const checkCode = (watchShowCode&&watchShowCode.length==3)?'rgba(8, 173, 54, 1)':'rgba(218, 218, 218, .8)'
    const checkNumber = (watchShowNumber&&watchShowNumber.length==16)?'rgba(8, 173, 54, 1)':'rgba(218, 218, 218, .8)'
    
    
    const onError = (errors) =>{
        if(errors.number||errors.code){
            setMessage('!Error¡ todos los campos son Requeridos')
           
            setShowModal(true)
        }
    } 
    const handlerModal =()=>{
        setShowModal(prev=>!prev) 
    }
    const handlerEndModal =()=>{
        setShowEndModal(prev=>!prev) 
    }
    
    return (
        <section className='first-register-section'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <form onSubmit={handleSubmit(onSubmit,onError)} className='register-form'>
                
            
       
                    
                <label htmlFor='card-number'>Número de tarjeta </label>
                <input className='data-input' id='card-number' type='number'{...register('number',{required: true, maxLength: 16, minLength: 16 }) } placeholder='Número de tarjeta  ' />            
                <FaCheckCircle color={checkNumber} className='check-number-icon' />
                <label htmlFor='card-code'>Codigo secreto</label>
                <input className='data-input'   id='card-code' type="number"{...register('code',{required: true, maxLength: 3, minLength: 3 })} placeholder='introduce tu codigo secreto' />
                <FaCheckCircle color={checkCode} className='check-code-icon'/>
              
                
                <input className='submit-input' type="submit" value='Crear cuenta'  />

            </form>
       
            {showModal && <ModalError handlerQuit={handlerModal} message={message}/> }
            {showEndModal && <EndModal handlerQuit={handlerEndModal} message={message}/> }
            
            <p className='security-notice'> <GiPadlock color='#8692A6'/> Tu información esta segura</p>
        </section>
        
    )
}







