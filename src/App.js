import Navbar from "./Componentes/Navbar"
import ContenedorSwapiCaracteres from "./Swappi/ContenedorSwapiCaracteres"
import ContenedorSwapiVehiculos from "./Swappi/ContenedorSwapiVehiculos"
import ContenedorSwapiPlanetas from "./Swappi/ContenedorSwapiPlanetas"
import {useEffect,useState}  from "react"

function App() {
  const [caracteres, setCaracteres] = useState(null)
  const [vehiculos, setVehiculos] = useState(null)
  const [planetas, setPlanetas] = useState(null)

  useEffect(()=>{ //ACA SE EJECUTA EL FETCH SOLO AL INICIO, OBTENIENDO ASI CARACTERES, VEHICULOS Y PLANETAS
      getCaracteres();
      getVehiculos();
      getPlanetas();
  },[])

  const getCaracteres = ()=>{ //SE HACE FETCH A LOS CARACTERES
    let url="https://www.swapi.tech/api/people"
    fetch(url)
    .then(response=>response.json())
    .then(data=>setCaracteres(data))
    
  }
  const getVehiculos = () =>{ //SE HACE FETCH A LOS VEHICULOS
    let url="https://www.swapi.tech/api/starships"
    fetch(url)
    .then(response=>response.json())
    .then(data=>setVehiculos(data))
  }
  const getPlanetas =() =>{ //SE HACE FETCH A LOS PLANETAS
    let url="https://www.swapi.tech/api/planets"
    fetch(url)
    .then(response=>response.json())
    .then(data=>setPlanetas(data))
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {caracteres && <ContenedorSwapiCaracteres titulo={"Caracteres"} contenido = {caracteres}/>}
      {vehiculos && <ContenedorSwapiVehiculos titulo={"Vehiculos"} contenido = {vehiculos}/>}
      {planetas && <ContenedorSwapiPlanetas titulo={"Planetas"} contenido = {planetas}/>}

    </div>
  );
}

export default App;
