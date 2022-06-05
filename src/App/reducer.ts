import { createReducer } from '@reduxjs/toolkit';

import { toggleThemeMode } from './actions';

export enum themeMode {
  'dark' = 'dark',
  'light' = 'light',
}

export type ThemeModeProps = themeMode.dark | themeMode.light;

export type ThemeProps = {
  mode: ThemeModeProps;
};

export type AppInitialState = {
  theme: ThemeProps;
};

export const appInitialState: AppInitialState = {
  theme: {
    mode: themeMode.light,
  },
};

export const appReducer = createReducer(appInitialState, (builder) =>
  builder.addCase(toggleThemeMode, (state) => {
    const newThemeMode = state.theme.mode === themeMode.light ? themeMode.dark : themeMode.light;

    state.theme.mode = newThemeMode;
  }),
);
