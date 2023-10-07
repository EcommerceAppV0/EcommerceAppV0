import React, { useEffect } from "react";
import Navabr from "./components/Nabar/Navabr";
import TopHeader from "./components/TopHeader/TopHeader";
import SignUp from "./components/SignUp/SignUp";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/AboutUs/AboutUs";
import { useSelector } from "react-redux";
import Wishlist from "./components/WishList/WishList";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import { ToastContainer } from "react-toastify"

import {
  useGetAllCategoriesMutation,
  useGetAllProductsMutation,
} from "./slicers/userApiSlice";
import { useDispatch } from "react-redux";
import { setProducts, setCategories } from "./slicers/productSlicer";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";

function App() {
  const { user, loggedIn } = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [getAllProducts] = useGetAllProductsMutation();
  const [getAllCategories] = useGetAllCategoriesMutation();



  useEffect(() => {
    const initProd = async () => {
      try {
        const res = await getAllProducts().unwrap();
        const cat = await getAllCategories().unwrap();
        dispatch(setCategories(cat));
        dispatch(setProducts(res));
      } catch (err) {
        console.log(err);
      }
    };
    initProd();
  }, []);

  return (
    <div>
      {/* This to compnents will be for all the app  */}
      <TopHeader />
      <Navabr />
      {/* <Wishlist/> */}

      {/* heree it will be the routers */}
      {/* <SignUp /> */}
      {/* <ProductsDetails/> */}

      {/* <SignUp />
      <Login />
      <Error /> */}

      {/* we will fix the private routers depending on the state  */}
      <Routes>
        {/* this will be for homepage */}
        {/* <Route path='/' element={<Error />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} /> //! this will show the loginwhen the website is loaded instead of the error page - Amine !//it willbe the homepage tomrrow
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetails" element={<ProductsDetails />} />
        <Route path="/categories" element={<CategoriesPage />} />
        {/* <Route/>  */}
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* handle errror routeres  */}
        {/* <Route path=''/>
        <Route/> */}
      </Routes>
      {/* tostas heree all okey  */}
      <ToastContainer />


      {/* the footer will be the last compnetnts for all  */}
      <Footer />
    </div>
  );
}

export default App;
