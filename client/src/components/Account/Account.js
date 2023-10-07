import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateInfoMutation } from "../../slicers/userApiSlice";
import { setUser, setLoggedIn } from "../../slicers/userSlicer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"


const Account = () => {
  const [hide, setHide] = useState({
    password: true,
    newPassword: true,
    confirmPassword: true,
  })
  const { user } = useSelector((state) => state.value);
  const dipsatch = useDispatch()
  const navigate = useNavigate()
  const [updateInfo, { isLoading, isSuccess, isError }] = useUpdateInfoMutation()
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    adress: "",
    old: "",
    currentId: user.userId,
    newPassword: "",
    confirmPassword: "",
  });


  const handleSubmit = async (form) => {
    if (form.newPassword === form.confirmPassword) {
      const res = await updateInfo(form).unwrap()
      if (res.message === "user updated") {
        dipsatch(setUser({ ...user, email: form.email, adress: form.adress, name: form.name, lastName: form.lastName }))
        dipsatch(setLoggedIn({ loggedIn: true, token: res.token }))
        toast.success('User updated', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error('Verify Password', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
    else {
      toast.warning(' Verify Confirm Password', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className="Account-container">
      <div className="top-div">
        <div className="Account-routes">
          <span>Home </span>/<span> My Account</span>
        </div>
        <h6 id="welcome">
          Welcome{"  "}
          <p>
            {user.name}
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
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            <div className='d-flex' >

              <input
                className="w-100"
                type={hide.password ? "password" : "text"}

                placeholder="Current Password"
                onChange={(e) => setForm({ ...form, old: e.target.value })}
              />
              <button
                onClick={() => setHide({ ...hide, password: !hide.password })}
                className='show-password' style={{ background: "rgba(128, 128, 128, 0.23)" }}>
                <span
                  style={{ transition: "0.4s" }}>{hide.password ? "Show" : "Hide"}</span>
              </button>
            </div>
            <div className='d-flex' >

              <input
                className="w-100"
                type={hide.newPassword ? "password" : "text"}
                placeholder="New Password"
                onChange={(e) =>
                  setForm({ ...form, newPassword: e.target.value })
                }
              />
              <button
                onClick={() => setHide({ ...hide, newPassword: !hide.newPassword })}
                className='show-password' style={{ background: "rgba(128, 128, 128, 0.23)" }}>
                <span
                  style={{ transition: "0.4s" }}>{hide.newPassword ? "Show" : "Hide"}</span>
              </button>

            </div>
            <div className='d-flex' >
              <input

                className="w-100"
                type={hide.confirmPassword ? "password" : "text"}
                placeholder="Confirm New Password"
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              <button
                onClick={() => setHide({ ...hide, confirmPassword: !hide.confirmPassword })}
                className='show-password' style={{ background: "rgba(128, 128, 128, 0.23)" }}>
                <span
                  style={{ transition: "0.4s" }}>{hide.confirmPassword ? "Show" : "Hide"}</span>
              </button>

            </div>

          </div>
          <div className="account-buttons">
            <button id="cancel">Cancel</button>
            <button id="save" onClick={() => handleSubmit(form)}>Save Changes</button>
            {/* {isSuccess && <div> updated user</div>} */}
            {isError && <div> error</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
