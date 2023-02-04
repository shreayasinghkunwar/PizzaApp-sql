
const { insertPizza } = require("./pizzaController");
const { server } = require("../index");
const request = require("supertest");
const { knex } = require('../config/db/index');

// importing mock data
const { pizza, pizzas } = require("./mockData");
beforeAll(async () => {
    async () => {
        await server.close(() => {
            process.exit(1);
        });
    }
})

//  test for inserting a pizza
describe('Insert a Pizza', () => {

    jest.setTimeout(10000);

    afterEach(async () => {
        // clearing the test pizza from database after every test
        await knex('pizzas').where('name', pizza.name).del();
        async () => {
            await server.close();
        }

    })

    jest.setTimeout(10000);

    it("returns 201 if pizza is inserted", async () => {
        jest.setTimeout(10000)
        const res = await request("localhost:5000/api/pizzas").post("/addPizza").send(pizza)
        //  console.log(res.body)
        expect(res.statusCode).toEqual(201)
    });

    it("Should save pizza to database", async () => {
        const res = await request("localhost:5000/api/pizzas").post("/addPizza").send(pizza)
        expect(res.body[0].name).toBe(pizza.name);
        expect(res.body[0].id).toBeTruthy();
        expect(res.body[0].created_at).toBeTruthy();
        expect(res.body[0].updated_at).toBeTruthy();

    })


});

// Get all pizza
describe('Get all pizzas', () => {


    afterEach(async () => {
        // clearing the test pizza from database after every test
        await knex('pizzas').where('name', pizzas[0].name).del();
        await knex('pizzas').where('name', pizzas[1].name).del();
        async () => {
            await server.close();
        }

    })

    // inserting mock datas
    beforeEach(async () => {
        const res = await request("localhost:5000/api/pizzas").post("/addPizza").send(pizzas[0])
        const res2 = await request("localhost:5000/api/pizzas").post("/addPizza").send(pizzas[1])
    })



    jest.setTimeout(10000)
    it("returns 200 and if pizza is fetched", async () => {
        const response = await request("localhost:5000/api/pizzas").get("/getAllPizzas");
        expect(response.statusCode).toEqual(200)
        expect(response.body.length).toBeGreaterThan(0);

    })

})

describe("Update Pizza", () => {

    afterEach(async () => {
        // clearing the test pizza from database after every test
        await knex('pizzas').where('name', "Chicken Tikki Pizza").del();
        async () => {
            await server.close();
        }

    })


    jest.setTimeout(10000);

    it("returns 200 if pizza is updated", async () => {
        jest.setTimeout(10000);

        //inserting pizza
        const insertedPizza = await request("localhost:5000/api/pizzas").post("/addPizza").send(pizza)
        const updateData = {
            id: insertedPizza.body[0].id,
            name: "Chicken Tikki Pizza ",

            price: [
                {
                    "small": 240,
                    "medium": 340,
                    "large": 590
                }
            ],
            category: "nonveg",
            image: "/images/chicken_golden_delight.jpg",
            description:
                "Double pepper chicken, golden corn and extra cheese, true delight"
        }

        // updating pizza
        const res = await request("localhost:5000/api/pizzas").post("/getpizzabyid").send(updateData)
        expect(res.statusCode).toEqual(200)



    });
})

// deleting pizza

