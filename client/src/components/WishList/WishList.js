//hakim lol
import React from 'react'
import "./style.css";
// import deleted from "../../assets/images/delete.svg"
// import Cart1 from "../../assets/images/Cart1.svg"
// import inspector from "../../assets/images/inspect.svg"
// import pc from "../../assets/images/pc.png"
// import manetteka7la from "../../assets/images/manetteka7la.png"
// import manettehamra from "../../assets/images/manettehamra.png"
// import jacket from "../../assets/images/jacket.png"
// import ecran from "../../assets/images/ecran.png"
// import cartegraphique from "../../assets/images/cartegraphique.png"
// import sacgucci from "../../assets/images/sacgucci.png"
// import clavier from "../../assets/images/clavier.png"
// import najma from "../../assets/images/najma.svg"
import CardContainer from '../CardConatiner/CardContainer';
import { useSelector } from "react-redux";


const Wishlist = () => {
  const { user } = useSelector((state) => state.value)
  return (
    <div className='all-wishList'>
      {user.wishlist.map((prod) => <CardContainer key={prod.id} prod={prod} />)}
    </div>

  );
};

export default Wishlist