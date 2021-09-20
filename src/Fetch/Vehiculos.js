import  { useEffect, useState } from 'react'

export const Vehiculos = () => {
    const [vehiculos, setVehiculos] = useState(null)
    let url = "https://www.swapi.tech/api/starships"
    useEffect(() =>{
        fetch(url)
      .then(response => response.json())
      .then(data => setVehiculos(data))

    },[])
    
    return vehiculos
}