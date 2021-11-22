import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {getData} from '../../functions/getData'
import {ItemDetail} from '../itemDetailContainer/ItemDetail'

export const ItemDetailContainer = () => {

    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false);
    const {itemId} = useParams() 
    

    useEffect(()=>{
        setLoading(true)
        getData()
            .then((response) => {
            setItem(response.find(prod=> prod.id === Number(itemId)))
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
                    : <ItemDetail {...item}/>
            }
        </>
    )
}
