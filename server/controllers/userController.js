const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');

// Register user
const USER_TABLE_NAME = "users";

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body
    // console.log('req', req.body);
    try {
        const user = await knex(USER_TABLE_NAME)
            .where({ email });
        if (user) {
            const insertedUser = await knex(USER_TABLE_NAME)
                .insert({ name, email, password })
                .returning("*");
            // console.log('inserted', insertedUser);

            res.status(201).json(insertedUser);
        }



    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}