import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../screens/admin/SideBar'
import "../../screens/admin/adminScreen.css";
import { getAllUsers } from '../../actions/userAction';

const AllUsers = () => {
    const userState = useSelector(state => state.getAllUsersReducer);
    const { users } = userState;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <>
            <div class="container mt-3 p-0" style={{ backgroundColor: "#8bc34a1c" }} >
                <h3 className='text-center bg-dark text-light   p-2 ' style={{ width: "100%", margin: "auto" }}>Admin Panel</h3>
                <div class="row mt-1">
                    <SideBar />
                    <div class="col-9 col-lg-9 col-md-9 col-sm-9">


                        <div class="mt-2 " style={{
                            padding: "0px", margin: "auto", height: "70vh",
                            overflow: "auto"
                        }}>

                            <table class="table " >
                                <thead>
                                    <tr>
                                        <th scope="col">Sn.</th>
                                        <th scope="col">User id</th>
                                        <th scope="col">Name</th>

                                        <th scope="col">Email</th>

                                    </tr>
                                </thead>
                                <tbody style={{}}>
                                    {
                                        users && users.map((user, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{user._id}</td>
                                                <td>{user.name} </td>
                                                <td>{user.email}</td>



                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>




                    </div>

                </div>
            </div>

        </>
    )
}

export default AllUsers
