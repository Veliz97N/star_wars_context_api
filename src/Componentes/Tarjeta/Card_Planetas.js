import React,{useEffect, useState, useContext} from 'react'
import UserContext from "../../UserContext/UserContext"
import { Link } from "react-router-dom";

const CardPlanetas = (props) => {
  
  const {user, toggleFavoritosPlanetas,toggleInformacionElemento}= useContext(UserContext);
  const [planetas, setPlanetas] = useState(null)
  const name = props.name
  const url = props.url
  const isFavorite = user.favoritePlanetas.includes(name)

  useEffect(() =>{    
    fetch(url)
    .then(response=>response.json())
    .then(data=>setPlanetas(data.result.properties))
  },[])


    return (
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          { planetas && 
            <>
              <p>Population: {planetas.population}</p>
              <p>Terrain: {planetas.terrain}</p>              
           </>
          }
          <div className="AddFavoritesLearnMore mt-5">
            <Link to="/planetas" onClick={()=>toggleInformacionElemento(planetas)} className="btn btn-outline-primary">Learn More!</Link>
            <a onClick={()=>toggleFavoritosPlanetas(name)}  className="btn btn-outline-warning">{isFavorite?<i className="fas fa-heart"></i> :<i className="far fa-heart"></i>}</a>
          </div>
        </div>
    )
}

export default CardPlanetas
