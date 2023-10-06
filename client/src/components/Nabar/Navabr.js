import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./style.css"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../slicers/userSlicer'
import { useNavigate } from 'react-router-dom';

const Navabr = () => {
    const { loggedIn } = useSelector((state) => state.value)
    console.log(loggedIn);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        // then will be changed 
        navigate("/login")
    }




    return (
        <>
            <div className='navbar-container'>
                <div className='logo'>Exclusive</div>
                <div className='tabs'>
                    <div className='link'
                        onClick={() => navigate("/home")}
                    >Home</div>
                    <div className='link'
                        onClick={() => navigate("/contact")}
                    >Contact</div>
                    <div className='link'
                        onClick={() => navigate("/about")}
                    >About</div>
                    <div className='link'
                        onClick={() => navigate("/signup")}
                    >Sign Up</div>
                </div>
                <div className='frame'>
                    <div className='search-bar'>
                        <input className='search' type='text' placeholder='What are you looking for?' />
                        <svg className="search-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='icon'>
                        {/* this will be the like buuton and this will be hideed depeidng on user */}
                        {loggedIn && <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32" fill="none">
                            <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        {/* this will be the Cart buuton and this will be hideed  depending on user*/}

                        {loggedIn && <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 32 32" fill="none">
                            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 5H7L10 22H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        {loggedIn &&
                            <DropdownButton
                                style={{ width: "20px", backgroundColor: "none" }}
                                // as={ButtonGroup}
                                // key="primary"
                                // id='dropdown-button-drop-start'
                                drop='start'
                                variant="light"
                                title={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 32 32" fill="none">
                                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>}
                            >
                                <Dropdown.Item onClick={() => { navigate("/account") }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Manage My Account
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 20 22" fill="none">
                                        <path d="M1 5.3V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H18C18.2652 20.5 18.5196 20.3946 18.7071 20.2071C18.8946 20.0196 19 19.7652 19 19.5V5.3H1Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M19 5.3L16.1665 1.5H3.8335L1 5.3M13.7775 8.6C13.7775 10.699 12.0865 12.4 10 12.4C7.9135 12.4 6.222 10.699 6.222 8.6" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    My Order

                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_2833_424)">
                                            <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <circle cx="12" cy="12" r="11.25" stroke="white" stroke-width="1.5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2833_424">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    My Cancellations
                                </Dropdown.Item>
                                {/* <Dropdown.Divider /> */}
                                <Dropdown.Item>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z" stroke="#FAFAFA" stroke-width="1.5" />
                                    </svg>
                                    My Reviews
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => handleLogout()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Logout
                                </Dropdown.Item>
                            </DropdownButton>
                        }
                    </div>
                </div>
            </div >
            <hr className='line'></hr>
        </>
    )
}

export default Navabr