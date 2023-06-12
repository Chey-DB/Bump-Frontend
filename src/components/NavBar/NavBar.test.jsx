import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach} from 'vitest'; 
import { screen, render, cleanup, findByText } from '@testing-library/react'; 

import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 

import NavBar from '.';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('NavBar', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a header and nav', () => {
    const header = screen.getByRole('banner')
    const nav = screen.getByRole('navigation')

    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });

  it('should have a link to the home page', () => {
    const homeLink = screen.getByRole('link', { name: /home/i })
    
    expect(homeLink).toBeInTheDocument();
  });

  it('should have a link to another page', () => {
    const anotherLink = screen.getByRole('link', { name: /another page/i }) //change the name to whatever link you are using
    
    expect(anotherLink).toBeInTheDocument();
  });

  it('should have a links which change color depending on if it is active', async () => {
    const homeLink = screen.getByRole('link', { name: /home/i })
    const anotherLink = screen.getByRole('link', { name: /another page/i })
    await userEvent.click(homeLink)
    expect(homeLink).toHaveStyle({color: '#ECD444'}) //color will have to be changed to match what you choose
    await userEvent.click(anotherLink)
    expect(homeLink).toHaveStyle({color: 'rgb(0, 0, 0)'}) //color will have to be changed to match what you choose
  });

});