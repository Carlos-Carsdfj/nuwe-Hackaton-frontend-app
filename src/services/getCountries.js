const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencie'



export default function getCountries(){


    return fetch(url)
    
        .then(response=>response.json())
        .then(res=>{
       
            const countries = res.map(country => country.name)
           
            return countries
        
        })


}