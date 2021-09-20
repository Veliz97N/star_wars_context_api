
import ContenedorSwapiCaracteres from "./Swappi/ContenedorSwapiCaracteres"
import ContenedorSwapiVehiculos from "./Swappi/ContenedorSwapiVehiculos"
import ContenedorSwapiPlanetas from "./Swappi/ContenedorSwapiPlanetas"

import {Caracteres} from "./Fetch/Caracteres"
import {Planetas} from "./Fetch/Planetas"
import {Vehiculos} from "./Fetch/Vehiculos"

function PaginaPrincipal() {

  const caracteres= Caracteres();
  const vehiculos = Vehiculos();
  const planetas = Planetas();

  return (
    <div >        
        {caracteres && <ContenedorSwapiCaracteres titulo={"Caracteres"} contenido={caracteres} />}
        {vehiculos && <ContenedorSwapiVehiculos titulo={"Vehiculos"} contenido={vehiculos} />}
        {planetas && <ContenedorSwapiPlanetas titulo={"Planetas"} contenido={planetas} />}
    </div>
  );
}

export default PaginaPrincipal;