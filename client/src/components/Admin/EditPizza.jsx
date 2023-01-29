import React, { useEffect, useState } from "react";
import SideBar from "../../screens/admin/SideBar";
import "../../screens/admin/adminScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success";

const EditPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { pizzaId } = useParams();
  const getPizzaByState = useSelector((state) => state.getPizzaByIDReducer);
  const { loading, error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIDReducer);
  const { updateloading, updatesuccess, updateerror } = updatePizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id === pizzaId) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(pizzaId));
      }
    } else {
      dispatch(getPizzaById(pizzaId));
    }
  }, [pizza, dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: pizzaId,
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
    dispatch(updatePizza(updatedPizza));
  };
  return (
    <>
      {updateloading && <Loader />}
      {error && <Error error="updating pizza fail" />}
      <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }}>
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
                  Update Pizza
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPizza;
