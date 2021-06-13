import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi' 
import PolyBusiness from './assets/PolygonBusiness.png'
import PolyDev from './assets/PolygonDev.png'
import {useLocation} from 'wouter'
import {USER} from '../../configuration'
import './JoinUs.css'


export default function JoinUs() {
    
    // eslint-disable-next-line no-unused-vars
    const [path, pushLocation] = useLocation()
    
    const handlerDev = () =>{
        pushLocation(`/register/${USER.DEVELOPER}`)

    }

    const handlerBusin = () =>{

        pushLocation(`/register/${USER.BUSINESS}`)
        
    }


    return (
        <>
            <div className='joins-content' >

                <h2>¡Unete a la comunidad!</h2>
                <p>Para empezar, dinos que cuenta te gustaría abrir.</p>



                <div className='join-div' onClick={handlerDev}>
                    <img src={PolyDev} className='join-img'/>

                    <div className='texts-div'>
                        <h3>Developers</h3>
                        <p>Cuenta personas para entrar en el mundo dev</p>
                    </div>    
                    <BiRightArrowAlt color='green' size="20" className='arrow-img'/>

                </div>



                <div className='join-div' onClick={handlerBusin}>
                    <img src={PolyBusiness}  className='join-img' />
                    <div className='texts-div'>
                        <h3>Business</h3> 
                        <p>Tienes o perteneces a una compañía</p>
                    </div>
                    <BiRightArrowAlt color='green' size="20" className='arrow-img'/>

                </div>

            </div> 
            
        </>
    )
}
