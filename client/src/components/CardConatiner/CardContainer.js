import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useUpdateListsMutation } from "../../slicers/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slicers/userSlicer";
import { setProductDetails } from "../../slicers/productSlicer";
import DelModal from "./DelModal";
import { toast } from "react-toastify";

const CardContainer = ({ prod }) => {
  // console.log(prod.inWishList);
  const { user } = useSelector((state) => state.value);
  const [click, setClicked] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateLists] = useUpdateListsMutation();
  const rates = new Array(+prod.rate).fill("rate");
  const greys = new Array(5 - rates.length).fill("rate");
  const handeyeClick = async () => {
    try {
      if (!user.wishlist.some((product) => product.id === prod.id)) {
        const res = await updateLists({
          wishlist: [...user.wishlist, { ...prod, inWishList: true }],
          id: user.userId,
        }).unwrap();
        dispatch(
          setUser({
            ...user,
            wishlist: [...user.wishlist, { ...prod, inWishList: true }],
          })
        );
        toast.success(`${prod.name.slice(0, 15)}... Added`, {
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
        toast.warning(`${prod.name.slice(0, 15)}... Already There`, {
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
  const handeyeClickOfTrash = async () => {
    try {
      const newlist = user.wishlist.filter((product) => product.id !== prod.id);
      const res = await updateLists(
        { wishlist: [...newlist], id: user.userId },
        user.userId
      ).unwrap();
      dispatch(setUser({ ...user, wishlist: [...newlist] }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickAddToCart = async () => {
    try {
      if (!user.cartlist.some((product) => product.id === prod.id)) {
        const res = await updateLists({
          cartlist: [...user.cartlist, { ...prod }],
          id: user.userId,
        }).unwrap();
        dispatch(
          setUser({ ...user, cartlist: [...user.cartlist, { ...prod }] })
        );
        toast.success(`${prod.name.slice(0, 15)}... Added`, {
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
        toast.warning(`${prod.name.slice(0, 15)}... Already Added`, {
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
    <div className="card-container">
      <div className="card-images">
        <div className="promtion-div-wish">
          <button
            style={{
              backgroundColor: prod.status === "new" ? "#0F6" : "#DB4444",
              visibility:
                prod.status === "new" || prod.status === "sale"
                  ? "block"
                  : "hidden",
            }}
          >
            {prod.status === "new" ? "New" : `-${prod.promo}%`}
          </button>
          {prod.inWishList ? (
            <>
              <i
                data-bs-toggle="modal"
                data-bs-target={`#delModal${prod.id}`}
                onClick={() => {
                  setClicked(!click);
                }}
                className={
                  click ? "fa-solid fa-trash" : "fa-solid fa-trash fa-shake"
                }
              ></i>
              <DelModal handeyeClickOfTrash={handeyeClickOfTrash} prod={prod} />
            </>
          ) : (
            <i
              onClick={() => {
                //  toaost and
                setClicked(!click);
                handeyeClick();
              }}
              className={
                click
                  ? "fa-regular fa-heart fa-lg fa-beat-fade"
                  : "fa-solid fa-heart fa-lg "
              }
              style={{ color: "#DB4444" }}
            ></i>
          )}
        </div>
        {prod.inWishList && (
          <div
            // added to user.cartlist
            onClick={() => handleClickAddToCart()}
            className="add-to-cart-button-card-container d-flex align-items-center justify-content-center gap-3"
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#fff" }}
            ></i>
            <div>Add To Cart</div>
          </div>
        )}
        {!prod.inWishList && (
          <i
            className="fa-regular fa-eye fa-lg"
            onClick={() => {
              dispatch(setProductDetails(prod));
              navigate("/productdetails");
              window.scrollTo(0, 200)
            }}
            style={{ color: "black" }}
          ></i>
        )}

        <img src={prod.images[0]} alt="product" />
      </div>
      <div className="card-infos d-flex flex-column gap-2">
        <span>{prod.name}</span>
        <div className="d-flex gap-3 money">
          <span style={{ color: "#DB4444" }}>${prod.price}</span>
          {prod.status === "sale" && (
            <span
              style={{ color: "#000", textDecorationLine: " line-through" }}
            >
              ${(prod.price / (1 - prod.promo / 100)).toFixed(2)}
            </span>
          )}
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex gap-2 align-items-center">
            {rates.map((e, i) => (
              <i
                key={i}
                className="fa-solid fa-star fa-sm"
                style={{ color: " #f0f40b" }}
              ></i>
            ))}
            {greys.map((e, i) => (
              <i
                key={i}
                className="fa-solid fa-star fa-sm"
                style={{ color: " #BFBFBF" }}
              ></i>
            ))}
            ({(Math.random() * 500).toFixed(0)})
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
