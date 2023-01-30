require("dotenv").config();
console.log(process.env.DATABASE_CONNECTION_STRING)
module.exports = {
    client: "pg",
    connection: "postgresql://postgres:frznheart20@localhost:5433/food"
};
