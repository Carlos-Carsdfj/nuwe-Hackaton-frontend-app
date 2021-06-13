import {useContext, useState, useCallback} from 'react'
import Context from '../context/FormContext'
export default function useRegister() {

    const {user, setUser, address, setAddress, card, setCard} = useContext(Context)
    const [isAvailable, setIsAvailable] = useState(false)
    // const [loading, setLoading]=useState(false)
    
    //aqui comprobaria si el correo existe registrado  con un llamado al servicio   si es asi mandaria false y si no mandaria true 
    const check = useCallback( async({email, username,password,typeUser})=>{

        //setLoading(true)
        //  emailService()
        // .then(res=>{res.json()
        //    setUset({
        //      username,
        //        email,
        //          password    
        //                  }
        // setIsAvailable(true)
        //setLoading(false)
        // }).
                  
        // .catch(error=>{
        //setLoading(false)    
        // 
        //})
        setUser({email, username,password, typeUser})
        setIsAvailable(true)
        return true

    },[setUser])


    return {user, 
        address, 
        setAddress, 
        card, 
        setCard,
        isAvailable,
        check
        


    }
}
