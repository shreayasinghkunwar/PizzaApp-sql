import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMinusCircle, HiPlusCircle, HiTrash } from "react-icons/hi";

import { addToCart, deleteFromCart } from "../actions/cartAction";


const Cart = ({ item, index }) => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;

    return (
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

export default Cart;
