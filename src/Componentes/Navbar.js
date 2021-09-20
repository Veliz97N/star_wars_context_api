import React,{useContext, useState} from 'react'
import UserContext from "../UserContext/UserContext"
import { Dropdown,DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
const Navbar = (props) => {

    const {user, toggleFavoritosCaracteres}= useContext(UserContext);
    

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen= () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <span className="navbar-brand">
                <Link to="/" ><i className="fab fa-jedi-order fa-3x"></i></Link>
                </span>
                <Dropdown isOpen={isOpen} toggle={toggleIsOpen}>
                    <DropdownToggle>
                        <div className="contenedor-Favoritos">
                            <div className="favoritos">
                                Favoritos 
                            </div>
                            <div className="cantidad-favoritos">
                                {user.favoriteCaracteres.length+user.favoriteVehiculos.length+user.favoritePlanetas.length}
                            </div>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu>
                        {user.favoriteCaracteres.map((valor)=>
                            <DropdownItem key={valor} >
                                <div className="contenedor-global-favoritos">
                                    <div className="contendio-agregado-favoritos">
                                        {valor}
                                    </div>
                                    <div className="contenedor-eliminar-favoritos">
                                        <i className="far fa-trash-alt" onClick={()=>toggleFavoritosCaracteres(valor)}></i>
                                    </div>
                                </div>
                            </DropdownItem>   
                        )}  
                        {user.favoriteVehiculos.map((valor)=>
                            <DropdownItem key={valor}>
                                <div className="contenedor-global-favoritos">
                                    <div className="contendio-agregado-favoritos">
                                        {valor}
                                    </div>
                                    <div className="contenedor-eliminar-favoritos">
                                        <i className="far fa-trash-alt" onClick={()=>toggleFavoritosCaracteres(valor)}></i>
                                    </div>
                                </div>
                            </DropdownItem>   
                        )}  
                        {user.favoritePlanetas.map((valor)=>
                            <DropdownItem key={valor}>
                                <div className="contenedor-global-favoritos">
                                    <div className="contendio-agregado-favoritos">
                                        {valor}
                                    </div>
                                    <div className="contenedor-eliminar-favoritos">
                                        <i className="far fa-trash-alt" onClick={()=>toggleFavoritosCaracteres(valor)} ></i>
                                    </div>
                                </div>
                            </DropdownItem>   
                        )}  
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    )
}

export default Navbar
