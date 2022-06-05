import { createAction } from '@reduxjs/toolkit';

export type ResetApiStateProps = {
  requestName: string;
};

export const resetApiState = createAction<ResetApiStateProps>('resetApiState');
