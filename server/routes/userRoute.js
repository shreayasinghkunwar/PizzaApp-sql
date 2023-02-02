const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');
const { registerUser } = require("../controllers/userController");

const jwt = require('jsonwebtoken')

const USER_TABLE_NAME = "users";

router.post("/register", registerUser);

const secret = "test"

router.post('/login', async (req, res) => {
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
            console.log('token', currentUser)
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