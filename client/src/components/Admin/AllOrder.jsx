import React, { useEffect } from "react";
import SideBar from "../../screens/admin/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../actions/orderAction";
import Loader from "./../Loader";
import Error from "./../Error";

const AllOrder = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }} >
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>

        <div class="row mt-1">
          <SideBar />
          {loading && <Loader />}
          {error && <Error error="Admin order request fail" />}
          <div class="col-9 col-lg-9 col-md-9 col-sm-9">
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
                    <th scope="col">Order Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Delivery Address</th>
                    <th scope="col">Ph No.</th>
                    <th scope="col">Message</th>
                    <th scope="col">Date</th>
                    <th scope="col">Delivery Status</th>
                    <th scope="col">Paid Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>Rs {order.orderAmount}/-</td>
                        <td>{order.shippingAddress}</td>
                        <td>{order.phoneNumber}</td>
                        <td>{order.message}</td>
                        <td>{order.created_at.substring(0, 10)}</td>
                        <td>{order.isDelivered}</td>
                        <td>{order.isPaid ? "Paid" : "Not Paid"}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
