import  { useEffect, useState } from 'react'

export const Planetas = () => {
    const [planetas, setPlanetas] = useState(null)
    let url = "https://www.swapi.tech/api/planets"
    useEffect(() =>{
        fetch(url)
      .then(response => response.json())
      .then(data => setPlanetas(data))

    },[])
    
    return planetas
}
