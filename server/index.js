const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");

app.use(express.json());
app.use(cors());

dotenv.config();

app.use(cors());
app.use("/api/users", require('./routes/userRoute'));
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use("/api/orders", require("./routes/orderRoute"))


module.exports = app 

