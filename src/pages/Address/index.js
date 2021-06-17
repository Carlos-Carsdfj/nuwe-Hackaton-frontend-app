/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link,useLocation  } from 'wouter'
import {FiChevronLeft} from 'react-icons/fi' 
import RegisterAdd from '../../components/RegisterAdd'

export default function index() {
    const [path, pushLocation] = useLocation()
    const [back, setBack] = useState('/')
    const registerTo = sessionStorage.user  
    
    useEffect(() => {
        if(registerTo){
            setBack(`/register/${sessionStorage.user}`)
        }else{
            pushLocation('/')
        }
           
    }, [])

   

    return (
        <>
          
            <span className='return-span'>
                
                <Link to={back} className='return-link'>
                    <FiChevronLeft color='#8692A6'/>
                    <p>Volver</p>
                </Link>

                <div className='return-div'>
                    <p>PASO 02/03</p>
                    <h1>Localizacion</h1>
                </div>
            </span>
            
        
            <div className='flow-div'>
                <div className='register-content' >
                    <RegisterAdd registerTo={registerTo}/>
                </div>
            </div>
        </>
    )
}
