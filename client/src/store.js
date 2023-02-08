import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllPizzaReducer, addPizzaReducer, getPizzaByIDReducer, updatePizzaByIDReducer } from './reducers/pizzaReducer'
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer } from './reducers/orderReducer';


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
export const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    cartReducer: cartReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIDReducer: getPizzaByIDReducer,
    updatePizzaByIDReducer: updatePizzaByIDReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
    allUserOrdersReducer: allUserOrdersReducer
})
const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    },
    cartReducer: {
        cartItems: cartItems

    }
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;