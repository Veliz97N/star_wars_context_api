import React, { useEffect, useState, useContext } from 'react'
import UserContext from "../../UserContext/UserContext"

const BlogPlanetas = () => {

    const { informacionElemento } = useContext(UserContext);
    console.log(informacionElemento)
    const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ante nunc, tincidunt eu nibh nec, malesuada iaculis nisi.Sed hendrerit urna nisl, non viverra elit rutrum in.Nulla fermentum scelerisque orci.Vestibulum semper odio sit amet mi ultricies, sit amet aliquam est sodales.Aliquam imperdiet semper semper.Suspendisse sodales nulla ut vestibulum mollis.Aliquam erat volutpat.In hac habitasse platea dictumst.Nunc pulvinar nunc faucibus est interdum, et hendrerit sapien                     condimentum.Mauris pharetra odio quis nisi dignissim tempor.Nam laoreet dolor vitae ex condimentum, sit amet imperdiet metus auctor.Ut ultrices facilisis est, nec congue orci fermentum et.Proin varius in velit sit amet posuere.Donec eros lectus, laoreet non metus eu, scelerisque tempor nunc.Mauris interdum dictum lorem, eget rutrum massa accumsan eu Nunc sit amet purus vitae est malesuada ultricies.Pellentesque ipsum odio, sodales sed dui a, condimentum interdum augue.Quisque ligula felis, volutpat a est id, mollis tincidunt orci.Duis accumsan elit nec ullamcorper ultrices.Etiam tincidunt fermentum purus ullamcorper vulputate.Nulla bibendum vestibulum leo, vitae molestie magna feugiat vestibulum.Nam faucibus venenatis tincidunt"
    return (
        <div className="container">
            <div className="cuerpo">

                <div className="informacion col-md-12 mb-5">
                    <h2>{informacionElemento.name}</h2>
                    {Lorem}
                </div>
            </div>
            <div className="tabla">
                <table className="table text-danger">
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
