import React from "react";
// eslint-disable-next-line
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

// const pizzaLogo = require("../images/pizzaLogo");

const Topbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <>
      <nav class=" navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img
              class="logo"
              style={{ width: "60px", height: "40px" }}
              src="data:image/png;base64,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"
              alt="logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/aboutus" class="nav-link" href="#">
                  About us
                </Link>
              </li> */}
              <li class="nav-item">
                <Link to="/contactus" class="nav-link">
                  Contact us
                </Link>
              </li>
              {currentUser ? (
                <>
                  {!currentUser.user[0].isAdmin ? (
                    <>
                      <li class="nav-item">
                        <Link class="nav-link">{currentUser.user[0].name}</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/orders" class="nav-link">
                          My order
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          onClick={() => {
                            dispatch(logoutUser());
                          }}
                          class="nav-link"
                        >
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li class="nav-item">
                        <Link to="/admin" class="nav-link">
                          Admin Dashboard
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link
                          onClick={() => {
                            dispatch(logoutUser());
                          }}
                          class="nav-link"
                        >
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/register" class="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              )}

              <li class="nav-item">
                <Link to="/cart" class="nav-link">
                  <span>
                    <i style={{ color: "#ffbc00" }} class="bi bi-cart-fill"></i>
                  </span>
                  <sup> {cartState.cartItems.length}</sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
