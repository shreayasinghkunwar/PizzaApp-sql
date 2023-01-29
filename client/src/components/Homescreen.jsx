import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "./Loader";
import Error from "./Error";

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div class="container">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Error while loading" />
        ) : (
          <div class="row mt-5" style={{ padding: "5px", margin: "auto" }}>
            {pizzas.map((pizza) => (
              <div class="col-12 col-md-6 col-lg-3 col-sm-6">
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
