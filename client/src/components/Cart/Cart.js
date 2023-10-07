import React from 'react'
import "./style.css"
import CardComponet from '../CardComponent/CardComponet'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.value)

    return (
        <div className='cart-container'>
            <div className='sub1'>
                <span className='home-sub1'
                    onClick={() => navigate('/home')}
                >Home</span>
                /
                <span className='home-sub2'>Cart</span>
            </div>
            <div className='sub2'>
                {!user.cartlist.length ?
                    <h1>No Items In The Cart Go Shop  </h1>
                    :
                    <>
                        <div className='child1'>
                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>SubTotal</span>
                        </div>
                        {user.cartlist.map((card) => <CardComponet key={card.id} card={card} />)}
                    </>
                }
                <div className='last-child'>
                    <div className='last-child1'>
                        <input
                            type='text'
                            name='coupon'
                            placeholder='Coupon Code'
                        />
                        <button>Apply Coupon</button>
                    </div>
                    <div className='last-child2'>
                        <span style={{ fontSize: "1.25rem", fontWeight: "500", lineHeight: "1.75rem" }}>Cart Total</span>
                        <div className='last-child2-title'>
                            <span>Total</span>
                            <span>Total</span>
                        </div>
                        <hr></hr>
                        <div className='last-child2-title'>
                            <span>Total</span>
                            <span>Total</span>
                        </div>
                        <hr></hr>
                        <div className='last-child2-title'>
                            <span>Total</span>
                            <span>Total</span>
                        </div>
                        <div className='last-btn-checkout'>
                            <button>Procces to chekout</button>
                        </div>




                    </div>
                </div>
                {/* after this will be onlu one compnents the cart elemnet */}
            </div>
        </div >
    )
}

export default Cart