import React, { useContext } from 'react'
import { CartContext } from '../cartContext/CartContext'

export const CartView = () => {

    const {cart} = useContext(CartContext)
    return (
        <div className = "cart-conatiner">
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
            <div>
                <button>Vaciar Carrito</button>
            </div>
        </div>
    )
}
