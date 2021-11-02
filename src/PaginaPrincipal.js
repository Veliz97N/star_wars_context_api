
import ContenedorSwapiCaracteres from "./Swappi/ContenedorSwapiCaracteres"
import ContenedorSwapiVehiculos from "./Swappi/ContenedorSwapiVehiculos"
import ContenedorSwapiPlanetas from "./Swappi/ContenedorSwapiPlanetas"


import UserContext from "./UserContext/UserContext"
import { useContext } from "react/cjs/react.development"

function PaginaPrincipal() {
  const {caracteresLocal,vehiculosLocal,planetasLocal}  = useContext(UserContext);
  
  
  return (
    <div >        
        {caracteresLocal && <ContenedorSwapiCaracteres titulo={"Caracteres"} contenido={caracteresLocal}/>}
        { vehiculosLocal && <ContenedorSwapiVehiculos titulo={"Vehiculos"} contenido={vehiculosLocal} />}
        {planetasLocal && <ContenedorSwapiPlanetas titulo={"Planetas"} contenido={planetasLocal} />} 
    </div>
  );
}

export default PaginaPrincipal;