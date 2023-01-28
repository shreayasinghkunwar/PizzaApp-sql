const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')

const PIZZA_TABLE_NAME = "pizzas";

router.get('/getAllPizzas', async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    } catch (error) {
        res.json({ message: error })
    }
});

router.post('/addPizza', async (req, res) => {
    const pizza = req.body
    console.log("body", pizza);
    try {
        const insertedPizza = await knex('pizzas')
            .insert({
                name: pizza.name,
                image: pizza.image,
                varients: pizza.varients,
                description: pizza.description,
                category: pizza.category,
                prices: pizza.prices
            })
            .returning("*");

        console.log('inserted', insertedPizza);

        res.status(201).send('New Pizza added')

    } catch (error) {
        res.json({ message: error })
    }
});

module.exports = router;