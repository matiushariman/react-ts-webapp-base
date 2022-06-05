import { rest } from 'msw';

import type { SubmitCredentialRequestProps } from 'api/exampleApi';

export const handlers = [
  rest.post('/login', (req: { body: SubmitCredentialRequestProps }, res, ctx) => {
    const { email, password } = req.body;

    return email === 'matius.hariman@gmail.com' && password === 'Matius@123'
      ? res(
          // Respond with a 200 status code
          ctx.status(200),
          ctx.json({ success: true }),
        )
      : res(ctx.status(400));
  }),
];
