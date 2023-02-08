import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../Register";
import { Provider } from "react-redux";
import store from "../../store.js";
import { BrowserRouter } from "react-router-dom";


describe("<Register />", () => {

    it('Should check whether user can input data`', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Register />
                </BrowserRouter>
            </Provider>
        );
        const inputName = screen.getByTestId('name');
        inputName.value = 'test'
        const inputEmail = screen.getByTestId('email');
        inputEmail.value = "test@gmail.com"
        const inputPassword = screen.getByTestId('password');
        inputPassword.value = "password"
        const inputConfirmPassword = screen.getByTestId('confirm-password');
        inputConfirmPassword.value = inputPassword.value

        expect(inputName.value).toBe('test')
        expect(inputEmail.value).toBe('test@gmail.com')
        expect(inputPassword.value).toBe('password')
        expect(inputConfirmPassword.value).toBe('password')
    })

    it("Should render the render correctly", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Register />
                </BrowserRouter>
            </Provider>
        );
        const textElement = screen.getByText('Go To Home')
        expect(textElement).toBeInTheDocument();
    });

    it("should navigate to home page on click", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Register />
                </BrowserRouter>
            </Provider>
        )

        const button = screen.getByTestId("button");
        fireEvent.click(button);

        // Assert that the location has changed to the home page
        expect(window.location.pathname).toBe("/");
    });



});





