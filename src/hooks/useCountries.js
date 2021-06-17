import getCountries from '../services/getCountries'
import  {useState, useEffect } from 'react'




export default function useCountries(){

    const [countries, setCountries] = useState([])   
    const [loading, setLoading] = useState(true)
    
    
    


    useEffect(() => {


       
        setLoading(true)
        getCountries()
            .then(res=>{
                setCountries(res)
                setLoading(false)
            })
        
        return ()=>{
            setCountries([])
            setLoading(false)
        }
        
        
    }, [setCountries])
    

    return({countries,
        isloading:loading
       
    })

}
