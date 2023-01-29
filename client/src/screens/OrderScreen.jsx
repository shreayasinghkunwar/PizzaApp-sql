import React, { useEffect } from 'react';
import { getUserOrders } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';

const OrderScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserOrders());
    })
    return (
        <div>
            <h1>Order</h1>

        </div>
    )
}

export default OrderScreen;
