import get from 'lodash/get';
import some from 'lodash/some';

import { getLoadingMatches } from './utils';

import type { Action } from '@reduxjs/toolkit';
import type { RootState } from 'reducers';

/**
 * return loading selector based on requestName
 */
export const createLoadingSelector =
  (actions: Action[]) =>
  (state: RootState): boolean =>
    some(actions, (action) => {
      const { type } = action;
      const matches = getLoadingMatches(type);

      if (!matches || matches === null) {
        return false;
      }

      const [, requestName] = matches;

      return get(state, `api.loading.${requestName}`);
    });
