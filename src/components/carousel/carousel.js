import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase/configFirebase'



export const Carousel = () => {

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
                if (!catId){
                    setProducts(items)
                } else {
                    setProducts(items.filter(prod => prod.category === catId))
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
                    ? <Loader/>
                    : <ItemListll products = {products}/>
            }
        </>
    )
}
