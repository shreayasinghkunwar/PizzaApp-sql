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

router.get("/alluserorder", async (req, res) => {
    const { userid } = req.body;
    try {
        const orders = await knex('orders')
            .select(`${PIZZA_TABLE_NAME}.*`)
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error: error.stack,
        })
    }
})


module.exports = router;