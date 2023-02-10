import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "./Loader";
import Error from "./Error";
import "../App.css";
import Carousel from "../screens/Carousel";

const Homescreen = () => {
  const dispatch = useDispatch();

  {/** geting  pizzas from getAllPizzaReducers */}
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  // calling action to get all the pizzas from reducer
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>

      {/** Front page pizza Banner  */}
      <Carousel />

      {/** main Container Displaying Pizzas  */}
      <div class="container">
        <div
          class="row "
          id="divider-container"
          style={{ width: "40%", margin: "auto" }}
        >
          <div class="col-lg-4 col-4 col-md-4 col-sm-4">
            <div
              id="divider"
              style={{
                width: "100%",
                height: "2px",
                marginTop: "2rem",
                backgroundColor: "#e9b466",
              }}
            ></div>
          </div>
          <div
            class="col-lg-4 col-4 col-md-4 col-sm-4"
            style={{ textAlign: "center" }}
          >
            {/** image of plates and spoons */}
            <img
              style={{ width: "70px", height: "70px", borderRadius: "15rem" }}
              src={
                "https://thumbs.dreamstime.com/b/restaurant-logo-fork-spoon-gold-86311909.jpg"
              }
              alt=""
            />
          </div>
          {/* Displaying pizzas*/}
          <div class="col-lg-4 col-4 col-md-4 col-sm-4">
            <div
              id="divider"
              style={{
                width: "100%",
                marginTop: "2rem",
                height: "2px",
                backgroundColor: "#e9b466",
              }}
            ></div>
          </div>
        </div>
        {/**If Pizza is loading then display loader   */}
        {/**If error displaying Pizza  then display error message   */}
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Error while loading" />
        ) : (
          <div
            class="row mt-5"
            style={{ padding: "5px", margin: "auto", marginBottom: "10rem" }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>Available Pizzas</h3>
            </div>

            {/** cards displaying  available Pizzas */}
            {pizzas.map((pizza) => (
              <div class="col-12 col-md-6 col-lg-4 col-sm-6 mt-4">
                {/** Pizza component */}
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
