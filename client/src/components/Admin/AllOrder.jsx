import React, { useEffect } from "react";
import SideBar from "../../screens/admin/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserOrders } from "../../actions/orderAction";

const AllOrder = () => {
  const allOrderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, orders, error } = allOrderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders);
  }, [dispatch]);

  return (
    <>
      <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }}>
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>

        <div class="row mt-1">
          <SideBar />
          <div class="col-9 col-lg-9 col-md-9 col-sm-9">
            {loading ? (
              <h1>Loading....</h1>
            ) : error ? (
              <h1>Error while fetching pizzas</h1>
            ) : (
              <div
                class="mt-2 "
                style={{
                  padding: "0px",
                  margin: "auto",
                  height: "70vh",
                  overflow: "auto",
                }}
              >
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">Sn.</th>
                      <th scope="col">Pizza name</th>
                      <th>Price</th>
                      <th scope="col">Category</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody style={{}}></tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrder;
