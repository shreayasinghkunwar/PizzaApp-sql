import React, { useState } from 'react'
import Checkout from '../components/Checkout';
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from '../components/Loader';
import Error from '../components/Error';


const CheckoutScreen = () => {
    const orderState = useSelector(state => state.placeOrderReducer);
    const { loading, error, success } = orderState;
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const subTotal = cartItems.reduce((x, item) => {
        return x + item.quantity * item.prices[0][item.varient];
    }, 0);

    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const checkoutInfo = { address, number, message, subTotal };
    const checkoutHandler = () => {
        dispatch(placeOrder(
            checkoutInfo
        ));

    }

    return (

        <div  >
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
                                    <Checkout item={item} sn={index} />
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
                        <h5>Sub Total</h5>
                        <h5>RS: {subTotal}/-</h5>
                        <div>
                            <form style={{ border: "solid 1px grey", borderRadius: '5px', marginTop: "20px", padding: "15px" }}>

                                <div class="mb-3">
                                    <label class="form-label">Phone number</label>
                                    <input type="text" class="form-control" onChange={(e) => setNumber(e.target.value)} />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Location</label>
                                    <input type="text" class="form-control" onChange={(e) => setAddress(e.target.value)} required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <input type="text" class="form-control" onChange={(e) => setMessage(e.target.value)} required />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        type="button"
                                        style={{ width: "100px", fontSize: "13px", fontWeight: "500" }}
                                        class="btn btn-warning"
                                        onClick={checkoutHandler}
                                    >
                                        Place order
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutScreen
