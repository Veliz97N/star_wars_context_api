import React,{useEffect, useState} from 'react'

const CardCaracteres = (props) => {
  
  const [planetas, setPlanetas] = useState(null)
  const name = props.name
  const url = props.url
  const [isFavorite,setFavorite]=useState(false)
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
            <a href="#" className="btn btn-outline-primary">Learn More!</a>
            <a href="#" onClick={()=>setFavorite(!isFavorite)}  className="btn btn-outline-warning">{isFavorite?<i class="fas fa-heart"></i> :<i class="far fa-heart"></i>}</a>
          </div>
        </div>
    )
}

export default CardCaracteres
