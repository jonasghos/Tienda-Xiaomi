import React, { useContext, useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { CartContext } from '../cartContext/CartContext'


export const CartItem = ({title, url, price, count, id, max}) => {

    const { removeToCart } = useContext(CartContext)
    let total = count * price;

    return (
        <div>
            
            <div className="cart-item" >
                <div className = "cart-item-title">
                    <img src= {url} className = "cart-item-img"></img>
                    <h4 >{title}</h4>
                </div>
                <p className = "cart-item--price" >{price}</p>
                <p className = "cart-item--count">   
                   {count}  
                </p>    
                <p className = "cart-item--total" >{total}</p>
                <button 
                    className = "btn  delete-bin cart-item-action"
                    onClick = {()=> {removeToCart(id)}}
                >
                    <RiDeleteBin6Line className="bin" />
                </button>
            </div>
        </div>
    )
}
