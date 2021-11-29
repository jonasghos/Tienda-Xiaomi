import React from 'react'

export const ItemCount = ({max, setCount, count, handleAdd }) => {

    
    const stockMax = max;
    
    const addCount = (e) =>{
        e.preventDefault();
        setCount(count + 1)
        if (count == stockMax){
            alert("El stock maximo es de " + stockMax + " unidades");
            setCount(stockMax)
        }   
    }
    const subtractCount = (e) =>{
        e.preventDefault();
        if (count > 0){
            setCount (count - 1)
        }
    }

    return (
        <div class= "my-3">
            <p id = "stock"> 
                <button href="#" class ="subtract btn btn-outline-dark" onClick={subtractCount}>-</button >
                <span class="stock mx-3">{count}</span> 
                <button href="#" onClick={addCount} class="add btn btn-outline-dark">+</button>
            </p>
            <button type="button" class="btnAdd btn btn-outline-dark" onClick= {handleAdd}>Añadir al Carrito</button>
        </div>
    )
}
