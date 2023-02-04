const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');


exports.placeOrder = async (req, res) => {
    const { checkoutInfo, user, cartItems } = req.body;
    const User = user[0]
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

        const orderid = insertedOrder[0].id;
        const amountPaid = insertedOrder[0].orderAmount
        const insertedPayment = await knex('payment')
            .insert({
                userid: User.id,
                orderid: orderid,
                paidAmount: amountPaid
            })
            .returning("*");




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
}

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
}