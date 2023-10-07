//hakim lol
import React, { useState } from 'react'
import "./style.css";
import CardContainer from '../CardConatiner/CardContainer';
import { useSelector, useDispatch } from "react-redux";
import { useUpdateListsMutation } from '../../slicers/userApiSlice'
import { setUser } from '../../slicers/userSlicer';
import { toast } from "react-toastify"

const Wishlist = () => {
  const dispatch = useDispatch()
  const [updateLists] = useUpdateListsMutation()
  const { user } = useSelector((state) => state.value)
  const { products } = useSelector((state) => state.prod)
  const [limit, setLimit] = useState(4)
  const handeyeClickaddAll = async () => {
    try {
      if (user.cartlist.length !== user.wishlist.length) {
        const res = await updateLists({ cartlist: [...user.wishlist], id: user.userId }).unwrap()
        dispatch(setUser({ ...user, cartlist: [...user.wishlist] }))
        toast.success(` All Added`, {
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
        toast.warning(`Already Added`, {
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
  }
  return (
    <div className='all-wishList-container d-flex'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-3 wishlist-text'>
          <span>Wishlist</span>
          ({user.wishlist.length})
        </div>
        <button className='move-to-bag'
          onClick={() => handeyeClickaddAll()}
        >Move All To Cart</button>
      </div>
      <div className='all-wishList'>
        {!user.wishlist.length ? <h1>No Items In The WishList Go Add Some</h1> : user.wishlist.map((prod) => <CardContainer key={prod.id} prod={prod} />)}
      </div>
      <div className='just-for-you d-flex justify-content-between align-items-center'>
        <div className='d-flex gap-3 wishlist-text align-items-center'>
          <div className='red-small-div'></div>
          <span>Just For You</span>
        </div>
        <button className='move-to-bag'
          onClick={() => limit === 4 ? setLimit(products.length) : setLimit(4)}
        >{limit === 4 ? "See All" : "See Less"}</button>
      </div>
      <div className='all-wishList'>
        {products.map((prod, i) => {
          if (i < limit) {
            return <CardContainer key={prod.id} prod={prod} />
          }
        })}
      </div>
    </div>
  );
};

export default Wishlist