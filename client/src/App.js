import React from 'react';
import Navabr from './components/Nabar/Navabr';
import TopHeader from './components/TopHeader/TopHeader';
import SignUp from './components/SignUp/SignUp';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import Login from "./components/Login/Login";
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom"
import About from "./components/AboutUs/AboutUs"
import { logout, setUser,registerUser } from "./slicers/userSlicer"
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const user = useSelector((state) => state.value.user)
  console.log(user);
  const dispatch = useDispatch()

 

  return (
    <div >
      {/* This to compnents will be for all the app  */}
      <TopHeader />
      <Navabr /> 

      {/* heree it will be the routers */}
      {/* <SignUp /> */}
      <ProductsDetails/>

      
      {/* <SignUp />
      <Login />
      <Error /> */}






      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error' element={<Error />} />
        <Route path='/about' element={<About />} />
        {/* <Route path=''/>
        <Route/> */}
      </Routes>

      {/* the footer will be the last compnetnts for all  */}
      <Footer />
    </div>
  );
}

export default App;
