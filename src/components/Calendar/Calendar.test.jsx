import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react'; 

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers); 

import LoggedNav from '.';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe('LoggedNav', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <LoggedNav />
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  });

})

