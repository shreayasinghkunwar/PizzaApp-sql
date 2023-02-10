import React, { useState as useStateMock } from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Topbar from '../Topbar';
import { useNavigate, BrowserRouter } from "react-router-dom";

import { rootReducer } from '../../store';

const store = createStore(rootReducer);


// testing Navbar component
describe("<Topbar />", () => {


    it('Home link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        fireEvent.click(homeLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/");
    });

    it('Home link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
        fireEvent.click(homeLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/");
    })

    it('Contact link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const contactLink = screen.getByText('Contact us');
        expect(contactLink).toBeInTheDocument();
        fireEvent.click(contactLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/contactus");
    })

    it('Login link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const loginLink = screen.getByText('Login');
        expect(loginLink).toBeInTheDocument();
        fireEvent.click(loginLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/login");
    })
 
    it('Register link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const registerLink = screen.getByText('Register');
        expect(registerLink).toBeInTheDocument();
        fireEvent.click(registerLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/register");
    })

    it('My cart link', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const cartLink = screen.getByTestId('cart-icon');
        expect(cartLink).toBeInTheDocument();
        fireEvent.click(cartLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/cart");
    })

    it('Cart  link', () => {
       
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Topbar />
                </BrowserRouter>

            </Provider>
        );
        const cartLink = screen.getByTestId('cart-icon');
        expect(cartLink).toBeInTheDocument();
        fireEvent.click(cartLink);

        // Assert that location has changed to the home page 
        expect(window.location.pathname).toBe("/cart");
    })
})