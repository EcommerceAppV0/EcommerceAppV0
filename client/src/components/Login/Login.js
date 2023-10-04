import React, { useState, useEffect } from 'react'
import "./style.css"
import phoneImage from "../../assets/images/dl.beatsnoop 1.png"
// import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../slicers/userApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedIn } from "../../slicers/userSlicer"
const Login = () => {
    const { user } = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleFom = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (body) => {
        try {
            const { token } = await login(body).unwrap()
            // then navigate
            dispatch(setLoggedIn({ token, loggedIn: true }))
            // then go to contact 
            //will be changed after
            navigate("/about")
        } catch (error) {
            console.log(error);
        }
    }
    //after will be changed
    // useEffect(() => {
    //     if (user) {
    //         navigate('/contact')
    //     }
    // }, [navigate, user])

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
                        <input
                            onChange={(e) => handleFom(e)}
                            name='email'
                            className='mail'
                            placeholder='Email or Phone Number' />
                        <input
                            onChange={(e) => handleFom(e)}
                            name='password'
                            type='password'
                            className='password'
                            placeholder='Password' />
                    </div>
                    <div className='login-sub-form-container2'>
                        <button className='login-btn'
                            onClick={() => handleSubmit(form)}
                        >Log In</button>
                        <div>Forget Password?</div>
                    </div>
                    {/* here we will add some toast for loading */}
                    {isLoading && <h1>Loading....</h1>}
                </div>
            </div>

        </div>
    )
}

export default Login