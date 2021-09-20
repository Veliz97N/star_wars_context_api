import React,{useContext, useState} from 'react'
import UserContext from "../UserContext/UserContext"
import { Dropdown,DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Navbar = (props) => {

    const {user}= useContext(UserContext);
    

    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen= () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <span className="navbar-brand">
                    <h2>Bienvenido {user.name}</h2>
                </span>
                <Dropdown isOpen={isOpen} toggle={toggleIsOpen}>
                    <DropdownToggle>
                        Favoritos
                    </DropdownToggle>
                    <DropdownMenu>
                        {user.favoriteCaracteres.map((valor)=>
                            <DropdownItem>
                                {valor}
                            </DropdownItem>   
                        )}  
                        {user.favoriteVehiculos.map((valor)=>
                            <DropdownItem>
                                {valor}
                            </DropdownItem>   
                        )}  
                        {user.favoritePlanetas.map((valor)=>
                            <DropdownItem>
                                {valor}
                            </DropdownItem>   
                        )}  
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    )
}

export default Navbar
