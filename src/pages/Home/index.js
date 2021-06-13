import React from 'react'
import { Link  } from 'wouter'
import JoinUs from '../../components/JoinUs'


import './Home.css'
export default function index() {



    return (<>
      

        <div className='flow-div'> 
            <span className='login-span'>Ya tienes una cuenta?<Link to='/login'  ><p>Inicia sesinón</p></Link></span>
            <JoinUs></JoinUs>
            
          
        </div>
    </>)
}
