
// mock user data
exports.user = {
    name: "tinasha Kc",
    email: "tinasha@gmail.com",
    password: "123456789"

}
exports.user2 = {
    name: "tishani Kc",
    email: "tishan1@gmail.com",
    password: "123456789"

}


// mock order data
exports.order = {
    // user: [{ "id": "180f5dca-1605-4679-a702-b3e96a5376e5" }],
    cartItems: [{ "name": "marge" }],
    checkoutInfo: {
        "number": "9841405051",
        address: "ktm",
        message: "test",
        subTotal: 900
    },
    isDelivered: "Pending"

}

//mock data for one pizza
exports.pizza = {
    name: "Chicken Golden ",

    price: [
        {
            "small": 249,
            "medium": 349,
            "large": 599
        }
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight"

}


//mock data for mutiple pizzas
exports.pizzas = [{
    name: "Chicken Golden ",

    price: [
        {
            "small": 249,
            "medium": 349,
            "large": 599
        }
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight"

},
{
    name: "Chicken Pizzeria ",

    price: [
        {
            "small": 249,
            "medium": 349,
            "large": 599
        }
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight"

}]

