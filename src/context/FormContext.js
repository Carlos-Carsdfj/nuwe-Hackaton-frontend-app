/* eslint-disable react/prop-types */
import React, {useState} from 'react'
const Context = React.createContext([])

export  function FormContext ({children}){
    
    const [user, setUser] = useState({
        username:'user',
        password:'pass',
        email:'email@dominio.com',
        typeUser:0
    })
    
    const [address, setAddress] = useState({
        phone:'00-00',
        direction:'',
        country:'usa',
        callingCode:'000',
        edit:false
    })
    const [card, setCard] = useState({
        number:0,
        code:0
    })
    
  
    return <Context.Provider value={{user, setUser, address, setAddress, card, setCard}}>
        {children}
    </Context.Provider>



}

export default Context