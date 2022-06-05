import omit from 'lodash/omit';

import { resetApiState, ResetApiStateProps } from './actions';
import { getSuccessMatches, GetSuccessMatchesProps } from './utils';

import type { PayloadAction } from '@reduxjs/toolkit';

export const successReducer = (
  state = {},
  action: PayloadAction<ResetApiStateProps>,
): Record<string, unknown> => {
  const { type, payload } = action;
  const matches: GetSuccessMatchesProps = getSuccessMatches(type);

  switch (type) {
    // this will reset the api success state based on key
    case resetApiState.type:
      if (Object.keys(state).length > 0) {
        const newState = omit(state, [payload.requestName]);

        return newState;
      }

      return state;
    /**
     * this reducer state is dynamically generated
     */
    default: {
      if (!matches || matches === null) return state;

      const [, requestName, requestState] = matches;

      return {
        ...state,
        [requestName]: requestState === 'Success',
      };
    }
  }
};
