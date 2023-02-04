require("dotenv").config();
console.log(process.env.DATABASE_CONNECTION_STRING)
module.exports = {
    client: "pg",
    connection: "postgresql://postgres:123456789@localhost:5432/food"
    //connection: "postgres://djrqfwtl:Scm991gPWghzmZpiysIsyfXqS5c7ThKE@satao.db.elephantsql.com/djrqfwtl"
};
