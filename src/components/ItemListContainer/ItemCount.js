import React, {useState} from 'react'

export const ItemCount = () => {

    const stockMax = 10;
    const stockMin = 0;
    const [stock, setStock] = useState(0);

    const addStock = () =>{
        setStock(stock + 1)
        if (stock == stockMax){
            alert("El stock maximo es de " + stockMax + " unidades");
            setStock(stockMax)
        }
    }

    const subtractStock = () =>{
        if (stock > 0){
            setStock (stock - 1)
        }
    }
    return (
        <div class="card " >
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Primer Producto</h5>
                <p><a href="#" class ="subtract" onClick={subtractStock}>-</a> <span class="stock">{stock}</span> <a href="#" onClick={addStock} class="add">+</a></p>
                <button class="btnAdd">Añadir al Carrito</button>
            </div>
        </div>
    )
}
