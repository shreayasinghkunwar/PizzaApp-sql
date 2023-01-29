import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setshow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  return (
    <>
      <div class="card" style={{ width: "15.5rem", marginTop: "30px" }}>
        <img
          src={pizza.image}
          class="card-img-top"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ height: "150px", cursor: "pointer" }}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{pizza.name}</h5>
          <hr></hr>
          <p class="card-text">
            <div class="row">
              <div class="col-6 ">
                <h6>Varient</h6>
                <select onChange={(e) => setVarient(e.target.value)}>
                  {pizza.varients.map((varient) => (
                    <option value={varient}> {varient}</option>
                  ))}
                </select>
              </div>
              <div class="col-6">
                <h6>Quantity</h6>
                <select onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </p>
          <div class="row">
            <div class="col-6">
              Price : Rs {pizza.prices[0][varient] * quantity}{" "}
            </div>
            <div class="col-6">
              <button
                type="button"
                style={{ width: "100px", fontSize: "13px", fontWeight: "500" }}
                class="btn btn-warning"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {pizza.name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <div>
                <img
                  src={pizza.image}
                  class="card-img-top"
                  style={{ height: "150px", cursor: "pointer" }}
                  alt=""
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  {pizza.description}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
