import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login.jsx";
import { Provider } from "react-redux";
import store from "../../store.js";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import userEvent from '@testing-library/user-event'


describe("<Login />", () => {

  // it('Should check whether user can input data`', () => {
  //   //renders login page
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Login />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   const inputEmail = screen.getByTestId('email');
  //   inputEmail.value = "test@gmail.com"
  //   const inputPassword = screen.getByTestId('password');
  //   inputPassword.value = "password"

  //   expect(inputEmail.value).toBe('test@gmail.com')
  //   expect(inputPassword.value).toBe('password')
  // })

  it("Should render the elememts correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const textElement = screen.getByText(/Go To Home/);
    // console.log(textElement)

    expect(textElement).toBeInTheDocument();

  });

  it('should accept correctValue', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const inputEmail = screen.getByTestId('email');
    userEvent.type(inputEmail, 'ratish167@gmail.com');
    expect(screen.getByTestId('email')).toHaveValue('ratish167@gmail.com');

    const inputPassword = screen.getByTestId('password');
    userEvent.type(inputPassword, 'password')
    expect(screen.getByTestId('password')).toHaveValue('password')

    fireEvent.click(screen.getByTestId('login-btn'));
    expect(window.location.pathname).toBe("/");

  })

  it("should navigate to home page on click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    )

    const button = screen.getByTestId("button");
    fireEvent.click(button);

    // Assert that the location has changed to the home page
    expect(window.location.pathname).toBe("/");
  });



});





