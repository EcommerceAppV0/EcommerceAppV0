import React from 'react'
import "./style.css"
import phoneImage from "../../assets/images/dl.beatsnoop 1.png"


const Login = () => {
    
    return (
        <div className='login-container'>
            <div className='login-frame1'>
                <img src={phoneImage} alt='phones' />
            </div>
            <div className='login-frame2'>
                <div className='titles'>
                    <h1 className='title1'>Log in to Exclusive</h1>
                    <h1 className='title2'>Enter your details below</h1>
                </div>
                <div className='login-form-container'>
                    <div className='login-sub-form-container'>
                        <input className='mail' placeholder='Email or Phone Number' />
                        <input className='password' placeholder='Password' />
                    </div>
                    <div className='login-sub-form-container2'>
                        <button className='login-btn'>Log In</button>
                        <div>Forget Password?</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login