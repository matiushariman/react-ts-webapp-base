import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { enqueueToast, removeToast, RemoveToastProps } from './actions';

import type { VariantType, SnackbarKey, TransitionCloseHandler } from 'notistack';

export type ToastDataProps = {
  dismissed?: boolean;
  message: string;
  options: {
    variant: VariantType;
    onClose?: TransitionCloseHandler;
  };
  key: SnackbarKey;
};

export type ToastReducerInitialStateProps = {
  data: ToastDataProps[];
};

const toastReducerInitialState: ToastReducerInitialStateProps = {
  data: [],
};

export const toastReducer = createReducer(toastReducerInitialState, (build) => {
  build.addCase(enqueueToast, (state, action) => {
    state.data.push({ ...action.payload.notification });
  });
  build.addCase(removeToast, (state, action: PayloadAction<RemoveToastProps>) => {
    state.data = state.data.filter((data) => data.key !== action.payload.key);
  });
});
