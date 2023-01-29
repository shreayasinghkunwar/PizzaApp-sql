import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const loginHandler = (e) => {
        e.preventDefault();
        const user = { email, password };
        console.log(user);
        dispatch(loginUser(user));
    }
    return (
        <>
            <div class="container mt-5 pt-5">
                <div className="LoginSignUpContainer">
                    <div className="LoginSignUpBox">

                        <form className="loginForm" >
                            <div className="logininput">
                                <i class="bi bi-envelope-open-fill"></i>&nbsp;
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="logininput">
                                <i class="bi bi-file-earmark-lock2-fill"></i>&nbsp;
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>



                            <input type="submit" value="Login" className="loginBtn" onClick={loginHandler} />
                            <div class="mt-4" style={{ justifyContent: "center" }}>
                                <Link to="/"> <button className="loginBtn" style={{ backgroundColor: "#5e5a5a", }} > Go To Home</button></Link>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;