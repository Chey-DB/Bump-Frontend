import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "./store";

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import LoggedNav from '.';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('LoggedNav', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <LoggedNav />
      </Provider>
    )
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the LoggedNav component', () => {
    expect(screen.getByTestId('logged-nav')).toBeInTheDocument();
  });
})

