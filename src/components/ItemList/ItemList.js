import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({products}) => {
    return (
        <div className="container">
            <h2>Lista de Productos</h2>
            <hr/>
            <div className = "row">
                {products.map((prod)=>( <Item prod ={prod}/>))}
            </div>
            
        </div>
    )
}
