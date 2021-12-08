
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {ItemList} from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase/configFirebase'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    const {catId} = useParams();

    useEffect(()=>{
        setLoading(true)
        const productsRef = collection(db, 'products')
        getDocs(productsRef)
            .then((collection)=> {
                const items = collection.docs.map((doc) => ({
                    id : doc.id,
                    ...doc.data()
                }))
                console.log(items)
                setProducts(items)
            })
            .finally(()=>{
                setLoading(false)
            })



        /*Firebase */




       /*  getData()
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
            }) */
    }, [catId])

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList products = {products}/>
            }
        </>
    )
}
