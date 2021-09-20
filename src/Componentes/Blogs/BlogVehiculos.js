import React, { useEffect, useState, useContext } from 'react'
import UserContext from "../../UserContext/UserContext"

const BlogVehiculos = () => {

    const {informacionElemento}= useContext(UserContext);
    console.log(informacionElemento)
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum porttitor fermentum. Curabitur eleifend rutrum est accumsan iaculis. Nullam sed pulvinar ligula, vitae sollicitudin lacus. "
    return (
        <div className="container">
            <div className="cuerpo d-flex ">
                <div className="imagen">
                    <img src="./Componentes/Tarjeta/Imagenes/starwars.png" />
                </div>
                <div className="informacion">
                    {Lorem}
                </div>
            </div>
            <div className="tabla">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Height</th>
                            <th scope="col">Skin Color</th>
                            <th scope="col">Eye Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{informacionElemento.name}</td>
                            <td>{informacionElemento.birth_year}</td>
                            <td>{informacionElemento.gender}</td>
                            <td>{informacionElemento.height}</td>
                            <td>{informacionElemento.skin_color}</td>
                            <td>{informacionElemento.eye_color}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BlogVehiculos
