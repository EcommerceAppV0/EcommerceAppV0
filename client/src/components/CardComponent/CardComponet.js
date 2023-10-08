import React, { useState } from 'react'
import pc from "../../assets/images/pc.png"
import "./style.css"
const CardComponet = ({ card , removeItem}) => {
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
            <i className="gg-close-o" onClick={()=>{
                removeItem(card)
            }}></i>
        </div>
    )
}

export default CardComponet