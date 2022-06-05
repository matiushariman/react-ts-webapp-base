import { createSelector } from '@reduxjs/toolkit';

import { createLoadingSelector } from 'store/api/loading/selectors';

import { submitCredentialRequest } from './actions';

import type { RootState } from 'reducers';

const examplePageSelector = (state: RootState) => state.examplePage;

export const selectExamplePageIsCredentialAuthenticated = createSelector(
  examplePageSelector,
  (examplePage) => examplePage.isCredentialAuthenticated,
);

// loading selectors
export const selectSubmitCredentialLoading = (state: RootState): boolean =>
  createLoadingSelector([submitCredentialRequest])(state);
