/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {useLocation} from 'wouter'
import {USER} from '../../configuration'
import useRegister from '../../hooks/useRegister'
import ModalError from '../ModalError'
import useCountries from '../../hooks/useCountries'
import {GiPadlock} from 'react-icons/gi'

import './RegisterAdd.css'



export default function RegisterAdd({registerTo}) {
    
    const [path, pushLocation] = useLocation()

    
  
    
    const {countries, isloading }=useCountries()
    const [country, setCountry]=useState('Afganistán')
    const [callingCodes,setCallingCodes]=useState(['93'])
    const [flag,setFlag] = useState('https://restcountries.eu/data/afg.svg')

    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('error inesperado')
    const { register, handleSubmit } = useForm()
    
    const { setLocation,user} = useRegister()
    
    const title = 'Completa tu Perfil'
    
    const subtitle =  registerTo == USER.DEVELOPER ? 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
        :'Necesitamos los datos reales de un representante legal de la empresa'
    

    
    const onSubmit = data => {    
       
        setLocation({...data,
            country,
            typeUser:registerTo} 
        ).then(res=>{
            if(res){
                pushLocation('/cardData')
            }
        })
       
        
    }

    
    
    const onError = (errors) =>{
        if(errors.number||errors.direction){
            setMessage('!Error¡ todos los campos son Requeridos')

            setShowModal(true)
        }
    } 
    const handlerModal =()=>{
        setShowModal(prev=>!prev) 
    }
    const handlerSelect =(ev)=>{
        setCountry(countries[ev.target.value].name)
        setCallingCodes(countries[ev.target.value].callingCodes)
        setFlag(countries[ev.target.value].flag)

    }

    return (
        <section className='first-register-section'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <form onSubmit={handleSubmit(onSubmit,onError)} className='register-form'>
                
                <div className='flag-div'>  
                    <img className='flag-img' src={flag}/>
                    <select className='numbers-select' {...register('callingCode',{required: 'error requerido'   })} >
                        {callingCodes.map((code,index)=><option key={index} value={code}>{code}</option>)}
                    </select>
                </div>
       
                    
                <label htmlFor='phone'>Número de teléfono</label>
                <input className='data-input' id='phone' type='number'{...register('phone',{required: true })} placeholder='Numero de Contacto ' />            
                <label htmlFor='direction'>Direccion</label>
                <input className='data-input'   id='direction' type="text"{...register('direction',{required: true})} placeholder='introduce la direccion completa ' />
                <label htmlFor='country'>Pais de residencia</label>
                <select className='data-input' id='country' {...register('indexCountry',{required: 'error requerido'   })} placeholder=' Selecciona un pais ' onChange={handlerSelect}>
                    {!isloading&&countries.map((country, index)=><option key={index} value={index}>{country.name}</option>)}
                </select>
                      
                
                <input className='submit-input' type="submit" value='Guardar y continuar'  />

            </form>
       
            {showModal && <ModalError handlerQuit={handlerModal} message={message}/> }
            <p className='security-notice'> <GiPadlock color='#8692A6'/>Tu información esta segura</p>
        </section>
        
    )
}







