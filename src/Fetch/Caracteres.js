import  { useEffect, useState } from 'react'

export const Caracteres = (toggleSetCaracteresLocal) => {
    const [caracteres, setCaracteres] = useState(null)
    let url = "https://www.swapi.tech/api/people"
    useEffect(() =>{
        fetch(url)
          .then(response => response.json())
          .then(data => {setCaracteres(data)
            toggleSetCaracteresLocal(data)
            console.log(data)})

    },[])
    
    return caracteres
}


