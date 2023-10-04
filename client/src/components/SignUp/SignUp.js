import React, { useEffect, useState } from 'react'
import "./style.css"
import phoneImage from "../../assets/images/dl.beatsnoop 1.png"
import { useRegisterMutation } from '../../slicers/userApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../slicers/userSlicer'
const SignUp = () => {
    const [register, { isLoading }] = useRegisterMutation()
    const { user } = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //redirect here if the user exists
    useEffect(() => {
        if (user) {
            navigate('/login')
        }
    }, [navigate, user])
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        type: "client"
    })
    const handleFom = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (body) => {
        try {
            const res = await register(body).unwrap()
            console.log(res);
            const { id, email, name, type } = res.result
            dispatch(setUser({ id, email, name, type }))
            navigate('/login')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='signup-container'>
            <div className='frame1'>
                <img src={phoneImage} alt='phones' />
            </div>
            <div className='frame2'>
                <div className='titles'>
                    <h1 className='title1'>Create an account</h1>
                    <h1 className='title2'>Enter your details below</h1>
                </div>
                <div className='form-container'>
                    <div className='sub-form-container'>
                        <input
                            onChange={(e) => handleFom(e)}
                            name='name'
                            className='name' placeholder='Name' />
                        <input
                            onChange={(e) => handleFom(e)}
                            name='email'
                            className='mail' placeholder='Email or Phone Number' />
                        <input
                            onChange={(e) => handleFom(e)}
                            name='password'
                            type='password'
                            className='password' placeholder='Password' />
                    </div>
                    <div className='sub-form-container2'>
                        <button className='btn-add'
                            onClick={() => {
                                handleSubmit(form)

                            }}
                        >Create Account</button>
                        <div className='wrap' >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2574_2219)">
                                    <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                                    <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                                    <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                                    <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2574_2219">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Sing up With Google</p>
                        </div>
                        <div className='credentinals'>
                            <span>Already have account ?</span>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <span >Log in</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="2" viewBox="0 0 48 2" fill="none">
                                    <g opacity="0.5">
                                        <line x1="0.5" y1="1" x2="47.5" y2="1" stroke="black" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        {/* here we will add some toast for loading */}
                        {isLoading && <h1>waiting....</h1>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp