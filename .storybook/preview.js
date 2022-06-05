import { Provider } from 'react-redux';

import { store } from '../src/configureStore';
import { Providers } from '../src/Providers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Providers>
        <Story />
      </Providers>
    </Provider>
  ),
];
