export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        id: pizza.id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        pizza: pizza.prices[0][varient] * quantity,
    };
    if (cartItem.quantity > 10) {
        alert('You can only add 10 pizzas')
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: pizza });
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)
            )
        } else {

            dispatch({
                type: "ADD_TO_CART", payload: {
                    name: pizza.name,
                    id: pizza.id,
                    image: pizza.image,
                    varient: varient,
                    quantity: Number(quantity),
                    prices: pizza.prices,
                    pizza: pizza.prices[0][varient] * quantity,
                }
            });
            console.log('cartitem', cartItem);
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cartReducer.cartItems)

            );
            console.log('cartitems', JSON.stringify(getState().cartReducer.cartItems));
        }
    }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cartReducer.cartItems)
    )

}