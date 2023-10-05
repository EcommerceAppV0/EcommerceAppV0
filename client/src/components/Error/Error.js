import React from 'react'
import "./style.css"

const Error = () => {
    return (
        <div className="error">
            <div className="roadmap">
                <div className="account">Home</div>
                {/* line later */}
                /
                <div className="english">404 Error</div>

            </div>
            <div className="not-found-parent">
                <div className="not-found">404 Not Found</div>
                <div className="your-visited-page">
                    Your visited page not found. You may go home page.
                </div>
            </div>
            <div className='third'>
                <div className="button">
                    <div className="view-all-products">Back to home page</div>
                </div>
            </div>
        </div>
    );

}

export default Error