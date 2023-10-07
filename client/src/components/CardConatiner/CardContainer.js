import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUpdateListsMutation } from '../../slicers/userApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from "../../slicers/userSlicer"
const CardContainer = ({ prod }) => {
    const { user } = useSelector((state) => state.value)
    const [click, setClicked] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [updateLists] = useUpdateListsMutation()
    const rates = new Array(+prod.rate).fill("rate")
    const greys = new Array(5 - rates.length).fill("rate")
    const handeyeClick = async () => {
        try {
            if (!user.wishlist.includes(prod)) {
                const res = await updateLists({ wishlist: [...user.wishlist, { ...prod, inWishList: true }], id: user.userId }, user.userId).unwrap()
                dispatch(setUser({ ...user, wishlist: [...user.wishlist, { ...prod, inWishList: true }] }))
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='card-container'>
            <div className='card-images'>
                <div className='promtion-div-wish'>
                    <button style={{ backgroundColor: prod.status === "new" ? "#0F6" : "#DB4444", visibility: prod.status === "new" || prod.status === "sale" ? "block" : "hidden" }}>{prod.status === "new" ? "New" : `-${prod.promo}%`}</button>
                    <i
                        onClick={() => {
                            //  toaost and
                            setClicked(!click);
                            handeyeClick()
                        }
                        }
                        className={click ? "fa-regular fa-heart fa-lg" : "fa-solid fa-heart fa-lg"} style={{ color: "#DB4444" }}></i>
                </div>
                <i className="fa-regular fa-eye fa-lg"
                    onClick={() => {



                    }}
                    style={{ color: "black" }}></i>

                <img src={prod.images[0]} alt='product' />
            </div>
            <div className='card-infos d-flex flex-column gap-2'>
                <span>{prod.name}</span>
                <div className='d-flex gap-3 money'>
                    <span style={{ color: "#DB4444" }} >${prod.price}</span>
                    {prod.status === "sale" && < span style={{ color: "#000", textDecorationLine: " line-through" }} >${(prod.price / (1 - prod.promo / 100)).toFixed(2)}</span>}
                </div>
                <div className='d-flex gap-3'>
                    <div className='d-flex gap-2 align-items-center'>
                        {rates.map((e, i) => <i key={i} className="fa-solid fa-star fa-sm" style={{ color: " #f0f40b" }}></i>)}
                        {greys.map((e, i) => <i key={i} className="fa-solid fa-star fa-sm" style={{ color: " #BFBFBF" }}></i>)}
                        ({(Math.random() * 500).toFixed(0)})
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardContainer