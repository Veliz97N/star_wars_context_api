import React from 'react'

const Blog = () => {
    return (
        <div className="container">
            <div className="cuerpo d-flex ">

                <div className="imagen">
                    <img src="./Componentes/Tarjeta/Imagenes/starwars.png" />
                </div>
                <div className="informacion">
                    ASDASDASDSADASDASD
                </div>
            </div>
                <div className="tabla">
                <table class="table">
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default Blog
