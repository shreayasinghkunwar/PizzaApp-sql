import React, { useState as useStateMock } from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Cart from '../Cart';
import { useNavigate, BrowserRouter } from "react-router-dom";
import { rootReducer } from '../../store';

//testing if cart component is rendered 
const store = createStore(rootReducer);
describe('Component: Button', () => {

    const item = {
        name: "pizza",
        varient: "small",
        quantity: 2,
        prices: [{ small: 500 }]
    }
    const index = 1


    it("Testing cart component", () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Cart item={item} index={index} />
                </BrowserRouter>

            </Provider>
        );
        // const contactLink = screen.getByText("HiMinusCircle");
        // expect(contactLink).toBeInTheDocument();
        expect(container).toBeInTheDocument();

    })
})
