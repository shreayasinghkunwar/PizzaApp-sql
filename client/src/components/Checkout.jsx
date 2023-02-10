import React from 'react';
import { useDispatch, useSelector } from "react-redux";

// checkout component displaying pizza items added to cart 
// total price of pizzas added

const Checkout = ({ item, sn, addToCart, deleteFromCart }) => {
    return (
        <>
            <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                <h6>
                    {sn + 1}.&nbsp;{item.name} [{item.varient}]
                </h6>
                <h6>
                    {/* calculating prices by multiplying quantity and pizza price  */}
                    {" "}
                    &nbsp;&nbsp;&nbsp;Price: {item.quantity} X{" "}
                    {item.prices[0][item.varient]} ={" "}
                    {item.quantity * item.prices[0][item.varient]}
                </h6>
                <h6>
                    {" "}
                    &nbsp;&nbsp;&nbsp;Quantity: &nbsp;

                    &nbsp;{item.quantity}&nbsp;

                </h6>
            </div>
            <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                <img
                    alt={item.name}
                    src={item.image}
                    style={{ width: "80%", height: "90%", textAlign: "left" }}
                />

            </div>
        </>

    )
}

export default Checkout
