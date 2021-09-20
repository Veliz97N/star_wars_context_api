import React, { useEffect, useState, useContext } from 'react'
import UserContext from "../../UserContext/UserContext"

const BlogPlanetas = () => {

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
                            <th scope="col">Climate</th>
                            <th scope="col">Population</th>
                            <th scope="col">Orbital Period</th>
                            <th scope="col">Rotation Period</th>
                            <th scope="col">Diameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{informacionElemento.name}</td>
                            <td>{informacionElemento.climate}</td>
                            <td>{informacionElemento.population}</td>
                            <td>{informacionElemento.orbital_period}</td>
                            <td>{informacionElemento.rotation_period}</td>
                            <td>{informacionElemento.diameter}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BlogPlanetas
