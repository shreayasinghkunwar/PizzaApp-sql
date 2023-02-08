const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');

//  Inserting a Pizza
const PIZZA_TABLE_NAME = "pizzas";
// 
/**
 * Controller to insert pizza in the database --by admin
 * 
 * @param {*} req - request pizza data from body
 * @param {*} res - response by inserting pizza in the database
 */
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
        res.status(201).json(insertedPizza);

    } catch (error) {
        res.json({ message: error })
    }
}

// get all pizzas
/**
 * contorller to get all pizzas from the database
 * 
 * @param {*} req 
 * @param {*} res - response with every data of pizza contained in the database
 */
exports.getAllPizza = async (req, res) => {
    try {

        //selects every data from pizza database table
        const pizzas = await knex('pizzas')
            .select(`${PIZZA_TABLE_NAME}.*`)
        res.status(200).send(pizzas);

    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

}

/**
 * Contoller to update pizza inside the database
 * 
 * @param {*} req - request pizza id from the database to be updated
 * @param {*} res - respose with success status code by updating pizza or error statuscode with error message
 */

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

        res.status(200).send(pizza);

    } catch (err) {
        res.json({ message: err })

    }
}

/**
 * Contoller to delete pizza's from database
 * 
 * @param {*} req - request pizza id to be deleted from the body    
 * @param {*} res - response with sucess status code by removing the pizza from database or error status code with error message
 */
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
