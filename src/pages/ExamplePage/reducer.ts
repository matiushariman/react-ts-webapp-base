import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { submitCredentialSuccess, SubmitCredentialSuccessProps } from './actions';

type ExamplePageInitialStateProps = {
  isCredentialAuthenticated: boolean;
};

export const examplePageInitialState: ExamplePageInitialStateProps = {
  isCredentialAuthenticated: false,
};

export const examplePageReducer = createReducer(examplePageInitialState, (builder) =>
  builder.addCase(
    submitCredentialSuccess,
    (state, action: PayloadAction<SubmitCredentialSuccessProps>) => {
      state.isCredentialAuthenticated = action.payload.success;
    },
  ),
);
