import { resetApiState } from './actions';
import { getSuccessMatches } from './utils';

import type { Middleware } from '@reduxjs/toolkit';

/**
 * this middleware will reset API success based on requestName as the key
 */
export const successMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  next(action);

  const { type } = action;

  const matches = getSuccessMatches(type);

  if (matches && matches !== null) {
    const [, requestName, requestState] = matches;

    if (requestState === 'Success') {
      storeAPI.dispatch(resetApiState({ requestName }));
    }
  }
};
