import React, { useState } from "react";
import SideBar from "../../screens/admin/SideBar";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success";

const AddPizza = () => {
  const [name, setName] = useState(""); //State to set pizza name
  const [smallPrice, setSmallPrice] = useState(); //State to set price of small pizza
  const [largePrice, setLargePrice] = useState(); //State to set price of large pizza
  const [mediumPrice, setMediumPrice] = useState(); //State to set price of medium pizza
  const [image, setImage] = useState(""); //State to set image of pizza
  const [description, setDescription] = useState(""); //State to set description of pizza
  const [category, setCategory] = useState(""); //State to set category of pizza

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    // Event handle for submitting form
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "5rem" }}>
      {loading && <Loader />}
      {error && <Error error="add new pizza error" />}
      {success && <Success success="pizza added successfully" />}
      <div
        class="container mt-3 p-0"
        id="admin-container"
        style={{ backgroundColor: "#8bc34a1c" }}
      >
        <h3
          className="text-center bg-dark text-light   p-2 "
          style={{ width: "100%", margin: "auto" }}
        >
          Admin Panel
        </h3>
        <div class="row mt-1">
          <SideBar />
          <div class="col-8 col-lg-8 col-md-8 col-sm-12">
            <form class="row g-3" onSubmit={submitForm}>
              <div class="col-12">
                <label for="inputName" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col-md-4">
                <label for="inputSmallPrice" class="form-label">
                  Small Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={smallPrice}
                  onChange={(e) => setSmallPrice(e.target.value)}
                />
              </div>
              <div class="col-md-4">
                <label for="inputMediumPrice" class="form-label">
                  Medium Price
                  <input
                    type="text"
                    class="form-control"
                    value={mediumPrice}
                    onChange={(e) => setMediumPrice(e.target.value)}
                  />
                </label>
              </div>
              <div class="col-md-4">
                <label for="inputLargePrice" class="form-label">
                  Large Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={largePrice}
                  onChange={(e) => setLargePrice(e.target.value)}
                />
              </div>
              <div class="col-12">
                <label for="inputImage" class="form-label">
                  Image
                </label>
                <input
                  type="type"
                  class="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div class="col-12">
                <label for="inputDescription" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="inputDescription"
                />
              </div>
              <div class="col-12">
                <label for="inputCategory" class="form-label">
                  Category
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id="inputCategory"
                />
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Add new
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPizza;
