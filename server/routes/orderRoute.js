const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');
const { placeOrder, getUserOrder, getAllUserOrders } = require('../controllers/orderController');


// const PIZZA_TABLE_NAME = "orders";



router.post('/placeorder', placeOrder);

router.post('/getuserorder', getUserOrder)

router.get("/alluserorder", getAllUserOrders)


module.exports = router;