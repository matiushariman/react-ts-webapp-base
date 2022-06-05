import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from 'services/Theme/Provider';
import { ToastProvider } from 'services/Toast/Provider';

import type { ReactNode } from 'react';

export type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ThemeProvider>
    <ToastProvider>
      <HelmetProvider>{children}</HelmetProvider>
    </ToastProvider>
  </ThemeProvider>
);
