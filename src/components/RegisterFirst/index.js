/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import {useLocation} from 'wouter'
import {USER} from '../../configuration'
import useRegister from '../../hooks/useRegister'
import ModalError from '../ModalError'
import './RegisterFirst.css'


export default function RegisterFirst({registerTo}) {
    

    const [show, setShow]=useState(false)
    const { register, handleSubmit } = useForm()
    const [path, pushLocation] = useLocation()
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('error inesperado')
    const { check} = useRegister(registerTo)
    const textButton = show ? 'Ocultar': 'Mostrar'
    const typePassword = show ? 'text' : 'password'
    const title =  registerTo == USER.DEVELOPER ? 'Registra tu cuenta individual':'Registrate como empresa'
    const subtitle =  registerTo == USER.DEVELOPER ? 'Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información'
        :'Necesitamos los datos reales de un representante legal de la empresa'

    const onSubmit = data => {    
        const allData = {...data,typeUser:registerTo}
        check(allData)
            .then(isAvailable=>{
                if(isAvailable){
                    pushLocation('/address')
                }else{
                    setMessage(`Parece que el correo electrónico introducido ya está en uso.
                     Por favor, revísalo y vuelve a intentarlo de nuevo.`)
                    
                } 
            })     
    }


    const handlerMShow =()=> {
        setShow(prev=>!prev)     
    }
    const onError = (errors) =>{
        if(errors.password||errors.accept||errors.username){
            setMessage(`Recuerda que debes de aceptar las condiciones, la contraseña debe de contener entre
            8 y 16 caracteres , por lo menos una letra en Mayuscula, un numero  y un caracter especial como minimo`)
            setShowModal(true)
        }
    } 
    const handlerModal =()=>{
        setShowModal(prev=>!prev) 
    }

    return (
        <section className='first-register-section'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <form onSubmit={handleSubmit(onSubmit,onError)} className='register-form'>

                <label htmlFor='username'>Nombre completo*</label>
                <input className='data-input' id='username'{...register('username',{required: true})} placeholder='¿ Cual es tu nombre ? ' />            
                <label htmlFor='email'>Correo electrónico*</label>
                <input className='data-input'   id='email' type="email"{...register('email',{required: true})} placeholder=' Escribe Tu Direccion De correo Electronico  ' />
                <label htmlFor='password'>Contraseña*</label>
                <input className='data-input' id='password' {...register('password',{required: 'error requerido', pattern: { value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/ ,message: 'invalido'}   })} placeholder=' Contraseña ' type={typePassword} />
                <label className='show-button' onClick={handlerMShow}>{textButton}</label>        
                <label htmlFor='accept'>
                    <input className='accept-chackbox' id='accept' type="checkbox" placeholder="accept" {...register('accept', {required: true, })} />
                    Acepto los térmicos y condiciones
                </label>
                <input className='submit-input' type="submit" value='Registrar cuenta'  />

            </form>
            <button className='google-button' > Registrate con Google</button>
            {showModal && <ModalError handlerQuit={handlerModal} message={message}/> }
        </section>
        
    )
}







