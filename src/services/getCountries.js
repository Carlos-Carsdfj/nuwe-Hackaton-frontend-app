const url = 'https://restcountries.eu/rest/v2/all?fields=callingCodes;translations;flag'



export default function getCountries(){


    return fetch(url)
    
        .then(response=>response.json())
        .then(res=>{
       
            const countries = res.map(country => {
                return{name:country.translations.es,
                    flag: country.flag,
                    callingCodes:country.callingCodes} })
            
                    
            return countries
        
        })


}