const express = require('express');
const router = express.Router();
const { knex } = require('../config/db/index');
const { registerUser, userLogin, getAllUsers } = require("../controllers/userController");

const jwt = require('jsonwebtoken')

const USER_TABLE_NAME = "users";

router.post("/register", registerUser);

const secret = "test"

router.post('/login', userLogin)

router.get('/getallusers', getAllUsers)


module.exports = router;