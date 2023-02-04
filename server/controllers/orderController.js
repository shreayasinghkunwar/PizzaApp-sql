const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');


exports.placeOrder = async (req, res) => {
    const { checkoutInfo, user, cartItems } = req.body;
<<<<<<< HEAD
    //console.log('i am user', user[0]);
    const User = user[0]
    //  console.log('i am order', req.body)
=======
    const User = user[0]
>>>>>>> 97ad63564be9a808b919ccdc71cfb2fe862fbf81
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

<<<<<<< HEAD
        //        console.log(' order inserted', insertedOrder[0].id);
=======
>>>>>>> 97ad63564be9a808b919ccdc71cfb2fe862fbf81
        const orderid = insertedOrder[0].id;
        const amountPaid = insertedOrder[0].orderAmount
        const insertedPayment = await knex('payment')
            .insert({
                userid: User.id,
                orderid: orderid,
                paidAmount: amountPaid
            })
            .returning("*");

<<<<<<< HEAD
        //  console.log('inserted', insertedOrder);
        //console.log('inserted payment', insertedPayment);

        res.status(404).json({
=======



        res.status(201).json({
>>>>>>> 97ad63564be9a808b919ccdc71cfb2fe862fbf81
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
<<<<<<< HEAD
=======

exports.getUserOrder = async (req, res) => {

    const user = req.body;

    try {
        const order = await knex.select('*')
            .from('orders')
            .where('orders.userid', user.userid)
            .join('payment', 'orders.id', 'payment.orderid')

        res.status(200).send(order)


    } catch (error) {
        res.status(400).json({
            message: 'Something went Wrong',
            error: error.stack,
        });
    }
}

exports.getAllUserOrders = async (req, res) => {

    try {
        const orders = await knex.select(`*`)
            .from("orders")
            .join('payment', 'orders.id', 'payment.orderid')

        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error: error.stack,
        })
    }
}
>>>>>>> 97ad63564be9a808b919ccdc71cfb2fe862fbf81
