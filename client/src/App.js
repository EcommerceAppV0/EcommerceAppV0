import React from 'react';
import Navabr from './components/Nabar/Navabr';
import TopHeader from './components/TopHeader/TopHeader';
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Routes, Route, Navigate } from "react-router-dom"
import About from "./components/AboutUs/AboutUs"
import { useSelector } from 'react-redux'
import Account from './components/Account/Account';




function App() {
  const { user, loggedIn } = useSelector((state) => state.value)


  return (
    <div >
      {/* This to compnents will be for all the app  */}
      <TopHeader />
      <Navabr />

      {/* heree it will be the routers */}


      {/* we will fix the private routers depending on the state  */}
      <Routes>
        {/* this will be for homepage */}
        {/* <Route path='/' element={<Error />} /> */}
        <Route path="/"    element={<Login/> }/>        //! this will show the login when the website is loaded instead of the error page - Amine
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
        <Route path='/*' element={<Error />} />
        {/* handle errror routeres  */}

        {/* <Route path=''/>
        <Route/> */}
      </Routes>

      {/* the footer will be the last compnetnts for all  */}
      <Footer />
    </div>
  );
}

export default App;
