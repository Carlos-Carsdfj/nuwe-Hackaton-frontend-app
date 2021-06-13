import React from 'react'
import { Link  } from 'wouter'
import {FiChevronLeft} from 'react-icons/fi' 



import RegisterFirst from '../../components/RegisterFirst'


import './Register.css'

export default function index({params}) {
    
    const {registerTo}=params
    
   
    return (<>
        
        <span className='return-span'>
            
            <Link to='/' className='return-link'>
                <FiChevronLeft color='#8692A6'/>
                <p>Volver</p>
            </Link>

            <div className='return-div'>
                <p>PASO 01/03</p>
                <h1>Personal Info.</h1>
            </div>
        </span>
        
       
        <div className='flow-div'>
            <div className='register-content' >

                <RegisterFirst registerTo={registerTo}/>

            </div>
        </div>
    </>)
}
