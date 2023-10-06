import "./style.css";
import group1 from "../../assets/images/group.png";
import vector from "../../assets/images/vector.png";
import qrcode from "../../assets/images/qrcode-1.png";
import appstore from "../../assets/images/download-appstore.png";
import vector1 from "../../assets/images/vector1.png";
import group2 from "../../assets/images/group2.png";
import group3 from "../../assets/images/group3.png";
import vector2 from "../../assets/images/vector2.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Footer = () => {
  const navigate = useNavigate();
  const {loggedIn} = useSelector((state)=>state.value)
  // console.log(loggedIn);

  return (
    <div className="footer">
      <div className="frame-3">
        <div className="frame-4">
          <div className="frame-5">
            <div className="frame-5">
              <div className="logo">
                <div className="text-wrapper-4">Exclusive</div>
              </div>
              <div
                className="text-wrapper-2"
                onClick={() => navigate("/error")}
              >
                Subscribe
              </div>
            </div>
            <p className="text-wrapper-3" onClick={() => navigate("/error")}>
              Get 10% off your first order
            </p>
            <div className="email-sender">
              <input placeholder="Enter your email" />
              <img src={vector} />
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-4">Support</div>
          <div className="frame-4">
            <p className="element-bijoy-sarani">
              111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.
            </p>
            <div className="element-bijoy-sarani">exclusive@gmail.com</div>
            <div className="element-bijoy-sarani">+88015-88888-9999</div>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-4">Account</div>
          <div className="frame-4">
            <div
              className="text-wrapper-3"
              onClick={() => loggedIn ?  navigate("/account") : navigate("/error")}
            >
              My Account
            </div>
            <div className="text-wrapper-3">
              <p onClick={() => navigate("/login")}>Login</p> /{" "}
              <p onClick={() => navigate("/signup")}> Register</p>
            </div>
            <div className="text-wrapper-3" onClick={() =>loggedIn ?  navigate("/cart") : navigate("/error") }>
              Cart
            </div>
            <div
              className="text-wrapper-3"
              onClick={() => {loggedIn ? navigate("/wishlist"): navigate("/error")}}
            >
              Wishlist
            </div>
            <div className="text-wrapper-3" onClick={() =>loggedIn ?  navigate("/home") : navigate("/error")}>
              Shop
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-4">Quick Link</div>
          <div className="frame-4">
            <div className="text-wrapper-3" onClick={() => navigate("/error")}>
              Privacy Policy
            </div>
            <div className="text-wrapper-3" onClick={() => navigate("/error")}>
              Terms Of Use
            </div>
            <div className="text-wrapper-3" onClick={() => navigate("/error")}>
              FAQ
            </div>
            <div
              className="text-wrapper-3"
              onClick={() => navigate("/contact")}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="frame-5">
            <div className="text-wrapper-4">Download App</div>
            <div className="frame-6">
              <p className="text-wrapper-6">Save $3 with App New User Only</p>
              <div className="frame-7">
                <div className="qr-code">
                  <img className="qrcode" alt="Qrcode" src={qrcode} />
                </div>
                <div className="frame-8">
                  <div className="app-store">
                    <img
                      className="download-appstore"
                      alt="Download appstore"
                      src={appstore}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-9">
            <div className="icon-facebook-screen">
              <a href="https://www.facebook.com/amine.drissi.77377">
                <img className="vector" alt="Vector" src={vector1} />
              </a>
            </div>
            <div className="icon-twitter-screen">
              <a href="https://twitter.com">
                <img className="group" alt="Group" src={group2} />
              </a>
            </div>
            <div className="icon-instagram-screen">
              <a href="https://instagram.com">
                <img className="group" alt="Group" src={group3} />
              </a>
            </div>
            <div className="icon-linkedin-screen">
              <a href="https://www.linkedin.com/in/bellhassen-sehli-276419217/">
                <img className="vector" alt="Vector" src={vector2} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="frame">
        <div className="under-line" />
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="icon-copyright-screen">
              <img className="group" alt="Group" src={group1} />
            </div>
            <p className="p">Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
