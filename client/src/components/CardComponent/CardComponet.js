import React from 'react'
import pc from "../../assets/images/pc.png"
import "./style.css"
const CardComponet = () => {
    // i will pass the props here after 
    return (
        <div className='cart-element'>
            <div className='cart-div-img'>
                <img
                    src={pc} alt='pc'></img>
                <span>LCD Monitor</span>
            </div>
            <span>$6500</span>
            <div className='cart-input-element' >
                <input min={0} max={30} type='number' placeholder='0' />
            </div>
            <span>$1000</span>
        </div>
    )
}

export default CardComponet