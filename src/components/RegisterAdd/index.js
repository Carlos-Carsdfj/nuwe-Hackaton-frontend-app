/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import {useLocation} from 'wouter'
import {USER} from '../../configuration'
import useRegister from '../../hooks/useRegister'
import ModalError from '../ModalError'
import useCountries from '../../hooks/useCountries'
import './RegisterAdd.css'



export default function RegisterAdd({registerTo}) {
    
    const {countries, isloading }=useCountries()
    
    const { register, handleSubmit } = useForm()
    const [path, pushLocation] = useLocation()
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('error inesperado')
    const { address, setAddress,} = useRegister(registerTo)
    const [flag,setFlag] = useState('https://www.countryflags.io/be/shiny/64.png')
    const title = 'Completa tu Perfil'
    const subtitle =  registerTo == USER.DEVELOPER ? 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
        :'Necesitamos los datos reales de un representante legal de la empresa'


    const onSubmit = data => {    
       
        setAddress({...data})
        
    }

    
    
    const onError = (errors) =>{
        if(errors.number||errors.direction||errors.country){
            setMessage('!Error¡ todos los campos son Requeridos')

            setShowModal(true)
        }
    } 
    const handlerModal =()=>{
        setShowModal(prev=>!prev) 
    }
    const handlerSelect =(ev)=>{
        setFlag(ev.target.value)
        
    }

    return (
        <section className='first-register-section'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <form onSubmit={handleSubmit(onSubmit,onError)} className='register-form'>
                
                <div className='flag-div'>  
                    <img className='flag-img' src={flag}/>
                    <select className='numbers-select'  {...register} onChange={handlerSelect}>
                        <option value='https://www.countryflags.io/be/shiny/64.png'>0541</option>
                        <option value='https://www.countryflags.io/CO/shiny/64.png'>0542</option>
                        <option value='https://www.countryflags.io/ES/shiny/64.png'>0543</option>
                        <option value='https://www.countryflags.io/PT/shiny/64.png'>0544</option>
                    </select>
                </div>
       
                    
                <label htmlFor='phone'>Número de teléfono</label>
                <input className='data-input' id='phone' type='number'{...register('phone',{required: true })} placeholder='Numero de Contacto ' />            
                <label htmlFor='direction'>Direccion</label>
                <input className='data-input'   id='direction' type="text"{...register('direction',{required: true})} placeholder='introduce la direccion completa ' />
                <label htmlFor='country'>Pais de residencia</label>
                <select className='data-input' id='country' {...register('country',{required: 'error requerido'   })} placeholder=' Selecciona un pais ' >
                    {!isloading&&countries.map((country, index)=><option key={index} value={country}>{country}</option>)}
                </select>
                      
                
                <input className='submit-input' type="submit" value='Guardar y continuar'  />

            </form>
       
            {showModal && <ModalError handlerQuit={handlerModal} message={message}/> }
        </section>
        
    )
}







