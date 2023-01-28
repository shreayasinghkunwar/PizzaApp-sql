const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index')

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