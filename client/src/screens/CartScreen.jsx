import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiMinusCircle, HiPlusCircle, HiTrash } from "react-icons/hi";
import { addToCart, deleteFromCart } from "../actions/cartAction";

const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item) => {
        return x + item.quantity * item.prices[0][item.varient];
    }, 0);

    return (
        <>
            <div class="container mt-2 pt-5">
                <div class="row">
                    <div
                        class="col-12 col-lg-8 col-md-8 col-sm-12"
                        style={{ backgroundColor: "#d3dd9deb" }}
                    >
                        <h2 style={{ color: "rgb(66 60 39 / 91%)" }}>Cart Items</h2>
                        <div class="row  mt-3">
                            {cartItems.map((item, index) => (
                                <>
                                    <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                                        <h6>
                                            {index + 1}.&nbsp;{item.name} [{item.varient}]
                                        </h6>
                                        <h6>
                                            {" "}
                                            &nbsp;&nbsp;&nbsp;Price: {item.quantity} X{" "}
                                            {item.prices[0][item.varient]} ={" "}
                                            {item.quantity * item.prices[0][item.varient]}
                                        </h6>
                                        <h6>
                                            {" "}
                                            &nbsp;&nbsp;&nbsp;Quantity: &nbsp;
                                            <HiMinusCircle
                                                className="text-danger"
                                                style={{ color: "red", cursor: "pointer" }}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(item, item.quantity - 1, item.varient)
                                                    );
                                                }}
                                            />
                                            &nbsp;{item.quantity}&nbsp;
                                            <HiPlusCircle
                                                className="text-sucess"
                                                style={{ color: "green", cursor: "pointer" }}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(item, item.quantity + 1, item.varient)
                                                    );
                                                }}
                                            />
                                        </h6>
                                    </div>
                                    <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                                        <img
                                            alt={item.name}
                                            src={item.image}
                                            style={{ width: "80%", height: "80%", textAlign: "left" }}
                                        />
                                        <HiTrash
                                            style={{
                                                color: "red",
                                                cursor: "pointer",
                                                marginLeft: "10px",
                                            }}
                                            onClick={() => {
                                                dispatch(deleteFromCart(item));
                                            }}
                                        />
                                    </div>
                                    <hr />
                                </>
                            ))}
                        </div>
                    </div>
                    <div
                        class="col-12 col-lg-4 col-md-4 col-sm-12 "
                        style={{ backgroundColor: "#d3dd9deb" }}
                    >
                        <h2 style={{ color: "rgb(66 60 39 / 91%)" }}>Payment Info</h2>
                        <h4>Sub Total</h4>
                        <h4>RS: {subTotal}/-</h4>
                        <button
                            type="button"
                            style={{ width: "100px", fontSize: "13px", fontWeight: "500" }}
                            class="btn btn-primary"
                            onClick={() => window.location.href = "/checkout"}
                        >
                            Checkout
                        </button>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartScreen;