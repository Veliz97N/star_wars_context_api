import React from 'react'
import Card from "../Componentes/Tarjeta/Card_Planetas"

const ContenedorSwapiCaracteres = (props) => {
    const contenidos = props.contenido;
    return (
        <div className="container mb-2">
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="tarjetas d-flex flex-row flex-nowrap overflow-auto">
                {contenidos.results.map((resultado)=> <Card key={resultado.uid} name={resultado.name} url={resultado.url}/>)}
            </div>
        </div>
    )
}

export default ContenedorSwapiCaracteres
