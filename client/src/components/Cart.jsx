import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMinusCircle, HiPlusCircle, HiTrash } from "react-icons/hi";

import { addToCart, deleteFromCart } from "../actions/cartAction";


{/**  Dipalying items added to  cart by users */ }

const Cart = ({ item, index }) => {
  const dispatch = useDispatch();

  // getting cart state from reducers
  const cartState = useSelector((state) => state.cartReducer);
  // getting user's cart items from reducers
  const cartItems = cartState.cartItems;

  return (
    <>
      {/** Dipalying selected cart items  */}
      <div class="col-6 col-lg-6 col-md-6 col-sm-6 mt-2">

        {/** Dipalying names of pizza and its type  */}
        <h6>
          {index + 1}.&nbsp;{item.name} [{item.varient}]
        </h6>
        <h6>
          {" "}
          {/** Dipalying names of pizza's price and quantity  */}
          &nbsp;&nbsp;&nbsp;Price: {item.quantity} X{" "}
          {item.prices[0][item.varient]} ={" "}
          {item.quantity * item.prices[0][item.varient]}
        </h6>
        <h6>
          {" "}
          &nbsp;&nbsp;&nbsp;Quantity: &nbsp;
          {/** button to decrease quantity  and calling cart action */}
          <HiMinusCircle
            className="text-danger"
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              dispatch(addToCart(item, item.quantity - 1, item.varient));
            }}
          />
          &nbsp;{item.quantity}&nbsp;
          {/** button to Increase quantity and calling cart action  */}
          <HiPlusCircle
            className="text-sucess"
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => {
              dispatch(addToCart(item, item.quantity + 1, item.varient));
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


        {/** button to delete pizza from cart and calling delete cart action  */}

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
  );
};
export default Cart;
