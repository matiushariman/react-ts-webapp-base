import { render } from 'utils/testUtils';

import App from '..';

describe('App', () => {
  const setup = () => render(<App />);

  describe('happy', () => {
    it('renders landing page', async () => {
      setup();

      expect(window.location.pathname).toEqual('/');
    });
  });
});
