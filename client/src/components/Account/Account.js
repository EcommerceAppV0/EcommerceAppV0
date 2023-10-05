import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Account = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    adress: "",
  });
  const [password, setPassword] = useState({ old: "", new: "", confirm: "" });
  const { user } = useSelector((state) => state.value);
  


  return (
    <div className="Account-container">
      <div className="top-div">
        <div className="Account-routes">
          <span>Home </span>/<span> My Account</span>
        </div>
        <h6 id="welcome">
          Welcome{"  "}
          <p>
            username
            {
              //! username
            }
          </p>
        </h6>
      </div>
      <div className="account-body">
        <div className="account-side">
          <h5>Manage My Account</h5>
          <div className="account-side-buttons">
            <span>My Profile</span>
            <span>Adress Book</span>
            <span>My Payment Options</span>
          </div>
          <h5>My Orders</h5>
          <div className="account-side-buttons">
            <span>My Returns</span>
            <span>My Cancellations</span>
          </div>
          <h5>My WishList</h5>
        </div>
        <div className="account-main">
          <h5 id="edit-profile">Edit Your Profile</h5>
          <div className="account-first-info">
            <div className="input-div">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Md"
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>
            <div className="input-div">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Rimel"
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
            <div className="input-div">
              <label>Email</label>
              <input
                type="email"
                placeholder="rimel1111@gmail.com"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="input-div">
              <label>Adress</label>
              <input
                type="text"
                placeholder="Kingstopn, 5236, United State"
                onChange={(e) => setForm({ ...form, adress: e.target.value })}
              />
            </div>
          </div>
          <div className="account-password">
            <label>Password Changes</label>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />
          </div>
          <div className="account-buttons">
            <button id="cancel">Cancel</button>
            <button id="save">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
