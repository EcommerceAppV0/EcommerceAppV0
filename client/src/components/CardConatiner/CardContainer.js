import React, { useState } from 'react'
import manette from "../../assets/images/manette.png"
import { useNavigate } from 'react-router-dom'

const CardContainer = ({ ispromo }) => {
    const navigate = useNavigate()
    const [click, setClicked] = useState(true)
    return (
        <div className='card-container'>
            <div className='card-images'>
                <div className='promtion-div-wish'>
                    <button style={{ visibility: !ispromo ? "hidden" : "block" }}>-40%</button>
                    <i
                        onClick={() =>
                            // then Changed
                            setClicked(!click)
                        }
                        class={click ? "fa-regular fa-heart fa-lg" : "fa-solid fa-heart fa-lg"} style={{ color: "#DB4444" }}></i>
                </div>
                <i class="fa-regular fa-eye fa-lg"
                    onClick={() => navigate('/productdetails')}
                    style={{ color: "black" }}></i>

                <img src={manette} />
            </div>
            <div className='card-infos d-flex flex-column gap-2'>
                <span>HAVIT HV-G92 Gamepad</span>
                <div className='d-flex gap-3 money'>
                    <span style={{ color: "#DB4444" }} >$120</span>
                    <span style={{ color: "#000", textDecorationLine: " line-through" }} >$160</span>
                </div>
                <div className='d-flex gap-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                        <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                        <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                        <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                        <i className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>
                        (88)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer