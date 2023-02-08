const { registerUser } = require("./userController");

const { server } = require("../index"); // Link to your server file
const request = require("supertest");
//const request = supertest(app);
//const test = require("ava");
const { knex } = require('../config/db/index');

// importing mock user data
const { user } = require("./mockData");

beforeAll(async () => {
    async () => {
        await server.close(() => {
            process.exit(1);
        });
    }
})


// testing register order
describe('Register user', () => {

    afterEach(async () => {
        // clearing the test user from database after every test

        await knex('users').where('email', user.email).del();
        async () => {
            await server.close(() => {
                process.exit(1);
            });
        }
    })


    it("returns 201 if user in inserted", async () => {
        jest.setTimeout(10000)
        const res = await request("localhost:5000/api/users").post("/register").send(user)
        expect(res.statusCode).toEqual(201)


    });

    it("Should save user to database", async () => {
        jest.setTimeout(10000)
        const res = await request("localhost:5000/api/users").post("/register").send(user)
        expect(res.body[0].name).toBe(user.name);
        expect(res.body[0].id).toBeTruthy();
        expect(res.body[0].created_at).toBeTruthy();
        expect(res.body[0].updated_at).toBeTruthy()

    })

})
