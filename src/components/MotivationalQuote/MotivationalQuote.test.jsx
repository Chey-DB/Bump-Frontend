// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import MotivationalQuote from './index';
// import { beforeAll, afterAll, afterEach, expect, test } from 'vitest';

// const server = setupServer(
//   rest.get('https://type.fit/api/quotes', (req, res, ctx) => {
//     return res(
//       ctx.json([
//         { text: 'Sample Quote' }
//       ])
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('renders the MotivationalQuote component with a quote', async () => {
//   render(<MotivationalQuote />);

//   const quoteElement = await screen.findByTestId('quote');

//   expect(quoteElement).toBeInTheDocument();
// });