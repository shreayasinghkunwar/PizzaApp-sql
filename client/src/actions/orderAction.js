import axios from 'axios';

export const placeOrder = (checkoutInfo) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const user = currentUser.user
    const cartItems = getState().cartReducer.cartItems
    try {

        const response = await axios.post('http://localhost:4000/api/orders/placeorder', { checkoutInfo, user, cartItems });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        alert('Order has been placed.');

        console.log(response)
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAIL' });
        console.log(error);
    }


}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    const userid = currentUser.user[0]._id;
    dispatch({
        type: 'USER_ORDER_REQUEST'
    })
    try {
        console.log('order', userid)
        const response = await axios.post('http://localhost:4000/api/orders/getuserorder',
            { userid: userid });
        console.log(response)
        dispatch({ type: 'USER_ORDER_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'USER_ORDER_FAIL', payload: error });
    }
}
export const getAllOrders = () => async (dispatch, getState) => {
    // const currentUser = getState().loginUserReducer.currentUser;
    // const userid = currentUser.user[0]._id;
    dispatch({
        type: 'ALL_ORDER_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:4000/api/orders/alluserorder');
        dispatch({ type: 'ALL_ORDER_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'ALL_ORDER_FAIL', payload: error });
    }
}