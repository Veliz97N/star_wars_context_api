import React, {createContext, useState} from 'react';

const UserContext=createContext();

const initialUser = {id:1,
                     name: "Nicolas", 
                     favoriteCaracteres:[], 
                     favoriteVehiculos:[], 
                     favoritePlanetas:[]}

const UserProvider = ({children}) =>{
    const [user,setUser]=useState(initialUser)

    const toggleFavoritosCaracteres = (caracterID) =>{
        const isFavorite=user.favoriteCaracteres.includes(caracterID)
        const favoriteCaracteres = isFavorite 
            ? user.favoriteCaracteres.filter(favCar => favCar!==caracterID)
            : [...user.favoriteCaracteres, caracterID]
        setUser({...user,favoriteCaracteres})
    }
    const toggleFavoritosPlanetas = (planetaID) =>{
        const isFavorite=user.favoritePlanetas.includes(planetaID)
        const favoritePlanetas = isFavorite 
            ? user.favoritePlanetas.filter(favCar => favCar!==planetaID)
            : [...user.favoritePlanetas, planetaID]
        setUser({...user,favoritePlanetas})
    }
    const toggleFavoritosVehiculos = (vehiculoID) =>{
        const isFavorite=user.favoriteVehiculos.includes(vehiculoID)
        const favoriteVehiculos = isFavorite 
            ? user.favoriteVehiculos.filter(favCar => favCar!==vehiculoID)
            : [...user.favoriteVehiculos, vehiculoID]
        setUser({...user,favoriteVehiculos})
    }

    const data={user, toggleFavoritosCaracteres, toggleFavoritosPlanetas, toggleFavoritosVehiculos }

    return(
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
    )
}
export {UserProvider}
export default UserContext;