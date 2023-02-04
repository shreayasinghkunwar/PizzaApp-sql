const { registerUser } = require("./userController");
const { server } = require("../app"); // Link to your server file
const request = require("supertest");

const { knex } = require('../config/db/index');

// importing mock data
const { user, user2, order } = require("./mockData");

afterAll(async () => {
    async () => {
        await server.close(() => {
            process.exit(1);
        });
    }
})


describe('Placing order', () => {

    jest.setTimeout(10000)
    it("returns 201 if order is inserted", async () => {
        jest.setTimeout(10000);

        // placing order for user
        const insertedUser = await request("localhost:5000/api/users").post("/register").send(user);
        const orderToInsert = { ...order, user: [{ id: insertedUser.body[0].id }] }
        const insertedOrder = await request("localhost:5000/api/orders").post("/placeorder").send(orderToInsert)

        expect(insertedOrder.statusCode).toEqual(201);

        // clearing the test user from t7@gmail.com'database after every test
        await knex('payment').where('orderid', insertedOrder.body.data[0].id).del();
        await knex('orders').where('id', insertedOrder.body.data[0].id).del();
        await knex('users').where('id', insertedUser.body[0].id).del();


    });


    jest.setTimeout(10000)
    it("returns  Success if order is Placed", async () => {
        jest.setTimeout(10000);
        // placing order for user
        const insertedUser = await request("localhost:5000/api/users").post("/register").send(user);
        const orderToInsert = { ...order, user: [{ id: insertedUser.body[0].id }] }
        const insertedOrder = await request("localhost:5000/api/orders").post("/placeorder").send(orderToInsert)

        expect(insertedOrder.body.message).toEqual('Order success');

        // clearing the test user from t7@gmail.com'database after every test
        await knex('payment').where('orderid', insertedOrder.body.data[0].id).del();
        await knex('orders').where('id', insertedOrder.body.data[0].id).del();
        await knex('users').where('id', insertedUser.body[0].id).del();


    });
});

describe("Get user's order", () => {
    jest.setTimeout(10000);
    // placing order for user
    it("returns 201 if order is inserted", async () => {
        const insertedUser = await request("localhost:5000/api/users").post("/register").send(user);
        const orderToInsert = { ...order, user: [{ id: insertedUser.body[0].id }] }
        const insertedOrder = await request("localhost:5000/api/orders").post("/placeorder").send(orderToInsert)
        const getOrder = await request("localhost:5000/api/orders").post("/getuserorder").send({ userid: insertedUser.body[0].id })

        expect(getOrder.statusCode).toEqual(200);
        expect(getOrder.body[0]).toBeTruthy();

        // clearing the test user from t7@gmail.com'database after every test
        await knex('payment').where('orderid', insertedOrder.body.data[0].id).del();
        await knex('orders').where('id', insertedOrder.body.data[0].id).del();
        await knex('users').where('id', insertedUser.body[0].id).del();
    })
})

// Get all orders

describe("Get all users order", () => {
    jest.setTimeout(10000);
    // placing order for user
    it("returns 200 if orders are recieved", async () => {

        //adding users
        const insertedUser1 = await request("localhost:5000/api/users").post("/register").send(user);
        const orderToInsert1 = { ...order, user: [{ id: insertedUser1.body[0].id }] }
        const insertedOrder1 = await request("localhost:5000/api/orders").post("/placeorder").send(orderToInsert1)

        const insertedUser2 = await request("localhost:5000/api/users").post("/register").send(user2);
        const orderToInsert2 = { ...order, user: [{ id: insertedUser2.body[0].id }] }
        const insertedOrder2 = await request("localhost:5000/api/orders").post("/placeorder").send(orderToInsert2);

        const getAllOrder = await request("localhost:5000/api/orders").get("/alluserorder");

        expect(getAllOrder.statusCode).toEqual(200);

        // clearing the test datas from 'database after  test
        await knex('payment').where('orderid', insertedOrder1.body.data[0].id).del();
        await knex('orders').where('id', insertedOrder1.body.data[0].id).del();
        await knex('users').where('id', insertedUser1.body[0].id).del();
        await knex('payment').where('orderid', insertedOrder2.body.data[0].id).del();
        await knex('orders').where('id', insertedOrder2.body.data[0].id).del();
        await knex('users').where('id', insertedUser2.body[0].id).del();
    })
})