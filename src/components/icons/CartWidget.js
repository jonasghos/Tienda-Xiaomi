import React, { useContext } from 'react'
import basket from '../../images/basket_buy.png'
import { CartContext } from '../cartContext/CartContext'


export const CartWidget = () => {

    const {totalCount} = useContext(CartContext)
    return (
        <button  class="btn-basket" id = "CartWidget">
            <img src={basket} className="basket" /> 
            <span className = "count">{totalCount()}</span>
        </button>

    )
}
