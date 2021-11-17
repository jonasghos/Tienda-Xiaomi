import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import {getData} from '../../functions/getData'
import {ItemList} from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setLoading(true)
        getData()
            .then((response) => {
            setProducts(response)
            })
            .catch((error)=>{
            console.log(error)
            })
            .finally(()=>{
            setLoading(false)
            })
    }, [])

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
