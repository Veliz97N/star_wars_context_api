
import { useEffect, useState } from "react";
import PaginaPrincipal from "./PaginaPrincipal";
import Blog from "./Componentes/Blogs/Blog"
import {BrowserRouter,Route,Switch} from "react-router-dom"
function App() {
  

  return (

    <BrowserRouter>
      <Switch>
        
        <Route exact path="/" component={PaginaPrincipal} />

        <Route exact path="/blogsete" component={Blog} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
