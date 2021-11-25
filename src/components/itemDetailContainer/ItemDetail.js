import React  from 'react'
import { useNavigate } from 'react-router'



export const ItemDetail = ({id,url, title, description, price}) => {

    const navigate = useNavigate();

    const handleback = ()=>{
        navigate(-1)
    }
    
    const handlebackHome = ()=>{
        navigate('/')
    }

    return (
        <div class="itemDetail">
            <img class="img-detail"src={url} />
            <h2>{title}</h2>
            <h3>Precio: ${price}</h3>
            <h4>Especificaciones</h4>
            <p>{description}</p>
            <button class="btnAdd btn btn-outline-dark">Añadir al Carrito</button>  
            <button to="" class="btnAdd btn btn-outline-dark" onClick={handleback}>Volver </button>      
            <button to="" class="btnAdd btn btn-outline-dark" onClick={handlebackHome}>Volver al Inicio</button>     
        </div>
    )
}
