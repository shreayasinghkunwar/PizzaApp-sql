const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');


exports.placeOrder = async (req, res) => {
    const { checkoutInfo, user, cartItems } = req.body;
    //console.log('i am user', user[0]);
    const User = user[0]
    //  console.log('i am order', req.body)
    try {
        const order = req.body
        const insertedOrder = await knex('orders')
            .insert({
                userid: user[0].id,
                orderitems: cartItems,
                phoneNumber: checkoutInfo.number,
                shippingAddress: checkoutInfo.address,
                message: checkoutInfo.message,
                orderAmount: checkoutInfo.subTotal,
                isDelivered: 'Pending'
            })
            .returning("*");

        //        console.log(' order inserted', insertedOrder[0].id);
        const orderid = insertedOrder[0].id;
        const amountPaid = insertedOrder[0].orderAmount
        const insertedPayment = await knex('payment')
            .insert({
                userid: User.id,
                orderid: orderid,
                paidAmount: amountPaid
            })
            .returning("*");

        //  console.log('inserted', insertedOrder);
        //console.log('inserted payment', insertedPayment);

        res.status(404).json({
            success: true,
            message: 'Order success',
            data: insertedOrder
        });

    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
}
