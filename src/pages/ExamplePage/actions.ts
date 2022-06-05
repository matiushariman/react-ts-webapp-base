import { createAction } from '@reduxjs/toolkit';

import type { SubmitCredentialRequestProps } from 'api/exampleApi';

export const submitCredentialRequest =
  createAction<SubmitCredentialRequestProps>('submitCredentialRequest');

export type SubmitCredentialSuccessProps = {
  success: boolean;
};
export const submitCredentialSuccess =
  createAction<SubmitCredentialSuccessProps>('submitCredentialSuccess');

export const submitCredentialFailure = createAction('submitCredentialFailure');
