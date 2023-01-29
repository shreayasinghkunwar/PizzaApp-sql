import axios from 'axios'

export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('http://localhost:4000/api/pizzas/getAllPizzas')
        console.log(res)
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err })
    }
};
export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZAS_REQUEST' })
    try {
        const res = await axios.post('http://localhost:4000/api/pizzas/addPizza', { pizza })
        dispatch({ type: 'ADD_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'ADD_PIZZAS_FAIL', payload: err })
    }
};
export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: 'GET_PIZZABYID_REQUEST' })
    try {
        const res = await axios.post('http://localhost:4000/api/pizzas/getpizzabyid', { pizzaId })
        dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZABYID_FAIL', payload: err })
    }
};
export const updatePizza = (updatedPizza) => async (dispatch) => {
    dispatch({ type: 'UPDATE_PIZZABYID_REQUEST' })
    try {
        const res = await axios.post('http://localhost:4000/api/pizzas/updatepizza', { updatedPizza })
        dispatch({ type: 'UPDATE_PIZZABYID_SUCCESS', payload: res.data })
        window.location.href = '/admin/pizzalist'
    } catch (err) {
        dispatch({ type: 'UPDATE_PIZZABYID_FAIL', payload: err })
    }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:4000/api/pizzas/deletepizza', { pizzaId })
        alert('Pizza Deleted Sucessfully');
        window.location.href = '/admin/pizzalist'
        console.log(res)

    } catch (error) {
        alert('Pizza Delete Uncessfully')

    }

}