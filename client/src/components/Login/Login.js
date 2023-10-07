import React, { useState, useEffect } from 'react'
import "./style.css"
import Spinner from 'react-bootstrap/Spinner';
import phoneImage from "../../assets/images/dl.beatsnoop 1.png"
// import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../slicers/userApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedIn, setUser } from "../../slicers/userSlicer"
import { toast } from "react-toastify"

const Login = () => {
    const { user } = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [login, { isLoading, isError }] = useLoginMutation()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleFom = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (body) => {
        try {
            const { token, email, name, type, userId, cartlist, lastName, wishlist } = await login(body).unwrap()
            dispatch(setLoggedIn({ token, loggedIn: true }))
            dispatch(setUser({ email, name, type, userId, cartlist, lastName, wishlist }))
            toast.success(`Welcome ${name}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/home")
        } catch (error) {
            toast.error(error.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

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
                    {isLoading &&
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                            <Spinner animation="border" variant="dark" />
                            <h1> loading..</h1>
                        </div>
                    }

                    {/* after we will add some Toasts for Ux Thank you  */}
                </div>
            </div>

        </div>
    )
}

export default Login