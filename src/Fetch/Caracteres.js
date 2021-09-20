import  { useEffect, useState } from 'react'

export const Caracteres = () => {
    const [caracteres, setCaracteres] = useState(null)
    let url = "https://www.swapi.tech/api/people"
    useEffect(() =>{
        fetch(url)
          .then(response => response.json())
          .then(data => setCaracteres(data))

    },[])
    
    return caracteres
}


