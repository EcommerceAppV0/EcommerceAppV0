import React from 'react';
import Navabr from './components/Nabar/Navabr';
import TopHeader from './components/TopHeader/TopHeader';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import ProductsDetails from './components/ProductsDetails/ProductsDetails';
import Login from "./components/Login/Login";
import Error from './components/Error/Error';
function App() {
  return (
    <div >
      {/* This to compnents will be for all the app  */}
      <TopHeader />
      <Navabr /> 

      {/* heree it will be the routers */}
      {/* <SignUp /> */}
      <ProductsDetails/>

      
      {/* <SignUp />
      <Login /> */}
      <Error />







      {/* the footer will be the last compnetnts for all  */}
      <Footer />
    </div>
  );
}

export default App;
