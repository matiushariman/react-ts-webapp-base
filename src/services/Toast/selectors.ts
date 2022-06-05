import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'reducers';

const selectToast = (state: RootState) => state.toast;

export const selectToastData = createSelector(selectToast, (toast) => toast.data);
