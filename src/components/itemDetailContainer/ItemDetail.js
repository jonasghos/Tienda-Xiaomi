import React  from 'react'
import { Link } from 'react-router-dom'


export const ItemDetail = ({id,url, title, description}) => {

    const handleback = ()=>{
        window.location.replace('/')
    }

    return (
        <div class="itemDetail">
            <img src={url} />
            <h2>{title}</h2>
            <h4>Especificaciones</h4>
            <p>{description}</p>
            <button class="btnAdd btn btn-outline-dark">Añadir al Carrito</button>  
            <button to="" class="btnAdd btn btn-outline-dark" onClick={handleback}>Volver</button>          
        </div>
    )
}
