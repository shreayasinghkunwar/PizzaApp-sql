const { registerUser } = require("./userController");

const { server } = require("../index"); // Link to your server file
const request = require("supertest");
//const request = supertest(app);
//const test = require("ava");
const { knex } = require('../config/db/index');

// importing mock user data
const { user, user2 } = require("./mockData");

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
        // jest.setTimeout(10000)
        const res = await request("localhost:5000/api/users").post("/register").send(user)
        expect(res.statusCode).toEqual(201)
        expect(res.body[0].name).toBe(user.name);
        expect(res.body[0].created_at).toBeTruthy();
        expect(res.body[0].updated_at).toBeTruthy()
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

describe('Login User', () => {

    afterEach(async () => {
        // clearing the test user from database after every test
        await knex('users').where('email', user.email).del();
        async () => {
            await server.close(() => {
                process.exit(1);
            });
        }
    })
    it('shoud return status code 200 for userlogin', async () => {
        const res = await request('localhost:5000/api/users').post('/register').send(user)
        const login = {
            email: res.body[0].email,
            password: res.body[0].password
        }
        const logUser = await request('localhost:5000/api/users').post('/login').send(login);
        expect(logUser.statusCode).toEqual(200)
        expect(logUser.body.success).toBe(true)
        // console.log('logUser body', logUser.body)

    })

})

describe('Get all users', () => {


    afterEach(async () => {
        // clearing the test pizza from database after every test
        await knex('users').where('email', user.email).del();
        await knex('users').where('email', user2.email).del();
        async () => {
            await server.close();
        }

    })

    // inserting mock datas
    beforeEach(async () => {
        const res = await request('localhost:5000/api/users').post('/register').send(user)
        const res2 = await request('localhost:5000/api/users').post('/register').send(user2)
    })

    it('returns statuscode 200', async () => {
        const response = await request('localhost:5000/api/users').get('/getallusers')
        expect(response.statusCode).toEqual(200)
    })
    it('returns all users in database', async () => {
        const response = await request('localhost:5000/api/users').get('/getallusers')
        expect(response.body.length).toBeGreaterThan(0);
    })
})
