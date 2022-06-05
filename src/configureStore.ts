import {
  configureStore as configureAppStore,
  MiddlewareArray,
  DeepPartial,
  Store,
} from '@reduxjs/toolkit';
import { persistStore, Persistor } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { successMiddleware } from 'store/api/success/middleware';

import { routerMiddleware, createReduxHistory } from './createReduxHistory';
import { createReducer, RootState } from './reducers';
import { rootSaga } from './sagas';

import type { History } from 'history';

export type PreloadedState = DeepPartial<RootState>;

export type ConfigureStore = {
  store: Store;
  history: History;
  persistor: Persistor;
};

export const configureStore = (preloadedState?: PreloadedState): ConfigureStore => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureAppStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: createReducer(),
    middleware: new MiddlewareArray().concat(successMiddleware, sagaMiddleware, routerMiddleware),
    // TODO: figure out what's wrong with the router typing
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    preloadedState: preloadedState !== undefined ? preloadedState : {},
  });
  const persistor = persistStore(store);
  const history = createReduxHistory(store);

  sagaMiddleware.run(rootSaga);

  return { store, history, persistor };
};

const { store, history, persistor } = configureStore();

export { store, history, persistor };

export type AppDispatch = typeof store.dispatch;
