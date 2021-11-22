import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Item = ({prod}) => {


    const stockMax = prod.stock;
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
        <div class="card" key={prod.id} >
            <img src={prod.url} class="card-img-top img" alt="..."/>
            <div class="card-body">
                <h4 class="card-title">{prod.title}</h4>
                <h5>$ {prod.price}</h5>
                <p><a href="#" class ="subtract" onClick={subtractStock}>-</a> <span class="stock">{stock}</span> <a href="#" onClick={addStock} class="add">+</a></p>
                <div>
                    <button type="button" class="btnAdd btn btn-outline-dark">Añadir al Carrito</button>
                    <Link to={`/detail/${prod.id}`}class="btnAdd btn btn-outline-dark">Mas Info</Link>
                </div>
            </div>
        </div>
    )
}
