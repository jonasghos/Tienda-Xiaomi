import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { CartContext } from '../cartContext/CartContext'


export const CartWidget = () => {

    const {totalCount} = useContext(CartContext)
    return (
        <button  class="btn-basket" id = "CartWidget">
            <BsCart4 className='logo-cart'/>
            <span className = "count">{totalCount()}</span>
        </button>

    )
}
