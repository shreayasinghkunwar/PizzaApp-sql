import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";

const Register = () => {
  const [name, setName] = useState(""); //State for storing name of the user
  const [email, setEmail] = useState(""); //State for storing email of the user
  const [password, setPassword] = useState(""); //state for storing password of user
  const [confirmPassword, setConfirmPassword] = useState(""); //state for storing confirm password of user

  const dispatch = useDispatch(); //Initializing useDispatch() func

  const registerHandler = (e) => {
    // Event handle for submitting form
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match.");
    } else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));
    }
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="LoginSignUpContainer mt-4">
          <div className="LoginSignUpBox">
            <form className="loginForm">
              <div className="logininput">
                <i className="bi bi-person-fill"></i> &nbsp;
                <input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  data-testid="name"
                />
              </div>
              <div className="logininput">
                <i className="bi bi-envelope-open-fill"></i>&nbsp;
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email"
                />
              </div>

              <div className="logininput">
                <i className="bi bi-file-earmark-lock2-fill"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password"
                />
              </div>
              <div className="logininput">
                <i className="bi bi-file-earmark-lock2-fill"></i>
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  data-testid="confirm-password"
                />
              </div>

              <input
                type="submit"
                value="Register"
                className="loginBtn"
                onClick={registerHandler}
              />
              <div className="mt-4" style={{ justifyContent: "center" }}>
                <Link to="/">
                  {" "}
                  <button
                    className="loginBtn"
                    style={{ backgroundColor: "#5e5a5a" }}
                    data-testid="button"
                  >
                    {" "}
                    Go To Home
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
