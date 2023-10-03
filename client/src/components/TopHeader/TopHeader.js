import React from "react";
import "./style.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="frame">
        <p >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <div className="shopNow">ShopNow</div>
      </div>
      <div className="frame-2">
        <p className="english">English</p>
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
        </svg>
      </div>
    </div >
  )
}

export default TopHeader
