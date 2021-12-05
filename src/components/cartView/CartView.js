import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {cart, clearCart} = useContext(CartContext)

/*     if (cart.lenght === 0 ){
        return (
                <div className = "cart-container">
                    <h2>El carrito esta vacio</h2>
                    <hr/>
                    <Link className= "btn btn-dark"  to= "/">Volver a Productos</Link>
                </div>
        )
    }
 */
    return (
        <div className = "cart-container">
            {
                cart.length > 0 
                ? <>
                <h2>Carrito</h2>
                <hr/>
                <div className = "cart-container-tables">
                    <div className = "cart-items-container">
                        <section className = "cart-items">
                            {
                                cart.map((prod) => <CartItem {...prod}/>)
                            }
                        </section>   
                        <div className="btn-remove">
                            <button type= "button" className= "btn btn-dark" onClick = {clearCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                    <div className = "cart-order">
                            <h4>Resumen</h4>
                            <div className = "order-total">
                                
                            </div>
                            <button class="btn btn-outline-success btn-order"> Finalizar compra </button>
                        </div>
                    </div>
                </>
                : <>
                    <h2>El carrito esta vacio</h2>
                    <hr/>
                    <Link className= "btn btn-dark"  to= "/">Volver a Productos</Link>
                </>
            }


        </div>
    )
}
