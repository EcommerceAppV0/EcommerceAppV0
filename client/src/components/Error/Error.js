import React from 'react'
import "./style.css"

const Error = () => {
    return (
        <div className="error">
            <img className="error-child" alt="" src="/line-3.svg" />
            <div className="roadmap">
                <div className="account">Home</div>
                <img className="roadmap-child" alt="" src="/line-13.svg" />
                <div className="english">404 Error</div>
                <img className="roadmap-item" alt="" src="/line-14.svg" />
                <div className="nothing1">Nothing</div>
                <img className="roadmap-item" alt="" src="/line-15.svg" />
                <div className="nothing1">Nothing</div>
                <img className="roadmap-item" alt="" src="/line-16.svg" />
                <div className="nothing1">Nothing</div>
            </div>
            <div className="not-found-parent">
                <div className="not-found">404 Not Found</div>
                <div className="your-visited-page">
                    Your visited page not found. You may go home page.
                </div>
            </div>
            <div className="button">
                <div className="view-all-products">Back to home page</div>
            </div>
        </div>
    );

}

export default Error