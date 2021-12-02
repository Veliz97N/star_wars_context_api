import React, { createContext, useState } from 'react';
import useLocalStorage from '../useLocalStorage';
import {Caracteres} from "../Fetch/Caracteres"
import {Planetas} from "../Fetch/Planetas"
import {Vehiculos} from "../Fetch/Vehiculos"


const UserContext = createContext();

const initialUser = {
    id: 1,
    name: "Nicolas",
    favoriteCaracteres: [],
    favoriteVehiculos: [],
    favoritePlanetas: []
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser)

    const [informacionElemento, setInformacionElemento] = useState(null) //ACA QUEDA NULL POR SIACASO SALTA UN ERROR AL MAPEAR

    const toggleFavoritosCaracteres = (caracterID) => {
        const isFavorite = user.favoriteCaracteres.includes(caracterID)
        const favoriteCaracteres = isFavorite
                                    ? user.favoriteCaracteres.filter(favCar => favCar !== caracterID)
                                    : [...user.favoriteCaracteres, caracterID]
        setUser({ ...user, favoriteCaracteres })
    }
    
    const toggleFavoritosPlanetas = (planetaID) => {
        const isFavorite = user.favoritePlanetas.includes(planetaID)
        const favoritePlanetas = isFavorite
                                ? user.favoritePlanetas.filter(favCar => favCar !== planetaID)
                                : [...user.favoritePlanetas, planetaID]
        setUser({ ...user, favoritePlanetas })
    }
    const toggleFavoritosVehiculos = (vehiculoID) => {
        const isFavorite = user.favoriteVehiculos.includes(vehiculoID)
        const favoriteVehiculos = isFavorite
            ? user.favoriteVehiculos.filter(favCar => favCar !== vehiculoID)
            : [...user.favoriteVehiculos, vehiculoID]
        setUser({ ...user, favoriteVehiculos })
    }
    const toggleInformacionElemento = (caracteristicas) => {
        setInformacionElemento(caracteristicas)
        console.log(informacionElemento)
    }



    
    const [caracteresLocal, setCaracteresLocal] = useLocalStorage('caracteres',"")
    const toggleSetCaracteresLocal = (parametro) =>{
        setCaracteresLocal(parametro)
    }
    const caracteresFetch = Caracteres(toggleSetCaracteresLocal)

    const [planetasLocal, setPlanetasLocal] = useLocalStorage('planetas',"")
    const toggleSetPlanetasLocal = (parametro) =>{
        setPlanetasLocal(parametro)
    }
    const planetasFetch = Planetas(toggleSetPlanetasLocal)


    const [vehiculosLocal, setVehiculosLocal] = useLocalStorage('vehiculos',"")
    const toggleSetVehiculosLocal = (parametro) =>{
        setVehiculosLocal(parametro)
    }
    const vehiculosFetch = Vehiculos(toggleSetVehiculosLocal)



    const data = { user, vehiculosLocal,planetasLocal,caracteresLocal,toggleSetCaracteresLocal,toggleFavoritosCaracteres, toggleFavoritosPlanetas, toggleFavoritosVehiculos, toggleInformacionElemento, informacionElemento }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider }
export default UserContext;