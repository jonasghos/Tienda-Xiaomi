import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {ItemDetail} from '../itemDetailContainer/ItemDetail'
import { Loader } from '../Loader/Loader'
import { doc, getDoc, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase/configFirebase'

export const ItemDetailContainer = () => {

    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false);
    const {itemId} = useParams() 
    

    useEffect(()=>{
        setLoading(true)
        const productsRef = collection(db, 'products')

        const docRef = doc(productsRef , itemId)
        getDoc(docRef)
            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })


    }, [])

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemDetail {...item}/>
            }
        </>
    )
}
