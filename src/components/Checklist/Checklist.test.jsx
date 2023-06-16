import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup, waitFor } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

import Checklist from '.';

describe('LoggedNav', () => {
  
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Checklist />
      </MemoryRouter>
    )
  });
  
  afterEach(() => {
    cleanup();
  });


  it('renders checklist div', async () => {
    const checklistDiv = screen.getByTestId('checklist');
    expect(checklistDiv).toBeInTheDocument();
  })

});
