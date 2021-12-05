import React, { useContext } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { CartContext } from '../cartContext/CartContext'

export const CartItem = ({title, url, price, count, id}) => {

    const {removeToCart} = useContext(CartContext)

    return (
        <div className="cart-item" >
            <img src= {url} className = "cart-item-img"></img>
            <h4 className = "cart-item-title">{title}</h4>
            <p className = "cart-item-price" >Precio: $ {price}</p>
            <p className = "cart-item-count">Cantidad: {count}</p>
            <button 
                className = "btn btn-dark delete-bin"
                onClick = {()=> {removeToCart(id)}}
            >
                <RiDeleteBin6Line />
            </button>
        </div>
    )
}
