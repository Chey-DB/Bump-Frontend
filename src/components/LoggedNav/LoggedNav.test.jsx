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


  it('Should have dashboard link', () => {
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i});
    expect(dashboardLink).toBeInTheDocument();
  });

  it('Should have calendar link', () => {
    const calendarLink = screen.getAllByRole('link', { name: /calendar/i});
    expect(calendarLink).toBeInTheDocument();
  });

  it('Should have community link', () => {
    const communityLink = screen.getAllByRole('link', { name: /community/i});
    expect(communityLink).toBeInTheDocument();
  });

  it('Should have journal link', () => {
    const journalLink = screen.getAllByRole('link', { name: /my-journal/i});
    expect(journalLink).toBeInTheDocument();
  });

  it('Should have faqs link', () => {
    const faqsLink = screen.getAllByRole('link', { name: /FAQs/i});
    expect(faqsLink).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
})

})

