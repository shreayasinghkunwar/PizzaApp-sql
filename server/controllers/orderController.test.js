const request = require('supertest');
const { knex } = require('../config/db/index');


describe('place order', () => {
    const user = {
        name: "XYZ",
        email: "xyz@gmail.com"
    }

})


// describe('Get all users orders', () => {
//     it('returns statuscode 200', async () => {
//         const res = await request('localhost:5000/api/orders').get('/alluserorder')
//         expect(res.statusCode).toEqual(200)
//     })
//     it('returns all users orders from database', async () => {
//         const res = await request('localhost:5000/api/orders').get('/alluserorder')
//         expect(res.body.length).toBeGreaterThan(0);
//     })
// })