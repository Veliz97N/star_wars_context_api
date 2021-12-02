import React,{useEffect, useState, useContext} from 'react'
import UserContext from "../../UserContext/UserContext"
import { Link } from "react-router-dom";

const CardVehiculos = (props) => {
  
  const {user, toggleFavoritosVehiculos, toggleInformacionElemento}= useContext(UserContext);

  const [vehiculos, setVehiculos] = useState(null)
  const name = props.name
  const url = props.url
  const isFavorite = user.favoriteVehiculos.includes(name)

  useEffect(() =>{    
    fetch(url)
    .then(response=>response.json())
    .then(data=>setVehiculos(data.result.properties))
  },[])


    return (
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          { vehiculos && 
            <>
              <p className="mb-1">Model: {vehiculos.model}</p>
              <p className="mb-1">Manufacturer: {vehiculos.manufacturer}</p>
           </>
          }
          <div className="AddFavoritesLearnMore mt-5">
            {vehiculos? <Link to="/vehiculos" onClick={()=>toggleInformacionElemento(vehiculos)} className="btn btn-outline-primary">Learn More!</Link> :<button className="btn btn-outline-primary"> Cargando Contenido </button>}
            
            <a  onClick={()=>toggleFavoritosVehiculos(name)}  className="btn btn-outline-warning">{isFavorite?<i className="fas fa-heart"></i> :<i className="far fa-heart"></i>}</a>
          </div>
        </div>
    )
}

export default CardVehiculos
