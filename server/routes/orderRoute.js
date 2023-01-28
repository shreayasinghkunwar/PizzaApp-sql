const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')

const PIZZA_TABLE_NAME = "orders";




router.post('/placeorder', async (req, res) => {
    //  const { checkoutInfo, user, cartItems } = req.body;
    //  console.log('i am user', user[0]);

    console.log('i am order', req.body)
    try {
        const order = req.body
        const insertedOrder = await knex('orders')
            .insert({
                userid: order.userid,
                orderitems: order.orderitems,
                phoneNumber: order.phoneNumber,

                shippingAddress: order.shippingAddress,
                message: order.message,
                orderAmount: order.orderAmount,
                isDelivered: 'Pending'
            })
            .returning("*");

        console.log('inserted', insertedOrder);

        res.status(201).json({
            success: true,
            message: 'Order success',
            data: insertedOrder
        });

    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
})
module.exports = router;