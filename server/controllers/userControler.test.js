const { registerUser } = require("./userController");
const { server } = require("../app"); // Link to your server file
const request = require("supertest");
//const request = supertest(app);
//const test = require("ava");
const { knex } = require('../config/db/index');

describe('Register user', () => {
    const user = {
        name: "t2 Kc",
        email: "t7@gmail.com",
        password: "123456789"
    }
    afterEach(async () => {
        // clearing the test user from database after every test
        await knex('users').where('email', 't7@gmail.com').del();
        async () => {
            await server.close(() => {
                process.exit(1);
            });
        }
    })
    // jest.setTimeout(10000)
    it("returns 201 if user in inserted", async () => {
        // jest.setTimeout(10000)
        const res = await request("localhost:5000/api/users").post("/register").send(user)
        expect(res.statusCode).toEqual(201)
        expect(res.body[0].name).toBe(user.name);
        expect(res.body[0].created_at).toBeTruthy();
        expect(res.body[0].updated_at).toBeTruthy()
    });

    it("Should save user to database", async () => {
        const res = await request("localhost:5000/api/users").post("/register").send(user)
        expect(res.body[0].name).toBe(user.name);
        expect(res.body[0].id).toBeTruthy();
        expect(res.body[0].created_at).toBeTruthy();
        expect(res.body[0].updated_at).toBeTruthy()
    })
})

describe('Login User', () => {
    const user = {
        name: 'Ratish',
        email: 'ratish890@gmail.com',
        password: 'password'
    }
    afterEach(async () => {
        // clearing the test user from database after every test
        await knex('users').where('email', 'ratish890@gmail.com').del();
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

    it('returns statuscode 200', async () => {
        const res = await request('localhost:5000/api/users').get('/getallusers')
        expect(res.statusCode).toEqual(200)
    })
    it('returns all users in database', async () => {
        const res = await request('localhost:5000/api/users').get('/getallusers')
        expect(res.body.length).toBeGreaterThan(0);
    })
})
