import React from 'react'
import { useState } from 'react'
const OnChangeEx = () => {
    const[name, setName] = useState('Guest');
    const[quantity, setQuantity] = useState('');
    const[comment, setComment] = useState('');
    const[payment, setPayment] = useState('Cash');
    const[shipping, setShipping] = useState('Standard');


    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
        </select>
        <p>Payment Method: {payment}</p>

        <input type="radio" value="Standard" checked={shipping === 'Standard'} onChange={handleShippingChange}/> Standard
        <input type="radio" value="Express" checked={shipping === 'Express'} onChange={handleShippingChange}/> Express
        <p>Shipping Method: {shipping}</p>
    </div>
  )
}

export default OnChangeEx

