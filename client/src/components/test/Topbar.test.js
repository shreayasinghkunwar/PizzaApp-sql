import React, { useState as useStateMock } from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Topbar from '../Topbar';
import { useNavigate, BrowserRouter } from "react-router-dom";

import { rootReducer } from '../../store';

const store = createStore(rootReducer);


test('Navbar component', () => {
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