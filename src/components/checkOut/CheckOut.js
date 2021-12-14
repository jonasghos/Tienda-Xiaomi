import React, { useContext, useState } from 'react'
import {CartContext} from '../../components/cartContext/CartContext'

export const CheckOut = () => {
    const {cart, totalBuy} = useContext(CartContext)

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

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: { ...values },
            items : cart,
            total: totalBuy()
        } 
        console.log(order)
        
    }
    return (
        <div className='container container-form my-5 '>
            <h2> Datos de Contacto </h2>
            <form className='' onSubmit={handleSubmit} > 
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
                        type="text"
                        id="validationDefaultUsername"  
                        aria-describedby="inputGroupPrepend2" 
                        required
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

            </form>

        </div>
    )
}
