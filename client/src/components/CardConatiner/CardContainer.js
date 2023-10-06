import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardContainer = ({ ispromo, prod }) => {
    const [click, setClicked] = useState(true)
    const navigate = useNavigate()
    const rates = new Array(+prod.rate).fill("rate")
    const greys = new Array(5 - rates.length).fill("rate")
    return (
        <div className='card-container'>
            <div className='card-images'>
                <div className='promtion-div-wish'>
                    <button style={{ visibility: !ispromo ? "hidden" : "block" }}>-{prod.promo}%</button>
                    <i
                        onClick={() =>
                            // then Changed
                            setClicked(!click)
                        }
                        className={click ? "fa-regular fa-heart fa-lg" : "fa-solid fa-heart fa-lg"} style={{ color: "#DB4444" }}></i>
                </div>
                <i className="fa-regular fa-eye fa-lg"
                    onClick={() => navigate('/productdetails')}
                    style={{ color: "black" }}></i>

                <img src={prod.images[0]} alt='product' />
            </div>
            <div className='card-infos d-flex flex-column gap-2'>
                <span>{prod.name}</span>
                <div className='d-flex gap-3 money'>
                    <span style={{ color: "#DB4444" }} >${prod.price}</span>
                    <span style={{ color: "#000", textDecorationLine: " line-through" }} >${(prod.price / (1 - prod.promo / 100)).toFixed(2)}</span>
                </div>
                <div className='d-flex gap-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        {rates.map((e, i) => <i key={i} className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>)}
                        {greys.map((e, i) => <i key={i} className="fa-solid fa-star fa-sm" style={{ color: " #BFBFBF" }}></i>)}
                        ({(Math.random() * 500).toFixed(0)})
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer