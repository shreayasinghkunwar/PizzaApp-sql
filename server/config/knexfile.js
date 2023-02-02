require("dotenv").config();
console.log(process.env.DATABASE_CONNECTION_STRING)
module.exports = {
    client: "pg",
    connection: "postgresql://postgres:frznheart20@localhost:5433/food"
    // connection: "postgres://djrqfwtl:Scm991gPWghzmZpiysIsyfXqS5c7ThKE@satao.db.elephantsql.com/djrqfwtl"
    // connection: "postgres://tzazqmmm:naPG-R95ZDvlQX5ToLgO0EGe98rrvYSN@satao.db.elephantsql.com/tzazqmmm"
};
