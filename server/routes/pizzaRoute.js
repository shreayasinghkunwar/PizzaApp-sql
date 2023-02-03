const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')
const { insertPizza, getAllPizza, updatePizza } = require("../controllers/pizzaController");
const PIZZA_TABLE_NAME = "pizzas";


router.post('/addPizza', insertPizza);

router.get('/getAllPizzas', getAllPizza)

router.post('/getpizzabyid', updatePizza)

router.post('/deletepizza', async (req, res) => {
    const pizzaId = req.body.pizzaId;
    try {
        const deletePizza = await knex('pizzas')
            .where({ id: pizzaId })
            .del();
        res.status(200).send('pizza deleted')

    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;