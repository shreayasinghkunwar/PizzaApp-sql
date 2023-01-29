import axios from "axios";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';



export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        const res = await axios.post("http://localhost:4000/api/users/register", user);
        dispatch({ type: USER_REGISTER_SUCCESS });
        alert('Registered Successfully');
        window.location.href = "/"
    } catch (error) {

        dispatch({ type: USER_REGISTER_FAIL, payload: error });
        alert('Failed to register');
        window.location.href = "/"
    }
}

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        console.log("i am action", user)
        const response = await axios.post('http://localhost:4000/api/users/login', user);
        console.log(response)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        console.log('from actiom', response.data);
        alert('Login Sucess');
        window.location.href = "/"


    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error });
        alert('Login Failed');

    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    alert('Logged out successfully.');
    window.location.href = "/"
}

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: 'GET_USERS_REQUEST' })
    try {
        const res = await axios.get('http://localhost:4000/api/users/getallusers')
        console.log(res)
        dispatch({ type: 'GET_USERS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_USERS_FAIL', payload: err })
    }
};