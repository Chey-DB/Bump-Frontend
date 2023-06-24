import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MotivationalQuote from './index';
import { beforeAll, afterAll, afterEach, expect, test } from 'vitest';
import { describe, it, beforeEach } from 'vitest'; 
import { screen, render, cleanup } from '@testing-library/react'; 

const server = setupServer(
  rest.get('http://localhost:3000/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        { text: 'Sample Quote' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the MotivationalQuote component with a quote', async () => {
  render(<MotivationalQuote />);

  const quoteElement = screen.getByText('quote-header');

  expect(quoteElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
})

