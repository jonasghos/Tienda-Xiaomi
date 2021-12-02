import React, {useState, useContext}  from 'react'
import { useNavigate } from 'react-router'
import { ItemCount } from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartContext/CartContext';



export const ItemDetail = ({id,url, title, description, price, stock}) => {

    const {addToCart, isInCart} = useContext(CartContext)



    const navigate = useNavigate();
    const [count, setCount ] = useState(0);


    const handleback = ()=>{
        navigate(-1)
    }
    
    const handlebackHome = ()=>{
        navigate('/')
    }
    const handleAdd = () =>{
        if(count > 0 ){
            addToCart({
                id, 
                title,
                price,
                url,
                count
            })
            }
        }
    

    return (
        <div class="itemDetail">
            <img class="img-detail"src={url} />
            <br/>
            <h2>{title}</h2>
            <h3>Precio: ${price}</h3>
            <h4>Especificaciones</h4>
            <p>{description}</p>

            {
                !isInCart(id)
                ?    <ItemCount 
                        max = {stock} 
                        count = {count} 
                        setCount = {setCount}
                        handleAdd = {handleAdd}

                    />

                : <Link to='/cart' class="btnAdd btn btn-outline-success"> Finalizar compra </Link>
            }
            <button to="" class="btnAdd btn btn-outline-dark" onClick={handleback}>Volver </button>      
            <button to="" class="btnAdd btn btn-outline-dark" onClick={handlebackHome}>Volver al Inicio</button>     
        </div>
    )
}
