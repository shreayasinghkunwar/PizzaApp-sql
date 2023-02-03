const app = require("./index");

const server = app.listen(process.env.PORT || 7000, () => {
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