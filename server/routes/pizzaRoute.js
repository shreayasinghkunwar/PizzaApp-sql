const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')
const { insertPizza, getAllPizza, updatePizza, deletePizza } = require("../controllers/pizzaController");
const PIZZA_TABLE_NAME = "pizzas";


router.post('/addPizza', insertPizza);

router.get('/getAllPizzas', getAllPizza)

router.post('/getpizzabyid', updatePizza)

router.post('/deletepizza', deletePizza)

module.exports = router;