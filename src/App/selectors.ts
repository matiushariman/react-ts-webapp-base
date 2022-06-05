import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'reducers';

const appSelector = (state: RootState) => state.app;

export const selectThemeMode = createSelector(appSelector, (app) => app.theme.mode);
