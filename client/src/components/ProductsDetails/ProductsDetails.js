import React from "react";
import "./style.css";

const ProductsDetails = ({ prod }) => {
  const fourImages = new Array(4).fill("photo");
  // const rates = new Array(+prod.rate).fill("rate");
  const rates = new Array(4).fill("rate");
  const greys = new Array(5 - rates.length).fill("rate");

  return (
    <div className="product-details">
      <div className="product-path">Account / prod name</div>
      <div className="main-product-details">
        <div className="product-images">
          {fourImages.map((img, i) => (
            <div className="side-image" key={i}></div>
          ))}
        </div>
        <div className="product-main-image">
          <img src="" alt=""></img>
        </div>
        <div className="product-information">
          <h2>Havic HV G-92 Gamepad</h2>
          <div className="ratings">
            {rates.map((e, i) => (
              <i
                key={i}
                className="fa-solid fa-star fa-sm"
                style={{ color: " #FFAD03" }}
              ></i>
            ))}
            {greys.map((e, i) => (
              <i
                key={i}
                className="fa-solid fa-star fa-sm"
                style={{ color: " #BFBFBF" }}
              ></i>
            ))}
            <span> (150 Reviews)</span>|<span id="status"> in stock</span>
          </div>
          <h2>$192.00</h2>
          <p className="product-descrition">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr></hr>
          <div className="colours">
            <h3>Colours:</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#E07575" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="6" fill="#A0BCE0" />
              <circle cx="10" cy="10" r="9" stroke="black" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
