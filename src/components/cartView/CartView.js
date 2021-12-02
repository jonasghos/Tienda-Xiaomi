import React, { useContext } from 'react'
import { CartContext } from '../cartContext/CartContext'

export const CartView = () => {

    const {cart, clearCart} = useContext(CartContext)

    return (
        <div className = "cart-container">
            <h1>Productos Agregados</h1>
            <hr/>
            <section>
                {
                    cart.map((prod) => (
                        <div className = "cart-item">
                            <h4>{prod.title}</h4>
                            <p>Precio: $ {prod.price}</p>
                            <p>Cantidad: {prod.count}</p>
                        </div>
                    )        
                    )
                }
            </section>   
            <div className="btn-remove">
                <button type= "button" className= "btn btn-dark" onClick = {clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}
