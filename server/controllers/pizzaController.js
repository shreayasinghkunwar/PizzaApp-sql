const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');

//  Inserting a Pizza
const PIZZA_TABLE_NAME = "pizzas";
// 
exports.insertPizza = async (req, res) => {
    const pizza = req.body


    try {

        const insertedPizza = await knex('pizzas')
            .insert({
                name: pizza.name,
                image: pizza.image,
                varients: ["small", "medium", "large"],
                description: pizza.description,
                category: pizza.category,
                prices: [pizza.prices]
            })
            .returning("*");

        //  console.log('inserted', insertedPizza);
        //  console.log('prices', insertedPizza[0].prices[0].medium);
        // console.log('varis', insertedPizza[0].varients[1]);

        res.status(201).json(insertedPizza);

    } catch (error) {
        res.json({ message: error })
    }
}

// get all pizzas

exports.getAllPizza = async (req, res) => {
    // console.log('hi')
    try {
        // console.log('hi')
        const pizzas = await knex('pizzas')
            .select(`${PIZZA_TABLE_NAME}.*`)
        res.status(200).send(pizzas);

    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

}

exports.updatePizza = async (req, res) => {
    const updatedPizza = req.body.updatedPizza;
    // console.log('hii', updatedPizza)
    // const pizza = req.body;

    try {
        const pizza = await knex('pizzas')
            .where({ id: updatedPizza.id })
            .update({
                name: updatedPizza.name,
                image: updatedPizza.image,
                // varients: pizza.varients,
                description: updatedPizza.description,
                category: updatedPizza.category,
                prices: [updatedPizza.prices]
            })
            .returning("*");
        console.log(pizza)

        res.status(200).send(pizza);

    } catch (err) {
        res.json({ message: err })

    }
}

exports.deletePizza = async (req, res) => {
    const pizzaId = req.body.pizzaId;
    try {
        const deletePizza = await knex('pizzas')
            .where({ id: pizzaId })
            .del();
        res.status(200).send('pizza deleted')

    } catch (err) {
        res.json({ message: err })
    }
}
