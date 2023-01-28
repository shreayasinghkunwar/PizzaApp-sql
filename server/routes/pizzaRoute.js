const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')

const PIZZA_TABLE_NAME = "pizzas";


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
        console.log('prices', insertedPizza[0].prices[0].medium);
        console.log('varis', insertedPizza[0].varients[1]);

        res.status(201).send('New Pizza added')

    } catch (error) {
        res.json({ message: error })
    }
});

router.get('/getAllPizzas', async (req, res) => {
    console.log('hi')
    try {
        console.log('hi')
        const pizzas = await knex('pizzas')
            .select(`${PIZZA_TABLE_NAME}.*`)

        console.log('got', pizzas);
        res.status(200).send(pizzas);

    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

})

module.exports = router;