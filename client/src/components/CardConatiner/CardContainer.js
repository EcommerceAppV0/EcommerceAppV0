import React, { useState } from 'react'
import manette from "../../assets/images/manette.png"
import { useNavigate } from 'react-router-dom'

const CardContainer = ({ ispromo , prod}) => {
    
    
    
    
    
    
    
    
    
    
    const navigate = useNavigate()
    return (
        <div className='card-container'>
            <div className='card-images'>
                <div className='promtion-div-wish'>
                    <button style={{ visibility: !ispromo ? "hidden" : "block" }}>-40%</button>
                    <i class="fa-regular fa-heart fa-lg" style={{ color: " #0a0a0a" }}></i>
                </div>
                <i class="fa-regular fa-eye fa-lg"
                    onClick={() => navigate('/productdetails')}
                    style={{ color: "black" }}></i>

                <img src={prod.images[0]} />
            </div>
            <div className='card-infos d-flex flex-column gap-2'>
                <span>{prod.name}</span>
                <div className='d-flex gap-3 money'>
                    <span style={{ color: "#DB4444" }} >${prod.price}</span>
                    <span style={{ color: "#000", textDecorationLine: " line-through" }} >${(prod.price /(1-prod.promo/100)).toFixed(2)}</span>
                </div>
                <div className='d-flex gap-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        { rates.map((e)=><i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>)}
                        {greys.map((e)=><i className="fa-solid fa-star fa-sm" style={{ color: " #BFBFBF" }}></i>)}
                        ({(Math.random() * 500).toFixed(0)})
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer