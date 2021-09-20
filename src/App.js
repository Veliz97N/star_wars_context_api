import { UserProvider } from "../src/UserContext/UserContext"
import PaginaPrincipal from "./PaginaPrincipal";
import BlogCaracteres from "./Componentes/Blogs/BlogCaracteres"
import BlogPlanetas from "./Componentes/Blogs/BlogPlanetas"
import BlogVehiculos from "./Componentes/Blogs/BlogVehiculos"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./Componentes/Navbar"

function App() {


  return (
    <UserProvider>
      <BrowserRouter>
      {<Navbar ></Navbar>}
        <Switch>

          <Route exact path="/" component={PaginaPrincipal} />

          <Route exact path="/caracteres" component={BlogCaracteres} />
          <Route exact path="/planetas" component={BlogPlanetas} />
          <Route exact path="/vehiculos" component={BlogVehiculos} />

        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
