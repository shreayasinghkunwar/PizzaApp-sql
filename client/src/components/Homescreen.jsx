import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "./Loader";
import Error from "./Error";
import "../App.css"
import Carousel from "../screens/Carousel";

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>




      <Carousel />

      <div class="container">
        <div class="row " id="divider-container" style={{ width: "40%", margin: "auto" }}  >
          <div class="col-lg-4 col-4 col-md-4 col-sm-4">
            <div id="divider" style={{ width: "100%", height: "2px", marginTop: "2rem", backgroundColor: "#e9b466" }}></div>
          </div>
          <div class="col-lg-4 col-4 col-md-4 col-sm-4" style={{ textAlign: "center" }}>
            <img style={{ width: "70px", height: "70px", borderRadius: "15rem" }}
              src={"https://thumbs.dreamstime.com/b/restaurant-logo-fork-spoon-gold-86311909.jpg"} />
          </div>
          <div class="col-lg-4 col-4 col-md-4 col-sm-4">
            <div id="divider" style={{ width: "100%", marginTop: "2rem", height: "2px", backgroundColor: "#e9b466" }}></div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Error while loading" />
        ) : (
          <div class="row mt-5" style={{ padding: "5px", margin: "auto" }}>
            {pizzas.map((pizza) => (
              <div class="col-12 col-md-6 col-lg-4 col-sm-6 mt-2">
                <Pizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Homescreen;
