
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {getData} from '../../functions/getData'
import {ItemList} from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    const {catId} = useParams();

    useEffect(()=>{
        setLoading(true)
        getData()
            .then((response) => {
                if (!catId){
                    setProducts(response)
                } else {
                    setProducts(response.filter(prod => prod.category === catId))
                }
                
            })
            .catch((error)=>{
            console.log(error)
            })
            .finally(()=>{
            setLoading(false)
            })
    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList products = {products}/>
            }
        </>
    )
}
