import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/cartscreen.css"
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;

    const subTotal = cartItems.reduce((x, item) => {
        return x + item.quantity * item.prices[0][item.varient];
    }, 0);

    return (
        <>
            <div class="container mt-2 pt-5">

                <div class="row" style={{ marginTop: "5rem" }} id="cart-container">
                    <div style={{ textAlign: "center", marginBottom: "2rem", color: "#54442d" }}>
                        <h2 ><i class="bi bi-cart-check-fill"></i>&nbsp;My cart</h2></div>

                    <div id="cart-items"
                        class="col-12 col-lg-8 col-md-8 col-sm-12 p-2"
                        style={{ backgroundColor: "rgb(191 178 69 / 6%)", margin: "auto" }}
                    >
                        <h3 style={{ color: "rgb(67 74 68)", margin: "auto" }}>Cart Items</h3>

                        <div class="row  mt-3">
                            {cartItems.map((item, index) => (

                                <>
                                    <Cart item={item} index={index} />
                                </>
                            ))}
                        </div>
                    </div>
                    <div
                        class="col-12 col-lg-4 col-md-4 col-sm-12 "
                        style={{ backgroundColor: "#95997429" }}
                    >
                        <h3 style={{ color: "rgb(67 74 68)" }}>Payment Info</h3>
                        <h4 style={{ color: "564833", marginTop: "1.5rem" }}>Sub Total: &nbsp;RS: {subTotal}/-</h4>
                        {currentUser ? (<div style={{ textAlign: "center" }}>      <button
                            type="button"
                            style={{ width: "100px", fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
                            class="btn btn-warning"
                            onClick={() => window.location.href = "/checkout"}
                        >
                            Checkout
                        </button></div>) : (<><Link to="/login"><div style={{ textAlign: "center" }}>      <button
                            type="button"
                            style={{ width: "100px", fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
                            class="btn btn-warning"

                        >
                            Login
                        </button></div></Link></>)}

                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartScreen;