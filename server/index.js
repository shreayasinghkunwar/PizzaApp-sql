const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

dotenv.config();


app.use("/api/users", require('./routes/userRoute'));
app.use('/api/pizzas', require('./routes/pizzaRoute'));

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening to port: ${process.env.PORT}`);
})

//unhandled promise rejetcion
process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server  ")
    server.close(() => {
        process.exit(1);
    })
})