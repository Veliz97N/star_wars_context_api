import React,{useEffect, useState, useContext} from 'react'
import UserContext from "../../UserContext/UserContext"

const CardCaracteres = (props) => {
  
  const {user, toggleFavoritosCaracteres}= useContext(UserContext);

  const [caracteristicas, setCaracteristicas] = useState(null)
  const name = props.name
  const url = props.url
  const isFavorite = user.favoriteCaracteres.includes(name)

  useEffect(() =>{    
    fetch(url)
    .then(response=>response.json())
    .then(data=>setCaracteristicas(data.result.properties))
  },[])


    return (
      <div className="card-body">
          <h5 className="card-title">{name}</h5>
          { caracteristicas && 
            <>
              <p className="mb-1">Gender: {caracteristicas.gender}</p>
              <p className="mb-1">Hair Color: {caracteristicas.hair_color}</p>
              <p className="mb-1">Eye: {caracteristicas.eye_color}</p>
           </>
          }
          <div className="AddFavoritesLearnMore mt-5">
            <a href="/blog" className="btn btn-outline-primary">Learn More!</a>
            <a href="#" onClick={()=>toggleFavoritosCaracteres(name)}  className="btn btn-outline-warning">{isFavorite?<i className="fas fa-heart"></i> :<i className="far fa-heart"></i>}</a>
          </div>
      </div>
    )
}

export default CardCaracteres
