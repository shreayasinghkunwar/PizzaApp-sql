import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "./Loader";
import Error from "./Error";
import "../App.css"

const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>





      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

        </div>
        <div class="carousel-inner mt-5">
          <div class="carousel-item active " >
            <img src={"https://cdn.dribbble.com/users/8300847/screenshots/15967671/untitled-1_4x.jpg"}
              class="d-block w-100 h-100 opacity-3" alt="pic" />

            <div class="carousel-caption ">

            </div>
          </div>
          <div class="carousel-item">

            <img src={"https://static.picmaker.com/scene-prebuilts/thumbnails/FA-0009.png"}
              class="d-block w-100 h-100 opacity-3" alt="pic" />

            <div class="carousel-caption ">


            </div>
          </div>




        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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
