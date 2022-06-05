import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { configureStore, PreloadedState } from 'configureStore';

import { Providers } from '../Providers';

import type { ReactElement, ComponentType } from 'react';

export type AllTheProvidersProps = {
  children: ReactElement;
};

const customRender = (
  ui: ReactElement,
  { preloadedState, ...renderOptions }: { preloadedState?: PreloadedState } = {},
) => {
  const { store, history } = configureStore(preloadedState);

  const AllTheProviders = ({ children }: AllTheProvidersProps) => (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Providers>{children}</Providers>
      </HistoryRouter>
    </Provider>
  );

  return render(ui, { wrapper: AllTheProviders as ComponentType, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
