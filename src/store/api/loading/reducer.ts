import { getLoadingMatches, GetLoadingMatchesProps } from './utils';

import type { Action } from '@reduxjs/toolkit';

/**
 * this reducer state is dynamically generated
 */
export const loadingReducer = (state = {}, action: Action): Record<string, unknown> => {
  const { type } = action;

  const matches: GetLoadingMatchesProps = getLoadingMatches(type);

  if (!matches || matches === null) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === 'Request',
  };
};
