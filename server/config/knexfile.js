require("dotenv").config();
console.log(process.env.DATABASE_CONNECTION_STRING)
module.exports = {
    client: "pg",
    connection: "postgres://djrqfwtl:Scm991gPWghzmZpiysIsyfXqS5c7ThKE@satao.db.elephantsql.com/djrqfwtl"
};
