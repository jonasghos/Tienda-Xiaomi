import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

export const CartItem = ({title, url, price, count, id}) => {


    return (
        <div className="cart-item" >
            <img src= {url} className = "cart-item-img"></img>
            <h4 className = "cart-item-title">{title}</h4>
            <p className = "cart-item-price" >Precio: $ {price}</p>
            <p className = "cart-item-count">Cantidad: {count}</p>
            <button className = "btn btn-dark delete-bin">
                <RiDeleteBin6Line />
            </button>
        </div>
    )
}
