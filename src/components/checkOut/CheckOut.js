import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router'
import {CartContext} from '../../components/cartContext/CartContext'
import {collection, Timestamp, getDocs,addDoc, writeBatch, query, where, documentId} from  'firebase/firestore/lite'
import {db} from '../../firebase/configFirebase'
import Swal from 'sweetalert2'

export const CheckOut = () => {
    const {cart, totalBuy, clearCart} = useContext(CartContext)
    const navigate = useNavigate();
    const Swal = require('sweetalert2')

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email:'',
        phone : ''
    })

    const handleInputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const order = {
                buyer: { ...values },
                items : cart,
                total: totalBuy(),
                date: Timestamp.fromDate(new Date())
        } 
        
        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")


        const prodRef = collection(db, "products")
        const q = query(prodRef, where(documentId(), 'in', cart.map(el => el.id)))

        const outOfStock = []
    
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if( doc.data().stock >= itemToUpdate.count){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.count
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
            if(outOfStock.length === 0 ){
                addDoc(ordersRef, order)
                .then((res)=>{
                    batch.commit()
                    console.log(res.id)
                    Swal.fire({
                        icon: 'success',
                        title: 'Orden registrada con Exito. Nos estaremos comunicando contigo via mail para coordinar la entrega detus productos!',
                        text: `N° de Orden: ${res.id}`,
                        showConfirmButton: false,
                        timer: 3500
                      })
                      clearCart();
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos, los siguientes productos no tienen stock: ',
                    text: outOfStock.map(el => el.title).join(', ')
                  })
            }
        })

        console.log(order)
    
    }
    const handleback = ()=>{
        navigate(-1)
    }

    return (

        <>
            {cart.length === 0 
                ? <Navigate to= "/"/>
                :
                <div className='container container-form my-5 '>
                    <h2> Datos de Contacto </h2>
                    <form className='' name = 'formOrder' onSubmit={handleSubmit} > 
                        <div class="mb-3">
                            <label class="form-label" > Nombre </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Nombre"
                                autoComplete="off"
                                value={ values.name }
                                onChange={ handleInputChange }
                                id="validationDefault01"
                                required
                            />
                        </div>    
                        <div class="mb-3">
                            <label class="form-label" > Apellido  </label>
                            <input 
                                type="text"
                                name = "lastname"
                                class="form-control" 
                                placeholder = 'Apellido'
                                autoComplete="off"
                                value = {values.lastname}
                                onChange={handleInputChange}
                                id="validationDefault01"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" > Email  </label>
                            <input 
                                onChange={handleInputChange}
                                class="form-control" 
                                type="email" 
                                placeholder = 'Email' 
                                id="validationDefaultUsername"  
                                aria-describedby="inputGroupPrepend2" 
                                required
                                name = 'email'
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" > Telefono  </label>
                            <input 
                                type="text"
                                name = "phone"
                                class="form-control" 
                                placeholder = 'Telefono'
                                autoComplete="off"
                                value = {values.phone}
                                onChange={handleInputChange}
                                id="validationDefault01"
                                required
                            />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label">Quiero recibir ofertas y novedades por mail</label>
                        </div>
                        <br/>
                        <button  type="submit" class="btn btn-dark mb-3"  > Enviar </button>
                        <button  type="submit" class="btn btn-primary mb-3"  onClick={handleback} >Volver </button>

                    </form>

                </div>
            }   
        </>
    )
}
