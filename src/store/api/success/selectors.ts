import get from 'lodash/get';
import some from 'lodash/some';

import { getSuccessMatches } from './utils';

import type { Action } from '@reduxjs/toolkit';
import type { RootState } from 'reducers';

/**
 * return success selector based on requestName
 */
export const createSuccessSelector =
  (actions: Action[]) =>
  (state: RootState): boolean =>
    some(actions, (action) => {
      const { type } = action;
      const matches = getSuccessMatches(type);

      if (!matches || matches === null) {
        return false;
      }

      const [, requestName] = matches;

      return get(state, `api.success.${requestName}`);
    });
