import React, { useEffect } from "react";
import SideBar from "../../screens/admin/SideBar";
// import Pizza from "../Pizza";

import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import { Link } from "react-router-dom";

const AllPizzas = () => {
    const dispatch = useDispatch();
    const pizzaState = useSelector((state) => state.getAllPizzaReducer);
    const { loading, pizzas, error } = pizzaState;

    useEffect(() => {
        dispatch(getAllPizzas());
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
                                    <tbody style={{}}>
                                        {pizzas &&
                                            pizzas.map((pizza, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{pizza.name}</td>
                                                    <td>
                                                        Small:{pizza.prices[0]["small"]}
                                                        <br></br>Medium:{pizza.prices[0]["medium"]}
                                                        <br />
                                                        Large:{pizza.prices[0]["large"]}
                                                    </td>
                                                    <td>{pizza.name}</td>
                                                    <td>
                                                        <Link to={`/admin/editpizza/${pizza._id}`}>
                                                            <i
                                                                class="bi bi-pen-fill"
                                                                style={{ cursor: "pointer" }}
                                                            ></i>
                                                            &nbsp; &nbsp;
                                                            <i
                                                                class="bi bi-trash-fill"
                                                                style={{ color: "red", cursor: "pointer" }}
                                                                onClick={() => {
                                                                    dispatch(deletePizza(pizza._id));
                                                                }}
                                                            ></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllPizzas;
