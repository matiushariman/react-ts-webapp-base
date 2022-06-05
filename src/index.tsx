import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';

import { IS_MOCK_ENABLED } from 'utils/mockUtils';

import 'index.css';
import App from './App';
import { store, history, persistor } from './configureStore';
import { Providers } from './Providers';
import reportWebVitals from './reportWebVitals';

if (IS_MOCK_ENABLED) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./__mocks__/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers>
          <HistoryRouter history={history}>
            <App />
          </HistoryRouter>
        </Providers>
        <CssBaseline />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
