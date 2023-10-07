import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="error">
            <div className="roadmap-error p-4">
                <div className="account">Home</div>
                /
                <div className="english">404 Error</div>
            </div>
            <div className="not-found-parent">
                <div className="not-found">404 Not Found</div>
                <div className="your-visited-page">
                    Your visited page not found. You may go home page.
                </div>
            </div>
            <div className='third-error'>
                <div className="button-error">
                    <div className="view-all-products" onClick={() => navigate("/home")}>Back to home page</div>
                </div>
            </div>
        </div>
    );

}

export default Error