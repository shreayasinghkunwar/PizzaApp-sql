import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="col-3 col-lg-3 col-md-3 col-sm-3" id="adminPanel">
        <div
          class="btn-group-vertical"
          role="group"
          style={{ height: "75vh", width: "90%" }}
          aria-label="Vertical button group"
        >
          <button
            type="button"
            onClick={() => {
              navigate("/admin/userlist");
            }}
            class="btn btn-dark"
            style={{ borderRadius: "0px" }}
          >
            View Users
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/admin/pizzalist");
            }}
            class="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            View Pizzas
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/admin/addnewpizza");
            }}
            class="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            Add Pizza
          </button>

          <button
            type="button"
            class="btn btn-dark"
            style={{ border: "1px solid grey", borderRadius: "0px" }}
          >
            View Orders
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
