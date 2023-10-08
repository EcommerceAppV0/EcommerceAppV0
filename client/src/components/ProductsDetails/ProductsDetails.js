import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../slicers/userSlicer";
import { useUpdateListsMutation } from "../../slicers/userApiSlice";
import { toast } from "react-toastify";
import lastFrame from "../../assets/images/Frame 911.png";
import CardContainer from "../CardConatiner/CardContainer";

const ProductsDetails = () => {
  const [updateLists] = useUpdateListsMutation();
  const { productDetails, products } = useSelector((state) => state.prod);
  const fourImages = new Array(4).fill("photo");
  const rates = new Array(+productDetails.rate).fill("rate");
  const greys = new Array(5 - rates.length).fill("rate");
  const [click, setClick] = useState({
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
  });
  const handleClickStyle = (size) => {
    setClick({
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
      [size]: !click[size],
    });
  };
  const [addWish, setAddWish] = useState(false);
  const { user } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handeyeClick = async () => {
    try {
      if (!user.wishlist.some((product) => product.id === productDetails.id)) {
        const res = await updateLists({
          wishlist: [...user.wishlist, { ...productDetails, inWishList: true }],
          id: user.userId,
        }).unwrap();
        dispatch(
          setUser({
            ...user,
            wishlist: [
              ...user.wishlist,
              { ...productDetails, inWishList: true },
            ],
          })
        );
        toast.success(`${productDetails.name.slice(0, 15)}... Added`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.warning(`${productDetails.name.slice(0, 15)}... Already There`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-details">
      <div className="product-path">Account / prod name</div>
      <div className="main-product-details">
        <div className="product-images">
          {fourImages.map((img, i) => (
            <div className="side-image" key={i}>
              <img
                src={
                  productDetails.images.length === 5
                    ? productDetails.images[i]
                    : productDetails.images[0]
                }
              ></img>
            </div>
          ))}
        </div>
        <div className="product-main-image">
          <img src={productDetails.images[0]} alt=""></img>
        </div>
        <div className="product-information">
          <h2>{productDetails.name}</h2>
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
            <span> (150 Reviews)</span>|
            <span id="status"> {productDetails.status}</span>
          </div>
          <h2>${productDetails.price}</h2>
          <p className="product-descrition">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr></hr>
          <div className="colours">
            <span>Colours:</span>
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
          <div className="size">
            <span>Size:</span>
            <div
              className="size-options"
              onClick={() => handleClickStyle("XS")}
              style={
                click.XS
                  ? {
                      color: "white",
                      backgroundColor: "#DB4444",
                      border: "none",
                    }
                  : {}
              }
            >
              XS
            </div>
            <div
              className="size-options"
              onClick={() => handleClickStyle("S")}
              style={
                click.S
                  ? {
                      color: "white",
                      backgroundColor: "#DB4444",
                      border: "none",
                    }
                  : {}
              }
            >
              S
            </div>
            <div
              className="size-options"
              onClick={() => handleClickStyle("M")}
              style={
                click.M
                  ? {
                      color: "white",
                      backgroundColor: "#DB4444",
                      border: "none",
                    }
                  : {}
              }
            >
              M
            </div>
            <div
              className="size-options"
              onClick={() => handleClickStyle("L")}
              style={
                click.L
                  ? {
                      color: "white",
                      backgroundColor: "#DB4444",
                      border: "none",
                    }
                  : {}
              }
            >
              L
            </div>
            <div
              className="size-options"
              onClick={() => handleClickStyle("XL")}
              style={
                click.XL
                  ? {
                      color: "white",
                      backgroundColor: "#DB4444",
                      border: "none",
                    }
                  : {}
              }
            >
              XL
            </div>
            <div className="wishlist-prod-details">
              <i
                class={
                  addWish
                    ? "fa-solid fa-heart fa-xl"
                    : "fa-regular fa-heart fa-xl"
                }
                onClick={() => {
                  handeyeClick();
                  setAddWish(!addWish);
                }}
                style={{ color: "#ff0000" }}
              ></i>
            </div>
          </div>
          <div>
            <img src={lastFrame} />
          </div>
        </div>
      </div>
      <div className="flash-sales">
        <div
          className="d-flex gap-3 align-items-center colors-red "
          style={{ marginTop: "13rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="40"
            viewBox="0 0 20 40"
            fill="none"
          >
            <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
          <span>Related Items</span>
        </div>
      </div>
      <div
        className="d-flex align-items-center gap-4"
        style={{ flexWrap: "wrap", marginTop: "5rem" }}
      >
        {!products.length ? (
          <div className="d-flex justify-content-center w-100">
            <h1 className="flash-text">No Products Now For This category</h1>
          </div>
        ) : (
          products
            .filter((prod) => prod.categoryId === productDetails.categoryId)
            .map((category, i) =>
              i < 4 ? <CardContainer key={category.id} prod={category} /> : null
            )
        )}
      </div>
    </div>
  );
};

export default ProductsDetails;
