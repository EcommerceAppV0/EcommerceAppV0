import React, { useState } from 'react'
import DelModal from '../CardConatiner/DelModal'
import "./style.css"
const CardComponet = ({ card, removeItem }) => {
    const [quantity, setQuantity] = useState(card.quantity)
    return (
        <div className='cart-element'>
            <div className='cart-div-img'>
                <img src={card.images[0]} alt='card-image' />
                <span>{card.name}</span>
            </div>
            <span>${card.price}</span>
            <div className='cart-input-element' >
                <input
                    onChange={(e) => setQuantity(e.target.value)}
                    name='qunatity'
                    min={0} max={30} type='number' placeholder='0' defaultValue={quantity} />
            </div>
            <span>${card.price * quantity}</span>
            <i className="gg-close-o" data-bs-toggle="modal"
                data-bs-target={`#delModal${card.id}`}></i>

            <DelModal prod={card} removeItem={removeItem} />
        </div>
    )
}

export default CardComponet