import React from 'react'
import "./style.css"
// import { Button } from "@mui/material"

// import delivery from "../../assets/images/delivery.png"
// import returnIcon from "../../assets/images/icon-return.png"
// import heart from "../../assets/images/heart.png"
// import eye from "../../assets/images/eye.png"
// import image57 from "../../assets/images/image-57.png"
// import image58 from "../../assets/images/image-58.png"
// import image59 from "../../assets/images/image-59.png"
// import image61 from "../../assets/images/image-61.png"
// import image63 from "../../assets/images/image-63.png"
// import product1 from "../../assets/images/product-1.png"
// import product2 from "../../assets/images/product-2.png"
// import product3 from "../../assets/images/product-3.png"
// import product4 from "../../assets/images/product-4.png"
// import star from "../../assets/images/star.png"
// import halfstar from "../../assets/images/half-star.png"
// import plus from "../../assets/images/icon-plus.png"
// import minus from "../../assets/images/icon-minus.png"
// import blue from "../../assets/images/blue.png"
// import red from "../../assets/images/red.png"
// import related from "../../assets/images/related.png"
import start from "../../assets/images/details/vector.svg"
import starthalf from "../../assets/images/details/starhalffilled.svg"
import image1 from "../../assets/images/details/image-63@2x.png"
import image2 from "../../assets/images/details/image-57@2x.png"
import image3 from "../../assets/images/details/image-58@2x.png"
import image4 from "../../assets/images/details/image-61@2x.png"
import image5 from "../../assets/images/details/image-59@2x.png"
// import line13 from "../../assets/images/details/line-13.svg"
// import line14 from "../../assets/images/details/line-14.svg"
import vector1 from "../../assets/images/details/vector1.svg"
import groupe10 from "../../assets/images/details/group-1000005935.svg"
import iconminus from "../../assets/images/details/icon-minus.png"
import frame907 from "../../assets/images/details/frame-907.svg"
import frame904 from "../../assets/images/details/frame-904.svg"
import underline1 from "../../assets/images/details/underline1.svg"
import icondelivery from "../../assets/images/details/icondelivery.svg"
import iconreturn from "../../assets/images/details/iconreturn.svg"
import iconheart from "../../assets/images/details/fill-heart.svg"
import iconeye from "../../assets/images/details/fill-eye.svg"
import g92 from "../../assets/images/details/g922500x500-1@2x.png"
import ak90 from "../../assets/images/details/ak90001500x500-1@2x.png"
import g27 from "../../assets/images/details/g27cq4500x500-1@2x.png"
import gammax from "../../assets/images/details/gammaxxl240argb1500x500-1@2x.png"


const ProductsDetails = () => {
    return (
       
      <div className="product-details-page">
      <img className="product-details-page-child" alt="" src="/line-3.svg" />
      <div className="roadmap">
        <div className="account">Account</div>
        <img className="roadmap-child" alt="" src="/line-13.svg" />
        <div className="account">Gaming</div>
        <img className="roadmap-item" alt="" src="/line-14.svg" />
        <div className="nothing1">Product</div>
        <img className="roadmap-item" alt="" src="/line-14.svg" />
        <div className="nothing1">View Cart</div>
        <img className="roadmap-child" alt="" src="/line-13.svg" />
        <div className="english">Havic HV G-92 Gamepad</div>
      </div>
      <div className="image-63-wrapper">
        <img className="image-63-icon" alt="" src={image1} />
      </div>
      <div className="image-57-wrapper">
        <img className="image-57-icon" alt="" src={image2} />
      </div>
      <div className="image-58-wrapper">
        <img className="image-58-icon" alt="" src={image3} />
      </div>
      <div className="image-61-wrapper">
        <img className="image-61-icon" alt="" src={image4} />
      </div>
      <div className="image-59-wrapper">
        <img className="image-59-icon" alt="" src={image5} />
      </div>
      <div className="havic-hv-g-92">Havic HV G-92 Gamepad</div>
      <div className="div">$192.00</div>
      <div className="frame-group">
        <div className="four-star-parent">
          <div className="four-star">
            <img className="vector-icon" alt="" src={start} />
            <img className="vector-icon" alt="" src={start} />
            <img className="vector-icon" alt="" src={start} />
            <img className="vector-icon" alt="" src={start} />
            <img className="vector-icon4" alt="" src={vector1} />
          </div>
          <div className="account">(150 Reviews)</div>
        </div>
        <div className="line-parent">
          <div className="frame-child" />
          <div className="in-stock">In Stock</div>
        </div>
      </div>
      <div className="playstation-5-controller">{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
      <div className="colours-parent">
        <div className="colours">Colours:</div>
        <div className="four-star-parent">
          <img
            className="colour-chnage-child"
            alt=""
            src={groupe10}
          />
          <div className="colour-chnage-item" />
        </div>
      </div>
      <div className="size-parent">
        <div className="colours">Size:</div>
        <div className="frame-container">
          <div className="xs-wrapper">
            <span className="xs">XS</span>
            
          </div>
          <div className="xs-wrapper">
            <span className="s">S</span>
          </div>
          <div className="m-wrapper">
            <span className="m">M</span>
          </div>
          <div className="xs-wrapper">
            <span className="l">L</span>
          </div>
          <div className="xs-wrapper">
            <span className="xl">XL</span>
          </div>
        </div>
      </div>
      <img className="underline-icon" alt="" src="/underline.svg" />
      <div className="frame-div">
        <div className="icon-minus-wrapper">
          <div className="icon-minus">
            <img className="vector-icon5" alt="" src={iconminus}/>

        </div>
        </div>
        <div className="wrapper">
          <div className="div1">2</div>
        </div>
        <img className="frame-item" alt="" src={frame907} />
      </div>
      <div className="button">
        <div className="add-to-cart">Buy Now</div>
      </div>
      <img className="product-details-page-item" alt="" src={frame904} />
      <div className="underline-parent">
        <img className="underline-icon1" alt="" src={underline1} />
        <div className="icon-delivery-parent">
          <img className="icon-delivery" alt="" src={icondelivery} />
          <div className="free-delivery-parent">
            <div className="add-to-cart">Free Delivery</div>
            <div className="enter-your-postal">
              Enter your postal code for Delivery Availability
            </div>
          </div>
        </div>
        <div className="icon-return-parent">
          <img className="icon-delivery" alt="" src={iconreturn} />
          <div className="free-delivery-parent">
            <div className="add-to-cart">Return Delivery</div>
            <div className="free-30-days-container">
              {`Free 30 Days Delivery Returns. `}
              <span className="details">Details</span>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="category-rectangle-parent">
          <div className="category-rectangle">
            <div className="category-rectangle-child" />
          </div>
          <div className="related-item">Related Item</div>
        </div>
        <div className="cart-with-flat-discount-parent">
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="discount-percent">
                <div className="div2">-40%</div>
              </div>
              <div className="fill-heart-parent">
                <img className="fill-heart-icon" alt="" src={iconheart} />
                <img className="fill-heart-icon" alt="" src={iconeye} />
              </div>
              <div className="g92-2-500x500-1-wrapper">
                <img
                  className="g92-2-500x500-1-icon"
                  alt=""
                  src={g92}
                />
              </div>
            </div>
            <div className="havit-hv-g92-gamepad-parent">
              <div className="add-to-cart">HAVIT HV-G92 Gamepad</div>
              <div className="parent">
                <div className="add-to-cart">$120</div>
                <div className="div4">$160</div>
              </div>
              <div className="five-star-parent">
                <div className="four-star">
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                </div>
                <div className="div5">(88)</div>
              </div>
            </div>
          </div>
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="discount-percent">
                <div className="div2">-35%</div>
              </div>
              <div className="frame-inner" />
              <div className="add-to-cart1">Add To Cart</div>
              <div className="fill-heart-parent">
                <img className="fill-heart-icon" alt="" src={iconheart} />
                <img className="fill-heart-icon" alt="" src={iconeye} />
              </div>
              <div className="ak-900-01-500x500-1-wrapper">
                <img
                  className="ak-900-01-500x500-1-icon"
                  alt=""
                  src={ak90}
                />
              </div>
            </div>
            <div className="havit-hv-g92-gamepad-parent">
              <div className="add-to-cart">AK-900 Wired Keyboard</div>
              <div className="parent">
                <div className="add-to-cart">$960</div>
                <div className="div4">$1160</div>
              </div>
              <div className="five-star-parent">
                <div className="four-star">
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon4" alt="" src="/vector1.svg" />
                </div>
                <div className="div5">(75)</div>
              </div>
            </div>
          </div>
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="discount-percent">
                <div className="div2">-30%</div>
              </div>
              <div className="fill-heart-parent">
                <img className="fill-heart-icon" alt="" src={iconheart} />
                <img className="fill-heart-icon" alt="" src={iconeye} />
              </div>
              <div className="g92-2-500x500-1-wrapper">
                <img
                  className="g27cq4-500x500-1-icon"
                  alt=""
                  src={g27}
                />
              </div>
            </div>
            <div className="havit-hv-g92-gamepad-parent">
              <div className="add-to-cart">IPS LCD Gaming Monitor</div>
              <div className="parent">
                <div className="add-to-cart">$370</div>
                <div className="div4">$400</div>
              </div>
              <div className="five-star-parent">
                <div className="four-star">
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                </div>
                <div className="div5">(99)</div>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="discount-percent-parent">
              <div className="fill-heart-parent">
                <img className="fill-heart-icon" alt="" src={iconheart} />
                <img className="fill-heart-icon" alt="" src={iconeye} />
              </div>
              <div className="gammaxx-l240-argb-1-500x500-1-wrapper">
                <img
                  className="gammaxx-l240-argb-1-500x500-1-icon"
                  alt=""
                  src={gammax}
                />
              </div>
            </div>
            <div className="free-delivery-parent">
              <div className="add-to-cart">RGB liquid CPU Cooler</div>
              <div className="parent">
                <div className="add-to-cart">$160</div>
                <div className="div4">$170</div>
              </div>
              <div className="five-star-parent">
                <div className="four-star">
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img className="vector-icon" alt="" src={start} />
                  <img
                    className="star-half-filled-icon"
                    alt=""
                    src={starthalf}
                  />
                </div>
                <div className="div5">(65)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductsDetails