import React, {createContext, useState} from 'react'

export const CartContext =  createContext()

// Custom Provider

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    console.log(cart)
  
    const addToCart = (item) => {
      setCart( [...cart, item] ) 
    }
  
    const removeToCart =  (id) => { 
      setCart( cart.filter(prod => prod.id !== id))
    }
  
    const clearCart = () => {
      setCart( [] ) 
    }
  
    const isInCart = (id) =>{
      return cart.some( prod => prod.id == id)
    }
  
    const totalCount = () =>{
      return cart.reduce((acc, prod) => acc + prod.count, 0)
    }
    const totalBuy = () =>{
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    }

    return (
        <CartContext.Provider value= {{
            cart,
            addToCart,
            removeToCart,
            clearCart,
            isInCart,
            totalCount,
            totalBuy
          }}> 
            {children}
        </CartContext.Provider>
    )

}

