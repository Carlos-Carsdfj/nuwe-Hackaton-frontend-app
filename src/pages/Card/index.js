/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import { Link,useLocation  } from 'wouter'
import {FiChevronLeft} from 'react-icons/fi' 
import RegisterCard from '../../components/RegisterCard'




import './Card.css'

export default function index() {

    const  [back, setBack] = useState('/')
    const [path, pushLocation] = useLocation()
    
    const registerTo = sessionStorage.address
    useEffect(() => {
        if(registerTo){
            setBack('/address')
        }else{
            pushLocation('/')
        }
           
    }, [])

    
   
    return (<>
        
        <span className='return-span'>
            
            <Link to={back} className='return-link'>
                <FiChevronLeft color='#8692A6'/>
                <p>Volver</p>
            </Link>
            
            <div className='return-div'>
                <p>PASO 03/03</p>
                <h1>Verificación por tarjeta.</h1>
            </div>
        </span>
        
       
        <div className='flow-div'>
            <div className='register-content' >

                <RegisterCard registerTo={registerTo}/>

            </div>
        </div>
    </>)
}
