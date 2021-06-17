import {useContext, useState, useCallback} from 'react'
import Context from '../context/FormContext'
export default function useRegister() {

    const {user, setUser, address, setAddress, card} = useContext(Context)
    const [isAvailable, setIsAvailable] = useState(false)
    // const [loading, setLoading]=useState(false)
    
    const check = useCallback( async({email, username,password,typeUser})=>{
        
        //aqui comprobaria si el correo existe registrado  con un llamado al servicio   si es asi mandaria false y si no mandaria true 
        //al guardar los datos en el servidor ya los gaurdaria en una base temporal mientras se termina de registrar o se entrgaria un tokken 
        //con la password encryptada de dato y el tipo de cuenta esto para no tener la contraseña desprotegida mientras se termina el resto de procesos
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

        //eliminamos la sesion storage anterior si la hay  para evitar conflictos si el usuario regresa a esta  
        //pagina y guarda datos nuevos tendra que volver a llenar el address y el card asi aunque ya los habia llenado antes
        sessionStorage.clear()

        //guardo una session storage para simular el tokken que retornaria la api o el servicio a que se le estaria mandando el registro
        sessionStorage.setItem('user', typeUser)
        

        setIsAvailable(true)
    
        //y devolvemos true para simular la respuesta afirmativa del servidor

        return true

    },[setUser])


    const setLocation = useCallback( async({phone, direction,country,callingCode, typeUser})=>{

        //aqui se llamaria a una funcion que  mandaria los datos a un  servicio que comprobaria el numero de telefono 
        //con algun codigo de confirmacion o cualquier metodo que preste el dicho servicio 
        //luego seteariamos los datos si se llego a comprobar el numero de telefono
        // de manera demostrativa estaria asi pero en la produccion seria lo mas logico  ir  guardando todos estos datos 
        // en la base de datos y simplemente devolver un tokken que guardariamos en el local y que sirva como confirmacion 
        //para que el usuario pueda viajar a la pagina siguiente y finalizar el registro por completo  
        console.log(phone, direction,country,callingCode)
        setAddress({ phone, direction, country, callingCode, edit:true})

      
        //guardo una session storage para simular el tokken que retornaria la api o el servicio a que se le estaria mandando el registro
        sessionStorage.setItem('address', typeUser)
        
        //y devolvemos true para simular la respuesta afirmativa del servidor
        return true
        
      

    },[setAddress])


    return {
        user, 
        card,
        address, 
        isAvailable,
        setLocation,  
        check

    }
}
