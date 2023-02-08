const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');

const jwt = require('jsonwebtoken')
// Register user
const USER_TABLE_NAME = "users";

/**
 * controller to register user
 * 
 * @param {*} req - request user information from the body  
 * @param {*} res - response user by success statuscode by inserting user information in the database
 */
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await knex(USER_TABLE_NAME)
            .where({ email });

        if (!user) {
            const insertedUser = await knex(USER_TABLE_NAME)
                .insert({ name, email, password })
                .returning("*");
            res.status(201).json(insertedUser);
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}


const secret = "test"
/**
 * controller for login
 * 
 * @param {*} req - request user email and password from the database
 * @param {*} res - response with success or failure statuscode
 */
exports.userLogin = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await knex(USER_TABLE_NAME)
            .where({ email, password })

        if (password === user[0].password) {
            const token = jwt.sign({ username: user[0].email }, secret);
            const currentUser = {
                success: true,
                token: token,
                user,
            }
            // console.log('token', currentUser)
            res.status(200).send(currentUser);
        } else {
            res.status(400).json({
                message: 'Login Failed'
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error
        })

    }
}
/**
 * contoller to get all users -- by admin
 * 
 * @param {*} req 
 * @param {*} res -response success status code by providing every user data form database
 */
exports.getAllUsers = async (req, res) => {

    try {
        //selects every data from user table in the database
        const Users = await knex('users')
            .select(`${USER_TABLE_NAME}.*`)
        res.status(200).send(Users);
    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

}