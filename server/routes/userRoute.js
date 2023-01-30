const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')
const jwt = require('jsonwebtoken');
const USER_TABLE_NAME = "users";

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    console.log('req', req.body);
    try {
        const insertedUser = await knex(USER_TABLE_NAME)
            .insert({ name, email, password })
            .returning("*");

        console.log('inserted', insertedUser);

        res.status(200).send(insertedUser);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
});

const secret = 'test'

router.post('/login', async (req, res) => {
    console.log('i am apiii', req.body)
    const { email, password } = req.body;
    try {
        console.log('i am in apiii', req.body)
        const user = await knex(USER_TABLE_NAME)
            .where({
                email: email,
                password: password
            })
        console.log('result', user)

        if (password === user[0].password) {
            const token = jwt.sign({ username: user[0].email }, secret);
            const currentUser = {
                success: true,
                token: token,
                user,
            }
            console.log('token', currentUser)
            res.status(200).send(currentUser);
        } else {
            res.status(400).json({
                message: 'Login Failed'
            })
        }


    } catch (error) {
        res.status(404).json({
            message: "Something went wrong"
        })
    }
})

router.get('/getallusers', async (req, res) => {

    try {
        const Users = await knex('users')
            .select(`${USER_TABLE_NAME}.*`)

        console.log('got', Users);
        res.status(200).send(Users);
    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

})

module.exports = router;