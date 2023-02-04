const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')
const { placeOrder } = require('../controllers/orderController');


// const PIZZA_TABLE_NAME = "orders";



router.post('/placeorder', placeOrder);

router.post('/getuserorder', async (req, res) => {
    console.log('succes u\order');
    const user = req.body;
    console.log(user.userid)
    try {

        const order = await knex.select('*')
            .from('orders')
            .where('orders.userid', user.userid)
            .join('payment', 'orders.id', 'payment.orderid')
        console.log("ordersssss", order);
        res.status(200).send(order)


    } catch (error) {
        res.status(400).json({
            message: 'Something went Wrong',
            error: error.stack,
        });
    }
})

router.get("/alluserorder", async (req, res) => {
    const { userid } = req.body;
    try {
        const orders = await knex.select("*")
            .from("orders")
            .join('payment', 'orders.id', 'payment.orderid')

        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error: error.stack,
        })
    }
})


module.exports = router;