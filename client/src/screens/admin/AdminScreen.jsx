import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './SideBar';

const AdminScreen = () => {
    const userState = useSelector(state => state.loginUserReducer);
    const { currentUser } = userState;
    useEffect(() => {
        if (localStorage.getItem('currentUser') === null || !currentUser.user[0].isAdmin) {
            window.location.href = "/";
        }
    }, [])
    return (

        <>
            <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }} >

                <h3 className='text-center bg-dark text-light   p-2 ' style={{ width: "100%", margin: "auto" }}>Admin Panel</h3>

                <div class="row mt-1">

                    <SideBar></SideBar>
                    <div class="col-8 col-lg-8 col-md-8 col-sm-12">

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminScreen
